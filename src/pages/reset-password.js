import { useState } from "react";
import { useRouter } from "next/router";
import userApiService from "@/services/userApiService";
import Layout from "@/components/layout/Layout";
import Button from "@/components/common/Button";

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
      setMessage("ᠲᠠᠨ ᠤ᠋ ᠤᠲᠠᠰᠤᠨ ᠳ᠋ᠤ ᠪᠠᠲᠠᠯᠭᠠᠵᠤᠭᠤᠯᠠᢈᠤ ᠻᠣᠳ ᠢᠯᠭᠡᢉᠡᠯᠡᢉᠡ!");
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

  const confirmReset = async (e) => {
    e.preventDefault();

    if (
      loading ||
      !formData.code ||
      formData.newPassword !== formData.confirmPassword ||
      formData.newPassword.length < 6
    ) {
      setMessage("ᠮᠡᠳᠡᢉᠡᠯᠦᠯ ᠪᠤᠷᠤᠤ ᠡᠰᠡᢉᠡ ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠲᠠᠠᠷᠠᢈᠤᠭᠦᠢ ᠪᠠᠢᠨ᠎ᠠ");
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
        "ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠠᠮᠵᠢᠯᠲᠲᠠᠢ ᠰᠣᠯᠢᠭᠡᠳᠯᠡᢉᠡ! ᠲᠠ ᠰᠢᠨ᠎ᠡ ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡᠭ᠎ᠡᠷᠡᢉᠡ ᠨᠡᠪᠲᠡᠷᠡᢈᠦ ᠣᠷᠣ ᠪᠣᠯᠨ᠎ᠠ."
      );
      setTimeout(() => {
        router.push("/member");
      }, 2000);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠰᠣᠯᠢᢈᠦᠳ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 w-full flex justify-center items-center bg-[#363636] min-h-screen h-full py-10">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
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
                ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠰᠡᠷᠭᠡᢉᠡᢈᠦ
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

            {/* Step 1: Phone Input */}
            {step === 1 && (
              <form
                onSubmit={sendResetCode}
                className="flex flex-col md:flex-row gap-6 w-full mx-auto"
              >
                <div className="flex flex-row gap-4 md:contents w-full">
                  <div className="flex flex-row gap-2">
                    <label
                      className="text-lg font-medium text-gray-700"
                      style={{
                        writingMode: "vertical-lr",
                      }}
                    >
                      ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳᠤᠭᠠᠷ:
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 text-center rounded-lg flex-1 max-w-12 min-w-12"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                      placeholder="99123456"
                      maxLength="8"
                      required
                    />
                  </div>

                  <p
                    className="text-sm text-gray-500 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠪᠦᠷᠲᠦᠭᠡᠯᠲᠡᠢ ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳᠤᠭᠠᠷᠠᠭ᠎ᠠ ᠣᠷᠣᠭᠤᠯᠨ᠎ᠠ ᠤᠤ
                  </p>

                  <div className="flex justify-center">
                    <Button
                      text={loading ? "ᠢᠯᠭᠡᢉᠦ ᠪᠠᠢᠨ᠎ᠠ..." : "ᠻᠣᠳ ᠢᠯᠭᠡᢉᠦ"}
                      type="primary"
                      disabled={
                        loading ||
                        !formData.phone ||
                        formData.phone.length !== 8
                      }
                      onClick={sendResetCode}
                      className="py-3 px-3 text-lg min-h-max"
                    />
                  </div>
                </div>
              </form>
            )}

            {/* Step 2: Code Verification and New Password */}
            {step === 2 && (
              <form
                onSubmit={confirmReset}
                className="flex flex-row gap-6 w-full max-w-4xl mx-auto"
              >
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row gap-2 col-span-1">
                    <label
                      className="text-lg font-medium text-gray-700"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      ᠪᠠᠲᠠᠯᠭᠠᠵᠤᠭᠤᠯᠠᢈᠤ ᠻᠣᠳ:
                    </label>
                    <input
                      name="code"
                      type="text"
                      value={formData.code}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 p-3 rounded-lg text-center flex-1 md:w-12"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                      placeholder="6 ᠣᠷᠣᠨᠲᠠᠢ ᠻᠣᠳ"
                      maxLength="6"
                      required
                    />
                  </div>

                  <div className="flex flex-row gap-2 col-span-1">
                    <label
                      className="text-lg font-medium text-gray-700"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      ᠰᠢᠨ᠎ᠡ ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ:
                    </label>
                    <input
                      name="newPassword"
                      type="password"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 p-3 rounded-lg text-center flex-1 md:w-12"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                      required
                    />
                  </div>

                  <div className="flex flex-row gap-2 col-span-1">
                    <label
                      className="text-lg font-medium text-gray-700"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠳᠠᠪᠲᠠᢈᠤ:
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 p-3 rounded-lg text-center flex-1 md:w-12"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                      required
                    />
                  </div>

                  {formData.newPassword &&
                    formData.confirmPassword &&
                    formData.newPassword !== formData.confirmPassword && (
                      <p
                        className="text-red-500 text-sm text-center col-span-2 md:col-span-1"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                          height: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠲᠠᠠᠷᠠᢈᠤᠭᠦᠢ ᠪᠠᠢᠨ᠎ᠠ
                      </p>
                    )}

                  <div className="flex gap-4 justify-center col-span-2 md:col-span-1">
                    <Button
                      text="ᠪᠤᠴᠠᢈᠤ"
                      type="secondary"
                      onClick={() => setStep(1)}
                      className="py-3 px-6 text-lg"
                    />
                    <Button
                      text={loading ? "ᠰᠣᠯᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ..." : "ᠰᠣᠯᠢᢈᠤ"}
                      type="primary"
                      disabled={
                        loading ||
                        !formData.code ||
                        formData.newPassword !== formData.confirmPassword ||
                        formData.newPassword.length < 6
                      }
                      onClick={confirmReset}
                      className="py-3 px-3 min-h-max text-lg"
                    />
                  </div>
                </div>
              </form>
            )}
            {/* Back to Login Link */}
            <div className="text-center">
              <button
                onClick={() => router.push("/member")}
                className="text-blue-600 hover:text-blue-800 py-3 px-4"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                  height: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                ᠨᠡᠪᠲᠡᠷᠡᢈᠦ ᢈᠤᠤᠳᠠᠰ ᠷᠤᠤ ᠪᠤᠴᠠᢈᠤ
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
