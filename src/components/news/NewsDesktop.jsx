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
import apiService from "@/services/apiService";
import { getImageUrl } from "@/utils/fetcher";

export default function NewsDesktop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("news");
  const itemsPerPage = 9;

  // State for API data
  const [postsData, setPostsData] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [librariesData, setLibrariesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data based on active category
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        switch (activeCategory) {
          case "news":
            // Use the working posts API
            const posts = await apiService.posts.getPostsList({
              page: currentPage,
              pageSize: itemsPerPage,
            });
            console.log("Posts response:", posts);
            setPostsData(posts.data || []);
            break;

          case "reports":
            // Use the working videos API
            const videos = await apiService.videos.getVideos({
              "pagination[page]": currentPage,
              "pagination[pageSize]": itemsPerPage,
            });
            console.log("Videos response:", videos);
            setVideosData(videos.data || []);
            break;

          case "special":
            // Use the working libraries API
            const libraries = await apiService.libraries.getLibraries({
              "pagination[page]": currentPage,
              "pagination[pageSize]": itemsPerPage,
            });
            console.log("Libraries response:", libraries);
            setLibrariesData(libraries.data || []);
            break;
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeCategory, currentPage]);

  // Determine current data based on active category
  let currentData = [];

  switch (activeCategory) {
    case "news":
      currentData = postsData;
      break;
    case "reports":
      currentData = videosData;
      break;
    case "special":
      currentData = librariesData;
      break;
    default:
      currentData = [];
  }

  // Convert data to unified format
  const newsItems = currentData.map((item, index) => {
    let title, image, description;

    switch (activeCategory) {
      case "news":
        title = item.attributes?.title || item.title || `ᠭᠠᠷᠴᠢᠭ ${index + 1}`;
        image =
          getImageUrl(item.attributes?.cover || item.cover) ||
          "/images/news1.png";
        description =
          item.attributes?.short_description || item.short_description || "";
        break;
      case "reports":
        title = item.attributes?.title || item.title || `ᠦᠵᠡᠮᠡᠯ ${index + 1}`;
        image =
          getImageUrl(item.attributes?.thumbnail || item.thumbnail) ||
          "/images/news1.png";
        description = item.attributes?.description || item.description || "";
        break;
      case "special":
        title = item.attributes?.title || item.title || `ᠨᠣᠮ ${index + 1}`;
        image =
          getImageUrl(item.attributes?.cover || item.cover) ||
          "/images/news1.png";
        description = item.attributes?.description || item.description || "";
        break;
      default:
        title = `ᠭᠠᠷᠴᠢᠭ ${index + 1}`;
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

  // Loading state
  if (isLoading) {
    return (
      <div className="h-full hidden sm:flex gap-10 overflow-x-auto overflow-y-hidden w-auto flex-shrink-0 max-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p
            className="mt-4 text-gray-600"
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
      <div className="h-full hidden sm:flex gap-10 overflow-x-auto overflow-y-hidden w-auto flex-shrink-0 max-h-screen items-center justify-center">
        <div className="text-center text-red-600">
          <p style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
          <p className="mt-2 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

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
              ᠦᠵᠡᠮᠡᠯ
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
              ᠨᠣᠮ ᠦᠨ ᠰᠠᠩ
            </button>
          </div>
          <div className="h-full flex gap-4">
            <div className="grid grid-cols-3 grid-rows-3 gap-10 flex-1">
              {newsItems.slice(0, 9).map((item) => (
                <div
                  key={item.id}
                  className="w-full h-full flex items-end space-x-4"
                >
                  <h3
                    className="w-16 h-full text-sm"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                    title={item.title}
                  >
                    {item.title.length > 50
                      ? `${item.title.substring(0, 50)}...`
                      : item.title}
                  </h3>
                  <div className="relative w-full h-full max-w-[420px] min-w-[420px] aspect-square flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                      onError={(e) => {
                        e.target.src = "/images/news1.png"; // fallback image
                      }}
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
              {/* Fill empty slots if we have less than 9 items */}
              {Array.from({ length: Math.max(0, 9 - newsItems.length) }).map(
                (_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="w-full h-full flex items-center justify-center border border-gray-200 rounded-xl"
                  >
                    <p
                      className="text-gray-400"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠮᠡᠳᠡᢉᠡ ᠦᠭᠡᠢ
                    </p>
                  </div>
                )
              )}
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
