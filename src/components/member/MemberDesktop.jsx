import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { useRouter } from "next/router";
import SectionTitle from "../common/SectionTitle";
import toast from "react-hot-toast";

export default function MemberDesktop({
  user,
  onLogout,
  onLogin,
  loginData,
  setLoginData,
  loading,
}) {
  const router = useRouter();

  const LoginForm = () => (
    <div className="flex gap-7">
      <h2
        className="text-2xl font-bold"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "upright",
        }}
      >
        ᠨᠡᠪᠲᠡᠷᠡᠬᠦ ᠬᠦᠷᠢᠶᠡ
      </h2>

      <form onSubmit={onLogin} className="flex gap-2">
        {/* Phone Field */}
        <div className="flex gap-2">
          <p
            className="text-sm"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠤᠲᠠᠰᠤ ᠨᠤᠮᠤᠷ*
          </p>
          <input
            name="phone"
            type="tel"
            value={loginData.phone}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, phone: e.target.value }))
            }
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="border border-gray-300 rounded-md p-2 w-20"
            placeholder="᠙᠙᠑᠒᠓᠔᠕᠖"
            maxLength="8"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex gap-2">
          <p
            className="text-sm"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ*
          </p>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="border border-gray-300 rounded-md p-2 w-20"
            placeholder="ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading || !loginData.phone || !loginData.password}
            className={`p-2 rounded-md text-sm font-bold ${
              loading || !loginData.phone || !loginData.password
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#FFFF00] text-black hover:brightness-105 transition-all"
            }`}
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            {loading ? "ᠨᠡᠪᠲᠡᠷᠡᠵᠦ ᠪᠠᠢᠨᠠ..." : "ᠨᠡᠪᠲᠡᠷᠡᠬᠦ"}
          </button>
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => router.push("/register")}
            className="p-2 rounded-md text-sm font-bold bg-blue-500 text-white hover:bg-blue-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠪᠦᠷᠲᠡᠭᠦᠯᠦᠬᠦ
          </button>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => router.push("/reset-password")}
            className="p-2 rounded-md text-sm font-bold bg-gray-500 text-white hover:bg-gray-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠮᠠᠷᠲᠠᠭᠰᠠᠨ ᠤᠤ?
          </button>
        </div>
      </form>
    </div>
  );

  const UserDashboard = () => (
    <div className="flex gap-7">
      {/* Welcome Section */}
      <div className="flex gap-7">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠲᠠᠪᠠᠲᠠᠢ ᠮᠣᠷᠢᠯᠨᠠ ᠤᠤ, {user?.name || user?.phone}!
        </h2>
        <p
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
          className="text-sm"
        >
          ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ ᠢ ᠵᠠᠰᠠᠬᠤ᠂ ᠭᠢᠰᠢᠦᠨ ᠴᠢᠯᠡᠯ ᠢ ᠪᠠᠢᠭᠤᠯᠬᠤ᠂ ᠬᠠᠨᠳᠢᠪ ᠥᠭᠬᠦ ᠪᠣᠯᠤᠨ
          ᠪᠤᠰᠤᠳ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠳᠤ ᠣᠷᠣᠯᠴᠠᠬᠤ ᠪᠣᠯᠣᠮᠵᠢᠲᠠᠢ᠃
        </p>
      </div>

      {/* Profile Info */}
      <div className="flex gap-7">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ
        </h2>
        <div className="flex gap-2">
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠤᠲᠠᠰᠤ: {user?.phone} | ᠢᠮᠡᠶᠢᠯ: {user?.email || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"} |
            ᠨᠡᠷ᠎ᠡ: {user?.name || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
          </p>
          <button
            onClick={() => router.push("/member/profile")}
            className="p-2 rounded-md text-sm font-bold bg-blue-500 text-white hover:bg-blue-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠵᠠᠰᠠᠬᠤ
          </button>
        </div>
      </div>

      {/* Membership Info */}
      <div className="flex gap-7">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠭᠢᠰᠢᠦᠨ ᠴᠢᠯᠡᠯ
        </h2>
        <div className="flex gap-2">
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠲᠥᠯᠦᠪ: {user?.membershipStatus || "ᠭᠢᠰᠢᠦᠨ ᠪᠢᠰᠢ"} | ᠪᠦᠯᠦᠭ:{" "}
            {user?.group || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
          </p>
          <button
            onClick={() => router.push("/member/membership")}
            className="p-2 rounded-md text-sm font-bold bg-green-500 text-white hover:bg-green-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠭᠢᠰᠢᠦᠨ ᠪᠣᠯᠬᠤ
          </button>
        </div>
      </div>

      {/* Events */}
      <div className="flex gap-7">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠮᠢᠨᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ
        </h2>
        <div className="flex gap-2">
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠲᠠᠨ ᠤ ᠪᠦᠷᠲᠡᠭᠦᠯᠦᠭᠰᠡᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢᠨ ᠵᠠᠭᠰᠠᠭᠠᠯᠲᠠ
          </p>
          <button
            onClick={() => router.push("/member/events")}
            className="p-2 rounded-md text-sm font-bold bg-purple-500 text-white hover:bg-purple-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠦᠵᠡᠬᠦ
          </button>
        </div>
      </div>

      {/* Donations */}
      <div className="flex gap-7">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠮᠢᠨᠦ ᠬᠠᠨᠳᠢᠪ
        </h2>
        <div className="flex gap-2">
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠬᠠᠨᠳᠢᠪ ᠤᠨ ᠲᠦᠦᠬᠡ ᠪᠣᠯᠤᠨ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪ
          </p>
          <button
            onClick={() => router.push("/member/donations")}
            className="p-2 rounded-md text-sm font-bold bg-yellow-500 text-white hover:bg-yellow-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠦᠵᠡᠬᠦ
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-7">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠱᠤᠤᠷᠬᠠᠢ ᠦᠢᠯᠡᠳᠦᠯ
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/donation")}
            className="p-2 rounded-md text-sm font-bold bg-red-500 text-white hover:bg-red-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠬᠠᠨᠳᠢᠪ ᠥᠭᠬᠦ
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="p-2 rounded-md text-sm font-bold bg-blue-500 text-white hover:bg-blue-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
          </button>
          <button
            onClick={onLogout}
            className="p-2 rounded-md text-sm font-bold bg-red-500 text-white hover:bg-red-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              width: "60px",
            }}
          >
            ᠭᠠᠷᠠᠬᠤ
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-16 p-4 h-full">
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠬᠦᠨᠳᠦᠯᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠡᠰᠡᠭ
          </h2>
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠮᠥᠨ ᠪᠢᠳᠡ ᠡᠮᠨᠧᠰᠲᠢ ᠢᠨᠲᠧᠷᠨᠧᠰᠢᠩᠯᠦ ᠶᠢᠨ ᠬᠦᠨᠳᠦᠯᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠡᠰᠡᠭ ᠳᠦ ᠲᠠ ᠪᠦᠬᠦᠨ
            ᠳᠦ ᠪᠡᠨ ᠬᠦᠷᠭᠡᠵᠦ ᠪᠠᠢᠨᠠ᠃ ᠡᠨᠳᠡ ᠲᠠ ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ ᠢ ᠵᠠᠰᠠᠬᠤ᠂ ᠭᠢᠰᠢᠦᠨ
            ᠴᠢᠯᠡᠯ ᠢ ᠪᠠᠢᠭᠤᠯᠬᠤ᠂ ᠬᠠᠨᠳᠢᠪ ᠥᠭᠬᠦ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠳᠤ ᠣᠷᠣᠯᠴᠠᠬᠤ
            ᠪᠣᠯᠣᠮᠵᠢᠲᠠᠢ᠃
          </p>
        </div>

        {user ? <UserDashboard /> : <LoginForm />}
      </div>
    </div>
  );
}
