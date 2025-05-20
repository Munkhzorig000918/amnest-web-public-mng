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
      <div className="h-screen flex items-center justify-start">
        <Header />
        {children}
        <Footer />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <HeaderMobile />
          {children}
        <FooterMobile />
      </div>
    </>
  );
} 