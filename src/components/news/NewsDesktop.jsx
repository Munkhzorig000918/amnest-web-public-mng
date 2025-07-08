import Image from "next/image";
import Button from "@/components/common/Button";
import HeroBanner from "@/components/common/HeroBanner";
import { heroBannerConfigs } from "@/constants/heroBanners";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import apiService from "@/services/apiService";
import { getImageUrl } from "@/utils/fetcher";

export default function NewsDesktop() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("news");
  const itemsPerPage = 9;

  // State for API data
  const [postsData, setPostsData] = useState([]);
  const [statementsData, setStatementsData] = useState([]);
  const [goodNewsData, setGoodNewsData] = useState([]);
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
            // Regular news posts
            const posts = await apiService.posts.getPostsList({
              page: currentPage,
              pageSize: itemsPerPage,
            });
            console.log("Posts response:", posts);
            setPostsData(posts.data || []);
            break;

          case "statements":
            // Statements/position papers
            const statements = await apiService.statements.getStatements({
              page: currentPage,
              pageSize: itemsPerPage,
            });
            console.log("Statements response:", statements);
            setStatementsData(statements.data || []);
            break;

          case "good_news":
            // Good news/special posts - using posts API with category filter
            const goodNews = await apiService.posts.getPostsList({
              page: currentPage,
              pageSize: itemsPerPage,
              post_category: "good_news",
            });
            console.log("Good news response:", goodNews);
            setGoodNewsData(goodNews.data || []);
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
    case "statements":
      currentData = statementsData;
      break;
    case "good_news":
      currentData = goodNewsData;
      break;
    default:
      currentData = [];
  }

  // Convert data to unified format
  const newsItems = currentData.map((item, index) => {
    let title, image, description;

    // Debug logging
    if (activeCategory === "statements") {
      console.log("Processing statement item:", item);
      console.log("Item has attributes?", !!item.attributes);
      console.log("Item keys:", Object.keys(item));
    }

    switch (activeCategory) {
      case "news":
      case "good_news":
        title = item.attributes?.title || item.title || `ᠭᠠᠷᠴᠢᠭ ${index + 1}`;
        image =
          getImageUrl(item.attributes?.cover || item.cover) ||
          "/images/news1.png";
        description =
          item.attributes?.short_description || item.short_description || "";
        break;
      case "statements":
        // Handle both flattened (formatStrapiResponse) and nested (raw) formats
        title = item.title || item.attributes?.title || `ᠮᠡᠳᠡᠭᠳᠡᠯ ${index + 1}`;

        // For statements, the data is already flattened by formatStrapiResponse
        // So item.cover should be the cover data directly
        const coverData = item.cover || item.attributes?.cover;
        image = getImageUrl(coverData) || "/images/news1.png";
        description = item.description || item.attributes?.description || "";
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

  const handleNewsClick = (newsId) => {
    if (activeCategory === "statements") {
      router.push(`/news/statement/${newsId}`);
    } else {
      router.push(`/news/${newsId}`);
    }
  };

  // Loading state
  if (isLoading && currentData.length === 0) {
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

  return (
    <div className="h-full hidden sm:flex gap-10 overflow-x-auto overflow-y-hidden w-auto flex-shrink-0 max-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage={heroBannerConfigs.news.backgroundImage}
        title={heroBannerConfigs.news.title}
      />

      {/* News Content */}
      <div className="flex gap-10 p-8 m-4 h-full">
        {/* Category Selector */}
        <div className="flex flex-col gap-4">
          <h2
            className="text-2xl font-bold text-gray-800"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠠᠩᠭᠢᠯᠠᠯ
          </h2>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleCategoryChange("news")}
              className={`p-3 rounded-md transition-colors ${
                activeCategory === "news"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠡᠳᠡᢉᠡ ᠮᠡᠳᠡᢉᠡᠯ
            </button>
            <button
              onClick={() => handleCategoryChange("statements")}
              className={`p-3 rounded-md transition-colors ${
                activeCategory === "statements"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠡᠳᠡᠭᠳᠡᠯ
            </button>
            <button
              onClick={() => handleCategoryChange("good_news")}
              className={`p-3 rounded-md transition-colors ${
                activeCategory === "good_news"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠰᠠᠢᠨ ᠮᠡᠳᠡᢉᠡ
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="flex-1">
          {error && (
            <div className="text-red-500 text-center p-4">
              <p
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ: {error.message}
              </p>
            </div>
          )}

          {newsItems.length === 0 && !isLoading && (
            <div className="text-center p-8">
              <p
                className="text-gray-500"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠮᠡᠳᠡᢉᠡ ᠥᠯᠦᠭᠦᠯ ᠦᠨ ᠪᠠᠶᠢᠬᠤ ᠦᠭᠡᠢ
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mb-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleNewsClick(item.id)}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-bold text-lg mb-2 line-clamp-2"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p
                      className="text-gray-600 text-sm line-clamp-3"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>

              <span
                className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {toMongolianNumeral(currentPage)} /{" "}
                {toMongolianNumeral(totalPages)}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
