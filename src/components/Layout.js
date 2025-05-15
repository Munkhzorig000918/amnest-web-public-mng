import { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
    <div 
      ref={scrollRef}
      className="fixed top-0 left-0 h-screen w-full flex overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
    >
      {/* Header - fixed width */}
      <Header />

      {/* Main Content - fluid width */}
      <div className="h-full flex-shrink-0 flex">
        {children}
      </div>

      {/* Footer - fixed width */}
      <Footer />
    </div>
  );
} 