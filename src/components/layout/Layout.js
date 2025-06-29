import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderMobile from "@/components/layout/HeaderMobile";
import FooterMobile from "@/components/layout/FooterMobile";

export default function Layout({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      e.preventDefault(); // stop vertical scrolling
      el.scrollLeft += e.deltaY; // map vertical scroll to horizontal
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      {/* Desktop Layout */}
      <div className="h-screen items-center justify-start hidden md:flex">
        <Header />
        {children}
        <Footer />
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden min-h-screen">
        <HeaderMobile />
        <div className="flex-1">{children}</div>
        <FooterMobile />
      </div>
    </>
  );
}
