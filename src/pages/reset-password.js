import { useState } from "react";
import { useRouter } from "next/router";
import userApiService from "@/services/userApiService";

export default function ResetPassword() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: phone input, 2: code verification, 3: new password
  const [formData, setFormData] = useState({
    phone: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendResetCode = async (e) => {
    e.preventDefault();

    if (loading || !formData.phone || formData.phone.length !== 8) return;

    setLoading(true);
    try {
      await userApiService.auth.resetPasswordSendCode(formData.phone);
      setStep(2);
      setMessage("Таны утсанд баталгаажуулах код илгээлээ!");
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

  const confirmReset = async (e) => {
    e.preventDefault();

    if (
      loading ||
      !formData.code ||
      formData.newPassword !== formData.confirmPassword ||
      formData.newPassword.length < 6
    ) {
      setMessage("Мэдээлэл буруу эсвэл нууц үг таарахгүй байна");
      return;
    }

    setLoading(true);
    try {
      await userApiService.auth.resetPasswordConfirm({
        phone: formData.phone,
        code: formData.code,
        newPassword: formData.newPassword,
      });

      setMessage(
        "Нууц үг амжилттай солигдлоо! Та шинэ нууц үгээрээ нэвтэрч орж болно."
      );
      setTimeout(() => {
        router.push("/member");
      }, 2000);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Нууц үг солихэд алдаа гарлаа"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Нууц үг сэргээх</h1>

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

        {step === 1 && (
          <form onSubmit={sendResetCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Утасны дугаар:
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="99123456"
                maxLength="8"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Бүртгэлтэй утасны дугаараа оруулна уу
              </p>
            </div>

            <button
              type="submit"
              disabled={
                loading || !formData.phone || formData.phone.length !== 8
              }
              className={`w-full py-2 px-4 rounded font-medium ${
                loading || !formData.phone || formData.phone.length !== 8
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {loading ? "Илгээж байна..." : "Код илгээх"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={confirmReset} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Баталгаажуулах код:
              </label>
              <input
                name="code"
                type="text"
                value={formData.code}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="6 оронтой код"
                maxLength="6"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Шинэ нууц үг:
              </label>
              <input
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Хамгийн багадаа 6 тэмдэгт"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Нууц үг давтах:
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Нууц үгээ дахин оруулна уу"
                required
              />
            </div>

            {formData.newPassword &&
              formData.confirmPassword &&
              formData.newPassword !== formData.confirmPassword && (
                <p className="text-red-500 text-sm">Нууц үг таарахгүй байна</p>
              )}

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-2 px-4 rounded font-medium bg-gray-300 text-gray-700 hover:bg-gray-400"
              >
                Буцах
              </button>
              <button
                type="submit"
                disabled={
                  loading ||
                  !formData.code ||
                  formData.newPassword !== formData.confirmPassword ||
                  formData.newPassword.length < 6
                }
                className={`flex-1 py-2 px-4 rounded font-medium ${
                  loading ||
                  !formData.code ||
                  formData.newPassword !== formData.confirmPassword ||
                  formData.newPassword.length < 6
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {loading ? "Солиж байна..." : "Солих"}
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center text-sm">
          <button
            onClick={() => router.push("/member")}
            className="text-blue-500 hover:underline"
          >
            Нэвтрэх хуудас руу буцах
          </button>
        </div>
      </div>
    </div>
  );
}
