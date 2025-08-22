import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderMobile from "@/components/layout/HeaderMobile";
import FooterMobile from "@/components/layout/FooterMobile";
import DonateFloatingButton from "@/components/common/DonateFloatingButton";

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
      {/* Desktop Layout - Horizontal scrolling for Mongolian script */}
      <div
        ref={scrollRef}
        className="min-h-screen w-full overflow-x-auto overflow-y-hidden flex items-center justify-start hidden md:flex"
        style={{ scrollBehavior: "smooth" }}
      >
        <Header />
        <div className="min-h-screen flex-shrink-0 flex-1">{children}</div>
        <Footer />
      </div>

      {/* Mobile Layout - Keep vertical scrolling */}
      <div className="flex flex-col md:hidden min-h-screen">
        <HeaderMobile />
        <div className="flex-1">{children}</div>
        <FooterMobile />
      </div>

      {/* Sticky Donation Button - appears on all pages except donation */}
      <DonateFloatingButton />
    </>
  );
}
