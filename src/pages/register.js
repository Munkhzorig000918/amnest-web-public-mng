import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import userApiService from "@/services/userApiService";
import Layout from "@/components/layout/Layout";
import Button from "@/components/common/Button";

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
      // Provide default groups as fallback
      setGroups({
        userGroups: [
          { id: 1, title: "ᠠᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ" },
          { id: 2, title: "ᠣᠷᠣᠨ ᠨᠤᠲᠤᠭ ᠤᠨ ᠪᠦᠯᠦᠭ" },
          { id: 3, title: "ᠬᠦᠮᠦᠨ ᠦ ᠡᠷᠬᠡ ᠶᠢᠨ ᠪᠦᠯᠦᠭ" },
        ],
        userSubGroups: [
          { id: 1, userGroupId: 1, title: "ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ" },
          { id: 2, userGroupId: 1, title: "ᠳᠠᠷᠬᠠᠨ" },
          { id: 3, userGroupId: 2, title: "ᠰᠤᠷᠭᠠᠯᠲᠠ" },
          { id: 4, userGroupId: 2, title: "ᠠᠵᠢᠯ ᠤᠨ ᠪᠠᠢᠭᠤᠯᠯᠠᠭᠠ" },
          { id: 5, userGroupId: 3, title: "ᠡᠮᠡᠭᠲᠡᠢ ᠶᠢᠨ ᠡᠷᠬᠡ" },
          { id: 6, userGroupId: 3, title: "ᠡᠷᠡᠭᠲᠡᠢ ᠶᠢᠨ ᠡᠷᠬᠡ" },
        ],
      });
      console.warn(
        "ᠪᠦᠯᠦᠭ ᠦᠨ ᠮᠡᠳᠡᢉᠡᠯᠦᠯ ᠠᠴᠠᠭᠠᠯᠠᢈᠠᠳ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ, ᠠᠨᠠᠭᠠᠬᠢ ᠪᠦᠯᠦᠭ ᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ",
        error
      );
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
        "ᠲᠠᠨ ᠤ᠋ ᠤᠲᠠᠰᠤᠨ ᠳ᠋ᠤ 6 ᠣᠷᠣᠨᠲᠠᠢ ᠻᠣᠳ ᠢᠯᠭᠡᢉᠡᠯᠡᢉᠡ! ᠲᠠ ᠻᠣᠳ ᠢ᠋ᠭ ᠪᠠᠲᠠᠯᠭᠠᠵᠤᠭᠤᠯᠠᢈᠤ ᠻᠣᠳ ᢈᠡᠰᠦᠭ ᠲᠦ ᠣᠷᠣᠭᠤᠯᠨ᠎ᠠ ᠤᠤ!"
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "ᠻᠣᠳ ᠢᠯᠭᠡᢉᠡᢈᠦᠳ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ"
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
          "ᠪᠦᠷᠲᠦᠭᠡᠯ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ"
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
    <Layout>
      <div className="container mx-auto px-4 w-full flex justify-center items-center bg-[#363636] min-h-screen h-full py-10">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 lg:p-12 flex flex-col sm:flex-row gap-6">
            {/* Title */}
            <div className="text-center mb-8">
              <h1
                className="text-3xl font-bold text-gray-800"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                  margin: "0 auto",
                }}
              >
                ᠪᠦᠷᠲᠦᠭᠦᠯᢈᠦ
              </h1>
            </div>

            {/* Message */}
            {message && (
              <div className="mb-6 flex justify-center">
                <div
                  className={`p-4 rounded-lg max-w-md ${
                    message.includes("ᠠᠯᠳᠠᠭ᠎ᠠ")
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    minHeight: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {message}
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto"
            >
              {/* Group Selection */}
              <div className="flex flex-row gap-2">
                <label
                  className="text-lg font-medium text-gray-700"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ᠪᠦᠯᠦᠭ*:
                </label>
                <select
                  name="groupId"
                  value={formData.groupId}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 pl-1 text-center rounded-lg"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {groups.userGroups?.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sub Group Selection */}
              <div className="flex flex-row gap-2">
                <label
                  className="text-lg font-medium text-gray-700"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ᠳᠡᠳ ᠪᠦᠯᠦᠭ*:
                </label>
                <select
                  name="subGroupId"
                  value={formData.subGroupId || ""}
                  onChange={handleInputChange}
                  disabled={!formData.groupId}
                  className="border-2 border-gray-300 pl-1 text-center rounded-lg"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  <option value="">ᠰᠣᠩᠭᠣᠨ᠎ᠠ ᠤᠤ</option>
                  {availableSubGroups.map((subGroup) => (
                    <option key={subGroup.id} value={subGroup.id}>
                      {subGroup.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone Number */}
              <div className="flex flex-row gap-2">
                <label
                  className="text-lg font-medium text-gray-700"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳᠤᠭᠠᠷ*:
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 text-center w-12 rounded-lg"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  placeholder="xxxxxxxx"
                  maxLength="8"
                />
              </div>

              {/* Verification Code */}
              <div className="flex flex-row gap-2">
                <label
                  className="text-lg font-medium text-gray-700"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ᠪᠠᠲᠠᠯᠭᠠᠵᠤᠭᠤᠯᠠᢈᠤ ᠻᠣᠳ*:
                </label>
                <input
                  name="phoneVerifyCode"
                  type="tel"
                  value={formData.phoneVerifyCode}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 p-3 rounded-lg w-12 text-center"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  placeholder="xxxxxx"
                  maxLength="6"
                />
              </div>

              {/* Send Code Button */}
              <div className="flex justify-center">
                <Button
                  text={
                    timeLeft > 0 ? `ᠻᠣᠳ ᠢᠯᠭᠡᢉᠦ (${timeLeft})` : "ᠻᠣᠳ ᠢᠯᠭᠡᢉᠦ"
                  }
                  type="secondary"
                  disabled={!canSendCode || loading}
                  onClick={sendSmsCode}
                  className="py-2 px-4 text-lg"
                />
              </div>

              {/* Password */}
              <div className="flex flex-row gap-2">
                <label
                  className="text-lg font-medium text-gray-700"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ*:
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 p-3 rounded-lg w-12 text-center"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  placeholder="ᠬᠠᠮᠤᠭᠢᠢᠨ ᠪᠠᠭᠠᠳᠠᠭ᠎ᠠ 6 ᠲᠡᠮᠳᠡᠭᠲᠦ"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-row gap-2">
                <label
                  className="text-lg font-medium text-gray-700"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠳᠠᠪᠲᠠᢈᠤ*:
                </label>
                <input
                  name="passwordConfirm"
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 p-3 rounded-lg w-12 text-center"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  placeholder="ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡᠭ᠎ᠡ ᠳᠠᠬᠢᠨ ᠣᠷᠣᠭᠤᠯᠨ᠎ᠠ ᠤᠤ"
                />
              </div>

              <Button
                text={loading ? "ᠤᠨᠰᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ..." : "ᠪᠦᠷᠲᠦᠭᠡᠯ ᠦᠦᠰᠭᠡᢈᠦ"}
                type="primary"
                disabled={!isFormValid() || loading}
                onClick={handleSubmit}
                className="py-3 px-8 text-lg"
              />

              {/* Back to Login Link */}
              <div className="text-center col-span-1 md:col-span-2">
                <button
                  type="button"
                  onClick={() => router.push("/member")}
                  className="text-blue-600 hover:text-blue-800"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    height: "150px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  ᠨᠡᠪᠲᠡᠷᠡᢈᠦ ᢈᠤᠤᠳᠠᠰ ᠷᠤᠤ ᠪᠤᠴᠠᢈᠤ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
