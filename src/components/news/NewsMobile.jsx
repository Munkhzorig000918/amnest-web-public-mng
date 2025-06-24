import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  useGetPostsQuery,
  useGetVideosQuery,
  useGetLibrariesQuery,
} from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function NewsMobile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("news");
  const itemsPerPage = 6; // Fewer items per page on mobile

  // Fetch different content types based on active category
  const {
    data: postsData,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery(
    {
      pageSize: itemsPerPage,
      page: currentPage,
      sort: "publishedAt:desc",
    },
    { skip: activeCategory !== "news" }
  );

  const {
    data: videosData,
    error: videosError,
    isLoading: videosLoading,
  } = useGetVideosQuery(
    {
      pageSize: itemsPerPage,
      page: currentPage,
      sort: "publishedAt:desc",
    },
    { skip: activeCategory !== "reports" }
  );

  const {
    data: librariesData,
    error: librariesError,
    isLoading: librariesLoading,
  } = useGetLibrariesQuery(
    {
      pageSize: itemsPerPage,
      page: currentPage,
      sort: "amnesty_published_at:desc",
    },
    { skip: activeCategory !== "special" }
  );

  // Determine current data based on active category
  let currentData = [];
  let isLoading = false;
  let error = null;

  switch (activeCategory) {
    case "news":
      currentData = postsData || [];
      isLoading = postsLoading;
      error = postsError;
      break;
    case "reports":
      currentData = videosData || [];
      isLoading = videosLoading;
      error = videosError;
      break;
    case "special":
      currentData = librariesData || [];
      isLoading = librariesLoading;
      error = librariesError;
      break;
    default:
      currentData = [];
  }

  // Convert data to unified format
  const newsItems = currentData.map((item) => {
    let title, image, description;

    switch (activeCategory) {
      case "news":
        title = item.title || "ᠭᠠᠷᠴᠢᠭ ᠦᠭᠡᠢ";
        image = getImageUrl(item.cover) || "/images/news1.png";
        description = item.short_description || "";
        break;
      case "reports":
        title = item.title || "ᠦᠵᠡᠮᠡᠯ ᠦᠭᠡᠢ";
        image = getImageUrl(item.thumbnail) || "/images/news1.png";
        description = item.description || "";
        break;
      case "special":
        title = item.title || "ᠨᠣᠮ ᠦᠭᠡᠢ";
        image = getImageUrl(item.cover) || "/images/news1.png";
        description = item.description || "";
        break;
      default:
        title = "ᠭᠠᠷᠴᠢᠭ ᠦᠭᠡᠢ";
        image = "/images/news1.png";
        description = "";
    }

    return {
      id: item.id,
      title,
      image,
      description,
      category: activeCategory,
    };
  });

  // Calculate pagination - for now we'll use the current page size
  // In a real implementation, you'd get total count from the API response
  const totalPages = Math.max(1, Math.ceil(currentData.length / itemsPerPage));

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

  // Loading state
  if (isLoading) {
    return (
      <div className="block sm:hidden h-full overflow-y-auto flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
          <p
            className="mt-4 text-gray-600 text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="block sm:hidden h-full overflow-y-auto flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
        </div>
      </div>
    );
  }

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
          {newsItems.map((item) => (
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
                  onError={(e) => {
                    e.target.src = "/images/news1.png"; // fallback image
                  }}
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
                  title={item.title}
                >
                  {item.title.length > 80
                    ? `${item.title.substring(0, 80)}...`
                    : item.title}
                </h3>
                <Button text={"ᠤᠩᠰᠢᠬᠤ"} type="secondary" />
              </div>
            </div>
          ))}
          {/* Fill empty slots if we have less items than expected */}
          {Array.from({
            length: Math.max(0, itemsPerPage - newsItems.length),
          }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center aspect-square"
            >
              <p
                className="text-gray-400 text-xs"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠮᠡᠳᠡᢉᠡ ᠦᠭᠡᠢ
              </p>
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
