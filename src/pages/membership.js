import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import userApiService from "@/services/userApiService";
import MemberDesktop from "@/components/member/MemberDesktop";
import MemberMobile from "@/components/member/MemberMobile";
import SectionTitle from "@/components/common/SectionTitle";
import Layout from "@/components/layout/Layout";
import toast from "react-hot-toast";

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

  useEffect(() => {
    checkAuthStatus();

    if (registered === "true") {
      toast.success("ᠪᠦᠷᠲᠡᠭᠦᠯ ᠠᠮᠵᠢᠯᠲᠲᠠᠢ ᠦᠦᠰᠦᠯᠡᠭᠡ! ᠲᠠ ᠨᠡᠪᠲᠡᠷᠡᠵᠦ ᠣᠷᠣᠵ ᠪᠣᠯᠨᠣ᠃");
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
        toast.success("ᠠᠮᠵᠢᠯᠲᠲᠠᠢ ᠨᠡᠪᠲᠡᠷᠡᠯᠡᠭᠡ!");
        setLoginData({ phone: "", password: "" });
      }
    } catch (error) {
      toast.error(
        "ᠨᠡᠪᠲᠡᠷᠡᠬᠦᠳ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ: " +
          (error.response?.data?.message ||
            error.message ||
            "ᠦᠨᠴᠠᠷᠠᠭᠤᠯᠠᠭᠰᠠᠨ ᠠᠯᠳᠠᠭ᠎ᠠ")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    userApiService.auth.logout();
    setIsLoggedIn(false);
    setUser(null);
    toast.success("ᠠᠮᠵᠢᠯᠲᠲᠠᠢ ᠭᠠᠷᠯᠠᠭ᠎ᠠ");
  };

  return (
    <Layout>
      <MemberDesktop
        user={isLoggedIn ? user : null}
        onLogout={handleLogout}
        onLogin={handleLogin}
        loginData={loginData}
        setLoginData={setLoginData}
        loading={loading}
      />

      <MemberMobile
        user={isLoggedIn ? user : null}
        onLogout={handleLogout}
        onLogin={handleLogin}
        loginData={loginData}
        setLoginData={setLoginData}
        loading={loading}
      />
    </Layout>
  );
}
