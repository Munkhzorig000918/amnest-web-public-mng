import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function MemberMobile({
  user,
  onLogout,
  onLogin,
  loginData,
  setLoginData,
  loading,
}) {
  const router = useRouter();

  const LoginForm = () => (
    <div className="flex flex-col gap-4">
      <form onSubmit={onLogin} className="space-y-4">
        <div className="flex gap-2">
          <label
            className="text-xs"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              minWidth: "40px",
            }}
          >
            ᠤᠲᠠᠰᠤ ᠨᠤᠮᠤᠷ*
          </label>
          <input
            name="phone"
            type="tel"
            value={loginData.phone}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
            placeholder="᠙᠙᠑᠒᠓᠔᠕᠖"
            maxLength="8"
            required
          />
        </div>

        <div className="flex gap-2">
          <label
            className="text-xs"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
              minWidth: "40px",
            }}
          >
            ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ*
          </label>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
            placeholder="ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !loginData.phone || !loginData.password}
          className={`w-full py-2 px-4 rounded font-medium text-sm ${
            loading || !loginData.phone || !loginData.password
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#FFFF00] text-black hover:brightness-105 transition-all"
          }`}
        >
          {loading ? "ᠨᠡᠪᠲᠡᠷᠡᠵᠦ ᠪᠠᠢᠨᠠ..." : "ᠨᠡᠪᠲᠡᠷᠡᠬᠦ"}
        </button>

        <div className="flex gap-2 text-xs">
          <button
            type="button"
            onClick={() => router.push("/register")}
            className="flex-1 bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600"
          >
            ᠪᠦᠷᠲᠡᠭᠦᠯᠦᠬᠦ
          </button>
          <button
            type="button"
            onClick={() => router.push("/reset-password")}
            className="flex-1 bg-gray-500 text-white py-2 px-3 rounded hover:bg-gray-600"
          >
            ᠨᠢᠭᠤᠴᠠ ᠦᠭᠡ ᠮᠠᠷᠲᠠᠭᠰᠠᠨ ᠤᠤ?
          </button>
        </div>
      </form>
    </div>
  );

  const UserDashboard = () => (
    <div className="flex flex-col gap-4">
      {/* Welcome and Logout */}
      <div className="flex flex-col gap-4">
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          ᠭᠠᠷᠠᠬᠤ
        </button>
      </div>

      {/* Horizontal scrolling sections */}
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex gap-4 pb-4">
          {/* Welcome */}
          <div
            className="text-xs font-bold flex-shrink-0 min-w-[150px]"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠲᠠᠪᠠᠲᠠᠢ ᠮᠣᠷᠢᠯᠨᠠ ᠤᠤ, {user?.name || user?.phone}!
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-2 min-w-[150px] flex-shrink-0">
            <div
              className="text-xs font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ
            </div>

            <div className="space-y-1 text-xs">
              <p>
                <strong>ᠤᠲᠠᠰᠤ:</strong> {user?.phone}
              </p>
              <p>
                <strong>ᠢ-ᠮᠧᠶᠢᠯ:</strong> {user?.email || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
              </p>
              <p>
                <strong>ᠨᠡᠷ᠎ᠡ:</strong> {user?.name || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
              </p>
            </div>

            <button
              onClick={() => router.push("/member/profile")}
              className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-xs"
            >
              ᠵᠠᠰᠠᠬᠤ
            </button>
          </div>

          {/* Membership Info */}
          <div className="flex flex-col gap-2 min-w-[150px] flex-shrink-0">
            <div
              className="text-xs font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠭᠢᠰᠢᠦᠨ ᠴᠢᠯᠡᠯ
            </div>

            <div className="space-y-1 text-xs">
              <p>
                <strong>ᠲᠥᠯᠦᠪ:</strong>{" "}
                {user?.membershipStatus || "ᠭᠢᠰᠢᠦᠨ ᠪᠢᠰᠢ"}
              </p>
              <p>
                <strong>ᠪᠦᠯᠦᠭ:</strong> {user?.group || "ᠲᠣᠳᠣᠷᠬᠠᠢᠭᠦᠢ"}
              </p>
            </div>

            <button
              onClick={() => router.push("/member/membership")}
              className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 text-xs"
            >
              ᠭᠢᠰᠢᠦᠨ ᠪᠣᠯᠬᠤ
            </button>
          </div>

          {/* Events */}
          <div className="flex flex-col gap-2 min-w-[150px] flex-shrink-0">
            <div
              className="text-xs font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠢᠨᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ
            </div>

            <p className="text-xs text-gray-600">
              ᠲᠠᠨ ᠤ ᠪᠦᠷᠲᠡᠭᠦᠯᠦᠭᠰᠡᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢᠨ ᠵᠠᠭᠰᠠᠭᠠᠯᠲᠠ
            </p>

            <button
              onClick={() => router.push("/member/events")}
              className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-600 text-xs"
            >
              ᠦᠵᠡᠬᠦ
            </button>
          </div>

          {/* Donations */}
          <div className="flex flex-col gap-2 min-w-[150px] flex-shrink-0">
            <div
              className="text-xs font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠢᠨᠦ ᠬᠠᠨᠳᠢᠪ
            </div>

            <p className="text-xs text-gray-600">
              ᠬᠠᠨᠳᠢᠪ ᠤᠨ ᠲᠦᠦᠬᠡ ᠪᠣᠯᠤᠨ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪ
            </p>

            <button
              onClick={() => router.push("/member/donations")}
              className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 text-xs"
            >
              ᠦᠵᠡᠬᠦ
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-2 min-w-[150px] flex-shrink-0">
            <div
              className="text-xs font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠱᠤᠤᠷᠬᠠᠢ ᠦᠢᠯᠡᠳᠦᠯ
            </div>

            <div className="space-y-1">
              <button
                onClick={() => router.push("/donation")}
                className="w-full bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 text-xs"
              >
                ᠬᠠᠨᠳᠢᠪ ᠥᠭᠬᠦ
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-xs"
              >
                ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col sm:hidden gap-7">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="h-full p-4">
        <div className="h-full flex flex-col gap-7">
          {/* Title and Description */}
          <div className="flex gap-2 max-h-[200px] overflow-x-auto">
            <h1
              className="text-xs font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠬᠦᠨᠳᠦᠯᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠡᠰᠡᠭ
            </h1>
            <p
              className="text-[10px] font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠥᠨ ᠪᠢᠳᠡ ᠡᠮᠨᠧᠰᠲᠢ ᠢᠨᠲᠧᠷᠨᠧᠰᠢᠩᠯᠦ ᠶᠢᠨ ᠬᠦᠨᠳᠦᠯᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠡᠰᠡᠭ ᠳᠦ ᠲᠠ ᠪᠦᠬᠦᠨ
              ᠳᠦ ᠪᠡᠨ ᠬᠦᠷᠭᠡᠵᠦ ᠪᠠᠢᠨᠠ᠃
            </p>
            <p
              className="text-[10px] font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠡᠨᠳᠡ ᠲᠠ ᠬᠤᠪᠢᠶᠠᠨ ᠮᠡᠳᠡᠡᠯᠡᠯ ᠢ ᠵᠠᠰᠠᠬᠤ᠂ ᠭᠢᠰᠢᠦᠨ ᠴᠢᠯᠡᠯ ᠢ ᠪᠠᠢᠭᠤᠯᠬᠤ᠂ ᠬᠠᠨᠳᠢᠪ
              ᠥᠭᠬᠦ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠳᠤ ᠣᠷᠣᠯᠴᠠᠬᠤ ᠪᠣᠯᠣᠮᠵᠢᠲᠠᠢ᠃
            </p>
          </div>

          {/* Content */}
          {user ? <UserDashboard /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
}
