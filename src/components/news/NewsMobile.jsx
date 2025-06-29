import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import apiService from "@/services/apiService";
import { getImageUrl } from "@/utils/fetcher";

export default function NewsMobile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("news");
  const itemsPerPage = 6; // Fewer items per page on mobile

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

      <div className="p-4 flex gap-5">
        {/* Category Buttons */}
        <div className="flex flex-col gap-2 overflow-x-auto">
          <button
            onClick={() => handleCategoryChange("news")}
            className={`py-3 pl-2 pr-1 rounded-lg text-[10px] whitespace-nowrap transition-colors ${
              activeCategory === "news"
                ? "bg-[#2D2D2D] text-white"
                : "bg-white border border-[#E3E3E3] text-black hover:bg-gray-50"
            }`}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠡᠳᠡᢉᠡ
          </button>
          <button
            onClick={() => handleCategoryChange("reports")}
            className={`py-3 pl-2 pr-1 rounded-lg text-[10px] whitespace-nowrap transition-colors ${
              activeCategory === "reports"
                ? "bg-[#2D2D2D] text-white"
                : "bg-white border border-[#E3E3E3] text-black hover:bg-gray-50"
            }`}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠡᠳᠡᢉᠳᠡᠯ᠂ ᠪᠠᠶᠢᠷᠢ ᠰᠠᠭᠤᠷᠢ
          </button>
          <button
            onClick={() => handleCategoryChange("special")}
            className={`py-3 pl-2 pr-1 rounded-lg text-[10px] whitespace-nowrap transition-colors ${
              activeCategory === "special"
                ? "bg-[#2D2D2D] text-white"
                : "bg-white border border-[#E3E3E3] text-black hover:bg-gray-50"
            }`}
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠣᠨᠴᠠᠯᠠᠬᠤ ᠮᠡᠳᠡᢉᠡ
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {newsItems.map((item) => (
            <div key={item.id} className="w-full flex gap-2 max-h-[150px]">
              <h3
                className="text-[10px] line-clamp-4"
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
              <div className="relative aspect-square w-[150px] h-[150px] shadow-md">
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
