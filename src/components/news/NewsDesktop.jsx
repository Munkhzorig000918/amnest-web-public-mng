import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function NewsDesktop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("news");
  const itemsPerPage = 9;

  // Filter news items by category
  const filteredItems = newsItems.filter(
    (item) => item.category === activeCategory
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Convert Arabic numerals to Mongolian Bichig numerals
  const toMongolianNumeral = (num) => {
    const mongolianDigits = ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"];
    return num
      .toString()
      .split("")
      .map((digit) => mongolianDigits[parseInt(digit)])
      .join("");
  };

  // Check if mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <div className="h-full hidden sm:flex gap-10 overflow-x-auto overflow-y-hidden w-auto flex-shrink-0 max-h-screen">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="h-full p-4">
        <div className="h-full flex gap-10">
          <div className="h-full flex flex-col items-center gap-4">
            <button
              onClick={() => handleCategoryChange("news")}
              className={`w-full h-full flex justify-center items-center text-center text-2xl font-bold rounded-xl p-8 transition-colors cursor-pointer ${
                activeCategory === "news"
                  ? "text-white bg-[#2D2D2D] border border-[#2D2D2D]"
                  : "text-black bg-white border border-[#E3E3E3] hover:bg-gray-50"
              }`}
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠡᠳᠡᢉᠡ
            </button>
            <button
              onClick={() => handleCategoryChange("reports")}
              className={`w-full h-full flex justify-center items-center text-center text-2xl font-bold rounded-xl p-8 transition-colors cursor-pointer ${
                activeCategory === "reports"
                  ? "text-white bg-[#2D2D2D] border border-[#2D2D2D]"
                  : "text-black bg-white border border-[#E3E3E3] hover:bg-gray-50"
              }`}
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠡᠳᠡᢉᠳᠡᠯ᠂ ᠪᠠᠶᠢᠷᠢ ᠰᠠᠭᠤᠷᠢ
            </button>
            <button
              onClick={() => handleCategoryChange("special")}
              className={`w-full h-full flex justify-center items-center text-center text-2xl font-bold rounded-xl p-8 transition-colors cursor-pointer ${
                activeCategory === "special"
                  ? "text-white bg-[#2D2D2D] border border-[#2D2D2D]"
                  : "text-black bg-white border border-[#E3E3E3] hover:bg-gray-50"
              }`}
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠣᠨᠴᠠᠯᠠᠬᠤ ᠮᠡᠳᠡᢉᠡ
            </button>
          </div>
          <div className="h-full flex gap-4">
            <div className="grid grid-cols-3 grid-rows-3 gap-10 flex-1">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-full flex items-end space-x-4"
                >
                  <h3
                    className="w-16 h-full"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="relative w-full h-full max-w-[420px] min-w-[420px] aspect-square flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                    <Button
                      text={"ᠮᠡᠳᠡᢉᠡ"}
                      type="primary"
                      className="absolute top-0 right-0 text-black"
                    />
                  </div>
                  <Button
                    text={"ᠤᠩᠰᠢᠬᠤ"}
                    type="secondary"
                    className="text-black h-48"
                  />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-row sm:flex-col justify-center sm:justify-start items-center gap-2">
              <Button
                text={isMobile ? <ChevronLeft /> : <ChevronUp />}
                type="chevron"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              />
              <p className="text-sm">
                {toMongolianNumeral(currentPage)}/
                {toMongolianNumeral(totalPages)}
              </p>
              <Button
                text={isMobile ? <ChevronRight /> : <ChevronDown />}
                type="chevron"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const newsItems = [
  {
    id: 1,
    category: "news",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠳ᠋ᠦ ᠡᢉᠡᠯᠢ ᠲᠡᠢ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᢈᠥᠲᠦᠯᠪᠦᠷᠢ ᠪᠠᠶᠠᠨ-ᠥᠯᠦᢉᠡᠢ᠂ ᠬᠣᠪᠳᠤ ᠠᠶᠢᠮᠠᠭ ᠲᠤ ᢈᠡᠷᠡᢉᠵᠢᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
    image: "/images/news1.png",
  },
  {
    id: 2,
    category: "news",
    title:
      "ᠲᠠᠨ ᠤ᠋ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠡᠮᠡᠴᠡᠯ ᠲᠠᠢ ᠬᠣᠯᠪᠣᠭᠳᠠᠬᠤ ᠴᠢᠬᠤᠯᠠ ᠲᠡᠮᠡᠴᠡᠯ",
    image: "/images/news1.png",
  },
  {
    id: 3,
    category: "news",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠵᠠᠯᠠᠭᠤᠴᠤᠳ ᠤᠨ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠪᠦᢉᠦᠳᠡ ᠶ᠋ᠢᠨ ᠢᠳᠡᠪᢈᠢ ᠣᠷᠣᠯᠴᠠᠭ᠎ᠠ ᠶ᠋ᠢ ᠡᠷᠢᠯᢈᠢᠯᠡᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 4,
    category: "news",
    title:
      "ᠲᠡᢉᠰᠢ ᠪᠢᠰᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠡᠰᠡᠷᢉᠦ ᠲᠡᠮᠡᠴᠡᠯ ᠢ ᠳᠡᠮᠵᠢᠬᠦ ᠲᠦᠷᠦ ᠶ᠋ᠢᠨ ᠪᠣᠳᠣᠯᠭ᠎ᠠ ᠶ᠋ᠢ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠬᠡᠷᠡᢉᠲᠡᠢ",
    image: "/images/news1.png",
  },
  {
    id: 5,
    category: "news",
    title:
      "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠣᠯᠤᠨ ᠳᠠᠳᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠤᠨ ᠲᠥᠯᠦᢉᠡ ᠮᠣᠩᢉᠣᠯ ᠳᠠᠬᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠵᠢᠨ ᠠᠵᠢᠯᠯᠠᢉᠠ ᠲᠥᢈᠦᠰᠪᠦᠷᠢ",
    image: "/images/news1.png",
  },
  {
    id: 6,
    category: "news",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠲᠤᠷᠠᠯ ᠤᠨ ᠡᠷᢈᠡᠮ ᠰᠢᠨᠵᠢᠯᠡᢉᠡᠨ ᠦ᠋ ᠬᠦᠷᠢᠶᠡᠯᠡᠩ ᠢ᠋ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ",
    image: "/images/news1.png",
  },
  {
    id: 7,
    category: "reports",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠶᠡᠬᠡ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 8,
    category: "reports",
    title:
      "ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠤ ᠡᠷᢈᠡ ᠶᠢᠨ ᠳᠠᠶᠠᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠨ ᠬᠤᠷᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 9,
    category: "reports",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠤᠷᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 10,
    category: "reports",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠨᠡᠨ ᠦ᠋ ᠲᠦᠪ ᠲᠡᠦᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ ᠰᠢᠨᠵᠢᠯᠡᢉᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 11,
    category: "reports",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠦᠷᠢᠶᠡᠯᠡᠩ ᠢ ᠳᠡᠮᠵᠢᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 12,
    category: "reports",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠯᠳᠠᠷ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠰᠢᠨ᠎ᠡ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ ᠵᠦᠷᠭᠡᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 13,
    category: "special",
    title:
      "ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠨᠢᠭᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 14,
    category: "special",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 15,
    category: "special",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠢᠨ᠎ᠡ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 16,
    category: "special",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠨᠢᠭᠡ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 17,
    category: "special",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠨᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠯᠳᠠᠷ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 18,
    category: "special",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠳᠡᠮᠵᠢᠭᠦᠯᠦᠨ ᠵᠦᠷᠭᠡᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 19,
    category: "reports",
    title:
      "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶᠢᠨ ᠨᠡᠶᠢᠲᠡ ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 20,
    category: "reports",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠵᠦᠷᠭᠡᠨ ᠪᠠᠢᠢᠴᠠᠭᠠᠨ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 21,
    category: "reports",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠬᠦᠮᠦᠵᠢᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠦᠷᠭᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 22,
    category: "reports",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 23,
    category: "reports",
    title:
      "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶᠢᠨ ᠪᠣᠯᠤᠨ ᠳᠠᠳᠤᠯᠭ᠎ᠠ ᠶᠢᠨ ᠠᠵᠢᠯ ᠤᠨ ᠲᠥᠯᠦᢉᠡ ᠮᠣᠩᢉᠣᠯ ᠳᠠᠬᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 24,
    category: "reports",
    title:
      "ᠲᠡᢉᠰᠢ ᠪᠢᠰᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤᠨ ᠡᠰᠡᠷᢉᠦ ᠲᠡᠮᠡᠴᠡᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 25,
    category: "special",
    title:
      "ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠨᠢᠭᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 26,
    category: "special",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 27,
    category: "special",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠢᠨ᠎ᠡ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 28,
    category: "special",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠨᠢᠭᠡ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 29,
    category: "special",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠨᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠯᠳᠠᠷ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 30,
    category: "special",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠳᠡᠮᠵᠢᠭᠦᠯᠦᠨ ᠵᠦᠷᠭᠡᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 31,
    category: "special",
    title:
      "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠦᠷᠭᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 32,
    category: "special",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 33,
    category: "special",
    title:
      "ᠲᠡᢉᠰᠢ ᠪᠢᠰᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤᠨ ᠡᠰᠡᠷᢉᠦ ᠲᠡᠮᠡᠴᠡᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 34,
    category: "special",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠲᠦᠷᠦ ᠶᠢᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 35,
    category: "special",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 36,
    category: "special",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠨᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠯᠳᠠᠷ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
];

const aboutItems = [
  {
    id: 1,
    title: "ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?",
    body: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
    image: "/images/about1.png",
  },
  {
    id: 2,
    title: "ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?",
    body: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠢᠱᠢᢉ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠢᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠡᠨᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ  ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠳ᠋ᠦ ᠣᠷᠤᠰᠢᠨ᠎ᠠ᠃",
    image: "/images/about2.png",
  },
  {
    id: 3,
    title: "ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?",
    body: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
    image: "/images/about3.jpg",
  },
  {
    id: 4,
    title: "ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?",
    body: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠢᠱᠢᢉ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠢᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠡᠨᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ  ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠳ᠋ᠦ ᠣᠷᠤᠰᠢᠨ᠎ᠠ᠃",
    image: "/images/about4.jpg",
  },
];
