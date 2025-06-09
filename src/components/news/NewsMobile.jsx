import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function NewsMobile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("news");
  const itemsPerPage = 9; // Fewer items per page on mobile

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
    <div className="block sm:hidden h-full overflow-y-auto">
      <BannerSlider images={bannerImages} width="100%" />

      <div className="p-4">
        {/* Category Buttons */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          <button
            onClick={() => handleCategoryChange("news")}
            className={`px-2 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
              activeCategory === "news"
                ? "bg-[#2D2D2D] text-white"
                : "bg-white border border-[#E3E3E3] text-black hover:bg-gray-50"
            }`}
          >
            ᠮᠡᠳᠡᢉᠡ
          </button>
          <button
            onClick={() => handleCategoryChange("reports")}
            className={`px-2 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
              activeCategory === "reports"
                ? "bg-[#2D2D2D] text-white"
                : "bg-white border border-[#E3E3E3] text-black hover:bg-gray-50"
            }`}
          >
            ᠮᠡᠳᠡᢉᠳᠡᠯ᠂ ᠪᠠᠶᠢᠷᠢ ᠰᠠᠭᠤᠷᠢ
          </button>
          <button
            onClick={() => handleCategoryChange("special")}
            className={`px-2 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
              activeCategory === "special"
                ? "bg-[#2D2D2D] text-white"
                : "bg-white border border-[#E3E3E3] text-black hover:bg-gray-50"
            }`}
          >
            ᠣᠨᠴᠠᠯᠠᠬᠤ ᠮᠡᠳᠡᢉᠡ
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden border border-[#E3E3E3]"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <Button
                  text={"ᠮᠡᠳᠡᢉᠡ"}
                  type="primary"
                  className="absolute top-2 right-2 text-xs"
                />
              </div>
              <div className="p-3 flex items-end">
                <h3
                  className="text-xs mb-2 max-h-[100px] w-full line-clamp-6"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.title}
                </h3>
                <Button text={"ᠤᠩᠰᠢᠬᠤ"} type="secondary" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <Button
              text={<ChevronLeft />}
              type="chevron"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            />
            <span className="text-sm">
              {toMongolianNumeral(currentPage)}/{toMongolianNumeral(totalPages)}
            </span>
            <Button
              text={<ChevronRight />}
              type="chevron"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            />
          </div>
        )}
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
    category: "news",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠲᠦᠷᠦ ᠶᠢᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 8,
    category: "news",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 9,
    category: "news",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠨᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠠᠯᠳᠠᠷ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 10,
    category: "news",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠳᠡᠮᠵᠢᠭᠦᠯᠦᠨ ᠵᠦᠷᠭᠡᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 11,
    category: "news",
    title:
      "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠦᠷᠭᠦᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 12,
    category: "news",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠠᠵᠢᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 13,
    category: "reports",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠶᠡᠬᠡ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 14,
    category: "reports",
    title:
      "ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠤ ᠡᠷᢈᠡ ᠶᠢᠨ ᠳᠠᠶᠠᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠨ ᠬᠤᠷᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 15,
    category: "reports",
    title:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠤᠨ ᠰᠠᠢᠢᠳ ᠤᠯᠤᠰ ᠤᠨ ᠡᠷᢈᠡ ᠶᠢᠨ ᠰᠠᠯᠪᠠᠷ ᢈᠦᠮᠦᠨ ᠦ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠤᠷᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 16,
    category: "reports",
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠨᠡᠨ ᠦ᠋ ᠲᠦᠪ ᠲᠡᠦᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ ᠰᠢᠨᠵᠢᠯᠡᢉᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 17,
    category: "reports",
    title:
      "ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶᠢᠨ ᠬᠦᠮᠦᠵᠢᠯ ᠢ ᠳᠡᠮᠵᠢᠭᠦᠯᠦᠨ᠎ᠡ",
    image: "/images/news1.png",
  },
  {
    id: 18,
    category: "reports",
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠯᠳᠠᠷ ᠤᠨ ᠰᠠᠯᠪᠠᠷ ᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠰᠢᠨ᠎ᠡ ᠬᠤᠷᠠᠯ ᠢ ᠡᠬᠢᠯᠡᠭᠦᠯᠦᠨ ᠵᠦᠷᠭᠡᠨ ᠠᠵᠢᠯᠠᠳᠠᠨ᠎ᠠ",
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
