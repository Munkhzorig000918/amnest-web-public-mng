import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { authService } from "@/services/userApiService";
import { useState } from "react";

export default function MemberMobile({
  user,
  onLogout,
  onLogin,
  loginData,
  setLoginData,
  loading,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      password: "",
      rememberPassword: false,
    },
  });

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      console.log("Login attempt with data:", {
        phone: data.phone,
        password: "***",
      });

      const response = await authService.login({
        phone: data.phone,
        password: data.password,
      });

      console.log("Login response:", response);

      if (response.token) {
        localStorage.setItem("auth_token", response.token);
        toast.success("ᠠᠮᠵᠢᠯᠲᠲᠠᠢ ᠨᠡᠪᠲᠡᠷᠡᠯᠡᠭᠡ!");
        reset();
        // Trigger parent component to refresh user data
        window.location.reload();
      }
    } catch (error) {
      console.error("Login error details:", error);

      let errorMessage = "ᠦᠨᠴᠠᠷᠠᠭᠤᠯᠠᠭᠰᠠᠨ ᠠᠯᠳᠠᠭ᠎ᠠ";

      if (error.message && error.message.includes("JSON.parse")) {
        errorMessage = "ᠰᠡᠷᠪᠡᠷ ᠤᠨ ᠰᠠᠳᠠᠭᠠᠨ ᠠᠯᠳᠠᠭ᠎ᠠ - ᠳᠠᠬᠢᠨ ᠣᠷᠣᠯᠳᠣᠭ᠎ᠠ";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast.error("ᠨᠡᠪᠲᠡᠷᠡᠬᠦᠳ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ: " + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const LoginForm = () => (
    <div className="overflow-x-auto">
      <div className="flex flex-col gap-6">
        {/* Main Info Section */}
        <div className="flex gap-2 max-h-[150px] overflow-x-auto">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠲᠠ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ:
          </h2>
          <p
            className="text-[10px]"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠪᠣᠯᠤᠨ ᠳᠣᠲᠤᠭᠠᠳᠤ ᠶ᠋ᠢᠨ
            ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠳ᠋ᠤ ᠴᠠᢈᠢᠮ᠂ ᠴᠠᢈᠢᠮ ᠪᠤᠰᠤ ᢈᠡᠯᠪᠡᠷᠢ ᠪᠡᠷ ᠣᠷᠤᠯᠴᠠᠬᠤ᠂
            ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᠥᠪᠡᠷ ᠦ᠋ᠨ ᠮᠡᠳᠡᠯᢉᠡ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶ᠋ᠢ ᠨᠡᠮᠡᢉᠳᠡᢉᠦᠯᢈᠦ ᠰᠤᠷᠭᠠᠯᠲᠠ᠂
            ᢈᠡᠯᠡᠯᠴᠡᢉᠦᠯᢉᠡ ᠳ᠋ᠦ ᠬᠠᠮᠤᠷᠤᠭᠳᠠᠬᠤ᠃ <br />
            <br />
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠨᠣᠴᠤᠲᠠᠢ ᠵᠥᠷᠢᠴᠡᠯ ᠡᠴᠡ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ
            ᠲᠤᠰᠠᠯᠠᠵᠤ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠃{" "}
            <br />
            <br />
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ ᢈᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠦᠶ᠎ᠡ
            ᠶ᠋ᠢᠨ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ᠂ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢ ᠴᠠᠭ ᠠᠯᠳᠠᠯ ᠦᢉᠡᠢ ᠠᠪᠬᠤ᠃ <br />
            <br />
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ ᠨᠡᠶᠢᠲᠡᠯᠡᠯ ᠪᠢᠴᠢᢈᠦ᠂ ᠠᠻᠲ᠋ᠢᠸᠢᠰᠮ
            ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠃ <br />
            <br />
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ ᠦᠨᠳᠦᠰᠦᠨ ᠦ᠋᠂ ᠪᠦᠰᠡ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᠪᠣᠯᠤᠨ
            ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠲᠦᠪᠰᠢᠨ ᠳ᠋ᠦ ᠭᠠᠷᠴᠤ ᠮᠠᠩᠯᠠᠶᠢᠯᠠᠬᠤ᠂ ᠮᠡᠳᢈᠡᠯᠴᠡᢈᠦ᠃ <br />
            <br />
            ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠶ᠋ᠢᠨ ᠠᠯᠢ ᠨᠢᢉᠡ ᠪᠦᠯᠦᢉ᠂ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᠪᠠᠭ ᠲᠤ ᠣᠷᠤᠵᠤ᠂ ᠦᠨᠡᠲᠦ
            ᠵᠦᠢᠯ ᠨᠢᢉᠡ ᠲᠡᠢ ᠨᠠᠶᠢᠵᠠ ᠨᠥᢈᠦᠳ᠂ ᠬᠠᠮᠲᠤ ᠣᠯᠠᠨ ᠲᠠᠢ ᠪᠣᠯᠬᠤ᠃ <br />
            <br />
          </p>
        </div>

        {/* App Download Section */}
        <div className="flex gap-2 max-h-[150px] overflow-x-auto">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠬᠤᠪᠢ ᠶ᠋ᠢᠨ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ᠶᠡᠨ ᠤᠰᠠᠳᠬᠠᠬᠤ:
          </h2>
          <p
            className="text-[10px]"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠲᠠ ᠸᠧᠪᠰᠠᠶᠢᠲ ᠢ᠋ᠶᠠᠷ ᠡᠰᠡᠪᠡᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠠᠫᠫᠯᠢᠻᠧᠶᠢᠱᠢᠨ᠋ ᠢ᠋ᠶᠡᠷ ᠨᠡᠪᠲᠡᠷᠡᠵᠦ ᠥᠪᠡᠷ
            ᠦ᠋ᠨ ᠬᠤᠪᠢ ᠶ᠋ᠢᠨ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ᠶᠡᠨ ᠤᠰᠠᠳᠬᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃
          </p>
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              href="https://www.play.google.com/store/apps/details?id=com.amnest.amnest"
            >
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={80}
                height={30}
              />
            </Link>
            <Link
              target="_blank"
              href="https://apps.apple.com/app/id15800000000000000"
            >
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={80}
                height={30}
              />
            </Link>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="flex gap-2">
          {/* Phone Field */}
          <div className="flex gap-2">
            <p
              className="text-[10px]"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳ᠋ᠤᠭᠠᠷ:
            </p>
            <input
              {...register("phone", { required: true })}
              type="text"
              className="border border-gray-300 rounded-md p-2 w-10 text-[10px]"
              placeholder="᠙᠙᠑᠒᠓᠔᠕᠖"
              maxLength="8"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            />
          </div>

          {/* Password Field */}
          <div className="flex gap-2">
            <p
              className="text-[10px]"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠨᠢᠭᠤᠴᠠ ᠦᢉᠡ:
            </p>
            <input
              {...register("password", { required: true })}
              type="password"
              className="border border-gray-300 rounded-md p-2 w-10 text-[10px]"
              placeholder="ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            />
          </div>

          {/* Remember Password Checkbox */}
          <div className="flex flex-col gap-2">
            <p
              className="text-[10px]"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠨᠢᠭᠤᠴᠠ ᠦᢉᠡ ᠰᠠᠨᠠᠭᠤᠯᠬᠤ
            </p>
            <input
              {...register("rememberPassword")}
              type="checkbox"
              className="w-4 h-4 mt-1"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-2 ml-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`p-2 rounded-md text-[10px] font-bold bg-[#FFFF00] text-black flex items-center justify-center ${
                isLoading
                  ? "cursor-not-allowed opacity-70"
                  : "hover:brightness-105 transition-all"
              }`}
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "50px",
              }}
            >
              {isLoading ? "ᠨᠡᠪᠲᠡᠷᠡᠵᠦ ᠪᠠᠢᠨᠠ..." : "ᠨᠡᠪᠲᠡᠷᠡᢈᠦ"}
            </button>
          </div>

          {/* Register Link */}
          <div className="flex gap-2">
            <p
              onClick={() => router.push("/register")}
              className="p-2 text-[10px] font-bold cursor-pointer text-center flex items-center justify-center"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "50px",
              }}
            >
              ᠨᠢᠭᠤᠴᠠ ᠦᢉᠡ ᠮᠠᠷᠲᠠᠭᠰᠠᠨ?
            </p>
          </div>

          {/* Reset Password Button */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => router.push("/reset-password")}
              className="p-2 rounded-md text-[10px] font-bold bg-[#FFFF00] text-black flex items-center justify-center hover:brightness-105 transition-all"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "50px",
              }}
            >
              ᠪᠦᠷᠢᠳᢈᠡᠯ ᠡᢉᠦᠰᢈᠡᢈᠦ
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const UserDashboard = () => (
    <div className="flex flex-col gap-4">
      {/* Logout Button */}
      <div className="flex justify-center">
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
            width: "50px",
            height: "80px",
          }}
        >
          ᠭᠠᠷᠠᠬᠤ
        </button>
      </div>

      {/* Horizontal scrolling sections matching desktop pattern */}
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex gap-2 pb-4 min-w-max">
          {/* Welcome */}
          <div className="flex gap-2">
            <h2
              className="text-sm font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠲᠠᠪᠠᠲᠠᠢ ᠮᠣᠷᠢᠯᠨᠠ ᠤᠤ, {user?.name || user?.phone}!
            </h2>
            <p
              className="text-xs"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ ᠢ ᠵᠠᠰᠠᠬᠤ᠂ ᠭᠢᠰᠢᠦᠨ ᠴᠢᠯᠡᠯ ᠢ ᠪᠠᠢᠭᠤᠯᠬᠤ᠂ ᠬᠠᠨᠳᠢᠪ ᠥᠭᠬᠦ
              ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠳᠤ ᠣᠷᠣᠯᠴᠠᠬᠤ ᠪᠣᠯᠣᠮᠵᠢᠲᠠᠢ᠃
            </p>
          </div>

          {/* Profile Info */}
          <div className="flex gap-2">
            <h2
              className="text-sm font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ
            </h2>
            <div className="text-xs">
              <p
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠤᠲᠠᠰᠤ: {user?.phone} | ᠢᠮᠡᠶᠢᠯ: {user?.email || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"} |
                ᠨᠡᠷ᠎ᠡ: {user?.name || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
              </p>
            </div>
            <button
              onClick={() => router.push("/member/profile")}
              className="p-2 rounded-md text-xs font-bold bg-blue-500 text-white hover:bg-blue-600"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "40px",
              }}
            >
              ᠵᠠᠰᠠᠬᠤ
            </button>
          </div>

          {/* Membership Info */}
          <div className="flex gap-2">
            <h2
              className="text-sm font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠭᠢᠰᠢᠦᠨ ᠴᠢᠯᠡᠯ
            </h2>
            <div className="text-xs">
              <p
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠲᠥᠯᠦᠪ: {user?.membershipStatus || "ᠭᠢᠰᠢᠦᠨ ᠪᠢᠰᠢ"} | ᠪᠦᠯᠦᠭ:{" "}
                {user?.group || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
              </p>
            </div>
            <button
              onClick={() => router.push("/member/membership")}
              className="p-2 rounded-md text-xs font-bold bg-green-500 text-white hover:bg-green-600"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "40px",
              }}
            >
              ᠭᠢᠰᠢᠦᠨ ᠪᠣᠯᠬᠤ
            </button>
          </div>

          {/* Events */}
          <div className="flex gap-2">
            <h2
              className="text-sm font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠮᠢᠨᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ
            </h2>
            <p
              className="text-xs"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠲᠠᠨ ᠤ ᠪᠦᠷᠲᠡᠭᠦᠯᠦᠭᠰᠡᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢᠨ ᠵᠠᠭᠰᠠᠭᠠᠯᠲᠠ
            </p>
            <button
              onClick={() => router.push("/member/events")}
              className="p-2 rounded-md text-xs font-bold bg-purple-500 text-white hover:bg-purple-600"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "40px",
              }}
            >
              ᠦᠵᠡᠬᠦ
            </button>
          </div>

          {/* Donations */}
          <div className="flex gap-2">
            <h2
              className="text-sm font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠮᠢᠨᠦ ᠬᠠᠨᠳᠢᠪ
            </h2>
            <p
              className="text-xs"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠬᠠᠨᠳᠢᠪ ᠤᠨ ᠲᠦᠦᠬᠡ ᠪᠣᠯᠤᠨ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪ
            </p>
            <button
              onClick={() => router.push("/member/donations")}
              className="p-2 rounded-md text-xs font-bold bg-yellow-500 text-white hover:bg-yellow-600"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "40px",
              }}
            >
              ᠦᠵᠡᠬᠦ
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <h2
              className="text-sm font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠱᠤᠤᠷᠬᠠᠢ ᠦᠢᠯᠡᠳᠦᠯ
            </h2>
            <button
              onClick={() => router.push("/donation")}
              className="p-2 rounded-md text-xs font-bold bg-red-500 text-white hover:bg-red-600"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "40px",
              }}
            >
              ᠬᠠᠨᠳᠢᠪ ᠥᠭᠬᠦ
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="p-2 rounded-md text-xs font-bold bg-blue-500 text-white hover:bg-blue-600"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
                width: "40px",
              }}
            >
              ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col sm:hidden gap-4">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="h-full flex flex-col gap-4 p-4">
        {/* Title */}
        <div className="flex gap-2 max-h-[150px] overflow-x-auto">
          <h1
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠶᠠᠭᠠᢈᠢᠭᠠᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠴᠢᠬᠤᠯᠠ ᠪᠤᠢ?
          </h1>
          <p
            className="text-[10px]"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠵᠥᠷᠢᠴᠡᢉᠦᠯᠦᠨ ᠠᠮᠢᠳᠤᠷᠠᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠪᠠᠨ ᠪᠢᠳᠡ ᠠᠩᠵᠠᠭᠠᠷᠠᠳᠠᠭ ᠦᢉᠡᠢ᠃ ᠬᠠᠷᠢᠨ ᢈᠦᠮᠦᠨ
            ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠨᠡ ᠨᠥᢈᠦᠴᠡᠯ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠮᠠᠰᠢ ᠶᠡᢈᠡ ᠪᠣᠯᠤᠮᠵᠢ
            ᠪᠠᠶᠢᠳᠠᠭ᠃ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᢈᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠳ᠋ᠦ ᠮᠡᠨᠳᠦᠯᠡᢈᠦ ᠳ᠋ᠡᢉᠡᠨ ᠥᠪᠡᠷᠰᠡᠳ ᠦ᠋ᠨ
            ᠵᠠᠶᠠᠭᠠᠭᠳᠠᠮᠠᠯ ᠡᠷᢈᠡ ᠲᠡᠢ ᠪᠡᠨ ᠲᠥᠷᠦᠳᠡᢉ᠃ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ ᠦᢉᠡᠢ ᠡᠴᠡ ᠪᠣᠯᠵᠤ
            ᠡᠳᠦᠷ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ{" "}
          </p>
        </div>

        {/* Content */}
        {user ? <UserDashboard /> : <LoginForm />}
      </div>
    </div>
  );
}
