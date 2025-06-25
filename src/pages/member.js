import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import userApiService from "@/services/userApiService";

export default function Member() {
  const router = useRouter();
  const { registered } = router.query;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkAuthStatus();

    if (registered === "true") {
      setMessage("Бүртгэл амжилттай үүслээ! Та нэвтэрч орж болно.");
    }
  }, [registered]);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      try {
        const userData = await userApiService.user.getProfile();
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        // Token is invalid, remove it
        localStorage.removeItem("auth_token");
        setIsLoggedIn(false);
      }
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading || !loginData.phone || !loginData.password) return;

    setLoading(true);
    try {
      const response = await userApiService.auth.login({
        phone: loginData.phone,
        password: loginData.password,
      });

      if (response.token) {
        localStorage.setItem("auth_token", response.token);
        const userData = await userApiService.user.getProfile();
        setUser(userData);
        setIsLoggedIn(true);
        setMessage("Амжилттай нэвтэрлээ!");
        setLoginData({ phone: "", password: "" });
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Нэвтрэхэд алдаа гарлаа"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    userApiService.auth.logout();
    setIsLoggedIn(false);
    setUser(null);
    setMessage("Амжилттай гарлаа");
  };

  // Login Form Component
  const LoginForm = () => (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Нэвтрэх</h2>

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

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Утасны дугаар:
          </label>
          <input
            name="phone"
            type="tel"
            value={loginData.phone}
            onChange={handleLoginChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="99123456"
            maxLength="8"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Нууц үг:</label>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleLoginChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Нууц үг"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !loginData.phone || !loginData.password}
          className={`w-full py-2 px-4 rounded font-medium ${
            loading || !loginData.phone || !loginData.password
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Нэвтэрч байна..." : "Нэвтрэх"}
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        <p>
          Бүртгэл байхгүй юу?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-blue-500 hover:underline"
          >
            Бүртгүүлэх
          </button>
        </p>
        <p className="mt-2">
          <button
            onClick={() => router.push("/reset-password")}
            className="text-blue-500 hover:underline"
          >
            Нууц үгээ мартсан уу?
          </button>
        </p>
      </div>
    </div>
  );

  // User Dashboard Component
  const UserDashboard = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Тавтай морилно уу, {user?.name || user?.phone}!
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Гарах
          </button>
        </div>

        {message && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-700">
            {message}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Хувийн мэдээлэл</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Утас:</strong> {user?.phone}
            </p>
            <p>
              <strong>И-мэйл:</strong> {user?.email || "Тодорхойгүй"}
            </p>
            <p>
              <strong>Нэр:</strong> {user?.name || "Тодорхойгүй"}
            </p>
          </div>
          <button
            onClick={() => router.push("/member/profile")}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Засах
          </button>
        </div>

        {/* Membership Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Гишүүнчлэл</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Төлөв:</strong> {user?.membershipStatus || "Гишүүн биш"}
            </p>
            <p>
              <strong>Бүлэг:</strong> {user?.group || "Тодорхойгүй"}
            </p>
          </div>
          <button
            onClick={() => router.push("/member/membership")}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Гишүүн болох
          </button>
        </div>

        {/* Events Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Миний үйл ажиллагаа</h3>
          <p className="text-sm text-gray-600 mb-4">
            Таны бүртгүүлсэн үйл ажиллагааны жагсаалт
          </p>
          <button
            onClick={() => router.push("/member/events")}
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
          >
            Үзэх
          </button>
        </div>

        {/* Donations Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Миний хандив</h3>
          <p className="text-sm text-gray-600 mb-4">
            Хандивын түүх болон тогтмол хандив
          </p>
          <button
            onClick={() => router.push("/member/donations")}
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Үзэх
          </button>
        </div>

        {/* Settings Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Тохиргоо</h3>
          <p className="text-sm text-gray-600 mb-4">
            Нууц үг солих, и-мэйл засах
          </p>
          <button
            onClick={() => router.push("/member/settings")}
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
          >
            Тохируулах
          </button>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Шуурхай үйлдэл</h3>
          <div className="space-y-2">
            <button
              onClick={() => router.push("/donation")}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm"
            >
              Хандив өгөх
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm"
            >
              Холбоо барих
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Гишүүний хэсэг</h1>

      {isLoggedIn ? <UserDashboard /> : <LoginForm />}
    </div>
  );
}
