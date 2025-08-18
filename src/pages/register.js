import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import userApiService from "@/services/userApiService";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    groupId: 1,
    subGroupId: null,
    phone: "",
    phoneVerifyCode: "",
    password: "",
    passwordConfirm: "",
  });

  const [groups, setGroups] = useState({
    userGroups: [],
    userSubGroups: [],
  });

  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [availableAfter, setAvailableAfter] = useState(null);
  const [message, setMessage] = useState("");

  // Load user groups on component mount
  useEffect(() => {
    loadUserGroups();
  }, []);

  // Countdown timer for SMS code
  useEffect(() => {
    let interval = null;
    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && availableAfter) {
      setAvailableAfter(null);
    }
    return () => clearInterval(interval);
  }, [timeLeft, availableAfter]);

  const loadUserGroups = async () => {
    try {
      const response = await userApiService.user.getUserGroups();
      setGroups(response.payload || response);
    } catch (error) {
      console.error("Failed to load user groups:", error);
      setMessage("Бүлгийн мэдээлэл ачаалахад алдаа гарлаа");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset subgroup when group changes
    if (name === "groupId") {
      setFormData((prev) => ({
        ...prev,
        subGroupId: null,
      }));
    }
  };

  const sendSmsCode = async () => {
    if (formData.phone.length !== 8 || loading) return;

    setLoading(true);
    try {
      const response = await userApiService.auth.sendVerificationCode(
        formData.phone
      );
      if (response.payload?.availableAfter) {
        const availableTime = response.payload.availableAfter;
        const currentTime = Math.floor(Date.now() / 1000);
        setTimeLeft(availableTime - currentTime);
        setAvailableAfter(availableTime);
      }
      setMessage(
        "Таны утсанд 6 оронтой код илгээлээ! Та кодыг баталгаажуулах код хэсэгт оруулна уу!"
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Код илгээхэд алдаа гарлаа"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || !isFormValid()) return;

    setLoading(true);
    try {
      await userApiService.auth.register({
        groupId: formData.groupId,
        subGroupId: formData.subGroupId,
        phone: formData.phone,
        phoneVerifyCode: formData.phoneVerifyCode,
        password: formData.password,
      });

      router.push("/member?registered=true");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Бүртгэлд алдаа гарлаа"
      );
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.groupId &&
      formData.subGroupId &&
      formData.phone.length === 8 &&
      formData.phoneVerifyCode.length === 6 &&
      formData.password.length >= 6 &&
      formData.password === formData.passwordConfirm
    );
  };

  const canSendCode = formData.phone.length === 8 && timeLeft === 0;

  // Filter subgroups based on selected group
  const availableSubGroups =
    groups.userSubGroups?.filter(
      (subGroup) => subGroup.userGroupId === parseInt(formData.groupId)
    ) || [];

  return (
    <div className="container mx-auto">
      <div className="flex lg:my-10">
        <div className="w-full pb-10 pt-20 font-[Oswald] sm:px-10 lg:min-h-[600px]">
          <form
            className="mx-auto flex w-fit flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold mb-8">Бүртгүүлэх</h1>

            {message && (
              <div
                className={`mb-4 p-3 rounded ${
                  message.includes("алдаа")
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {message}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row">
              <label className="my-auto min-w-[225px] text-xl">Бүлэг*:</label>
              <select
                name="groupId"
                value={formData.groupId}
                onChange={handleInputChange}
                className="w-[320px] border-2 p-1 px-2 mt-2 text-black"
              >
                {groups.userGroups?.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row">
              <label className="my-auto min-w-[225px] text-xl">
                Дэд бүлэг*:
              </label>
              <select
                name="subGroupId"
                value={formData.subGroupId || ""}
                onChange={handleInputChange}
                disabled={!formData.groupId}
                className="w-[320px] border-2 p-1 px-2 mt-2 text-black"
              >
                <option value="">Сонгоно уу</option>
                {availableSubGroups.map((subGroup) => (
                  <option key={subGroup.id} value={subGroup.id}>
                    {subGroup.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row">
              <label className="my-auto min-w-[225px] text-xl">
                Утасны дугаар*:
              </label>
              <input
                name="phone"
                className="mt-2 w-[320px] flex-1 border border-black p-2"
                type="tel"
                placeholder="xxxxxxxx"
                maxLength="8"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row">
              <label className="my-auto min-w-[225px] text-xl">
                Баталгаажуулах код*:
              </label>
              <input
                name="phoneVerifyCode"
                className="mt-2 w-[320px] flex-1 border border-black p-2"
                type="tel"
                placeholder="xxxxxx"
                maxLength="6"
                value={formData.phoneVerifyCode}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-2 w-full flex justify-end">
              <button
                type="button"
                onClick={sendSmsCode}
                disabled={!canSendCode || loading}
                className={`px-5 ml-5 py-2 text-center text-lg ${
                  canSendCode && !loading
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                {timeLeft > 0 ? `Код илгээх (${timeLeft})` : "Код илгээх"}
              </button>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row">
              <label className="my-auto min-w-[225px] text-xl">Нууц үг*:</label>
              <input
                name="password"
                className="mt-2 w-[320px] flex-1 border border-black p-2"
                type="password"
                placeholder="Хамгийн багадаа 6 тэмдэгт"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row">
              <label className="my-auto min-w-[225px] text-xl">
                Нууц үг давтах*:
              </label>
              <input
                name="passwordConfirm"
                className="mt-2 w-[320px] flex-1 border border-black p-2"
                type="password"
                placeholder="Нууц үгээ дахин оруулна уу"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid() || loading}
              className={`w-[200px] mt-10 py-2 text-center text-lg ${
                isFormValid() && !loading
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {loading ? "Уншиж байна..." : "Бүртгэл үүсгэх"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
