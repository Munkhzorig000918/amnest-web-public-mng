import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import StructureDiagram from "./StructureDiagram";
import { useState, useEffect } from "react";
import apiService from "@/services/apiService";
import { getImageUrl } from "@/utils/fetcher";

export default function StructureDesktop() {
  // State for API data
  const [librariesData, setLibrariesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch libraries data on component mount (matching old web functionality)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("Fetching libraries data for structure page...");
        const libraries = await apiService.libraries.getLibraries({
          page: 1,
          pageSize: 20,
          sort: "publishedAt:desc",
        });
        console.log("Libraries response:", libraries);

        const librariesArray = Array.isArray(libraries)
          ? libraries
          : libraries?.data || [];
        setLibrariesData(librariesArray);
      } catch (err) {
        console.error("Error fetching libraries data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen sm:overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="flex gap-12 p-4 h-full">
        <div className="flex gap-10">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠪᠣᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠳᠠᠭᠤ
            ᠬᠣᠭᠤᠯᠠᠢ ᠶᠤᠮ᠃ ᠪᠢᠳᠡ ᠖᠐ ᠭᠠᠷᠤᠢ ᠵᠢᠯ ᠦ᠋ᠨ ᠲᠤᠷᠰᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ᠂
            ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠤᠯᠢ ᠲᠣᠭᠲᠠᠭᠠᠮᠵᠢ᠂ ᠰᠲ᠋ᠠᠨ᠋ᠳᠠᠷᠲ ᠤ᠋ᠨ
            ᠲᠠᠯᠠᠭᠠᠷ ᠨᠠᠶᠢᠳᠠᠪᠤᠷᠢᠲᠠᠢ᠂ ᠦᠨᠡᠨ ᠵᠥᠪ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠨᠡᠶᠢᠲᠡ
            ᢈᠦᠷᢉᠡᠰ ᠢ᠋ᠶᠡᠷ ᠢᠷᠡᢉᠰᠡᠨ᠃
          </h2>
          <p
            className="text-sm"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
            ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ
            ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃ ᠪᠢᠳᠡ ᠠᠯᠢᠪᠠ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ
            ᠭᠠᠵᠠᠷ᠂ ᠤᠯᠤᠰ ᠲᠥᠷᠦ ᠶ᠋ᠢᠨ ᠦᠵᠡᠯ ᠰᠤᠷᠲᠠᠯ᠂ ᠡᠳ᠋ ᠦ᠋ᠨ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠠᠰᠢᠭ ᠰᠣᠨᠢᠷᠬᠠᠯ᠂
            ᠱᠠᠰᠢᠨ ᠰᠢᠲᠦᠯᢉᠡ ᠡᠴᠡ ᠠᠩᢉᠢ ᠳ᠋ᠤ ᠪᠡᠶ᠎ᠡ ᠳᠠᠭᠠᠭᠠᠭᠰᠠᠨ᠂ ᠬᠠᠷᠠᠭᠠᠲᠤ ᠪᠤᠰᠤ ᠪᠥᢉᠡᠳ
            ᢉᠡᠰᠢᢉᠦᠳ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠢ᠋ᠶᠡᠨ ᠬᠠᠨᠳᠢᠪ ᠲᠤᠰᠠᠯᠠᠮᠵᠢ ᠪᠠᠷ ᠰᠠᠩᢈᠦᠵᠢᠳᠡᢉ᠃ ᢈᠦᠮᠦᠰ
            ᠡᠪ ᠰᠠᠨᠠᠭᠠᠨ ᠤ᠋ ᠨᠢᢉᠡᠳᠦᠯ ᠲᠡᠢ᠂ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠡᠨᠡᠷᠢᠩᢉᠦᠢ ᠪᠠᠶᠢᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ ᠢᠯᠡᢉᠦᠦ
            ᠰᠠᠶᠢᠬᠠᠨ ᠨᠡᠶᠢᢉᠡᠮ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠵᠤ᠂ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠵᠦ ᠴᠢᠳᠠᠨ᠎ᠠ ᢉᠡᠳᠡᢉ ᠲᠦ ᠪᠢᠳᠡ
            ᠢᠲᠡᢉᠡᠳᠡᢉ᠃ ᠮᠠᠨ ᠤ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠦᠴᠦ ᠪᠣᠯ ᢈᠦᠮᠦᠰ᠃ ᠣᠯᠠᠨ ᢈᠦᠮᠦᠰ
            ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠳᠤᠤᠭᠠᠷᠳᠠᠭ ᠤᠴᠢᠷ ᠠ᠋ᠴᠠ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ
            ᠭᠠᠶᠢᠬᠠᠯᠲᠠᠢ ᠠᠮᠵᠢᠯᠲᠠ ᠨᠤᠭᠤᠳ ᠢ᠋ ᠭᠠᠷᠭᠠᠭᠰᠠᠭᠠᠷ ᠢᠷᠡᢉᠰᠡᠨ᠃
          </p>
        </div>
        <SectionTitle
          title={"ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨ ᠦ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠦᠲᠦᠴᠡ"}
          containerClassName={"bg-[#FFFF00] text-2xl"}
        />
        <StructureDiagram />
        <SectionTitle
          title={"ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠱᠢᠨᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠳᠦᠷᠢᠮ"}
        />

        {/* PDF Showcase Section - matching old web functionality */}
        <div className="flex items-center justify-center gap-6 min-w-[1000px]">
          <div className="min-h-[700px] w-full flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <object
              data="https://amnesty-cdn.sgp1.cdn.digitaloceanspaces.com/static/73425868-1dc8-4656-87b4-cf7775db28e0.pdf"
              type="application/pdf"
              width="100%"
              height="700px"
              className="border-none"
              title="Mongolia's Amnesty International Organization Bylaws"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <p
                  className="text-gray-600 mb-4"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  PDF ᠬᠠᠷᠠᠭᠤᠯᠠᠬᠤ ᠵᠢᠨ ᠠᠷᠭ᠎ᠠ ᠦᠭᠡᠢ
                </p>
                <Button
                  href="https://amnesty-cdn.sgp1.cdn.digitaloceanspaces.com/static/73425868-1dc8-4656-87b4-cf7775db28e0.pdf"
                  target="_blank"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded"
                >
                  ᠳᠠᠤᠨᠯᠣᠭᠳ ᠢᠯᠠᠭᠠᠬᠤ
                </Button>
              </div>
            </object>
          </div>
        </div>

        {/* Dynamic Libraries Section - matching old web functionality */}
        {librariesData && librariesData.length > 0 && (
          <div className="flex flex-col gap-4 min-w-[400px]">
            <SectionTitle
              title={"ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠴᠠᠭᠠᠵᠤ ᠪᠢᠴᠢᠭ"}
              containerClassName={"bg-[#FFFF00] text-xl"}
            />
            <div className="flex flex-col gap-6 overflow-y-auto max-h-[800px] p-4">
              {librariesData.slice(0, 10).map((library) => (
                <div
                  key={library.id}
                  className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  {library.cover && (
                    <div className="h-48 w-full relative">
                      <Image
                        src={getImageUrl(library.cover)}
                        alt={library.title || "Library cover"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      {library.title || "ᠭᠠᠷᠴᠢᠭ ᠦᠭᠡᠢ"}
                    </h3>
                    {library.description && (
                      <p
                        className="text-sm text-gray-600 line-clamp-3"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                          height: "150px",
                          overflow: "hidden",
                        }}
                      >
                        {library.description}
                      </p>
                    )}
                    {library.file && (
                      <div className="mt-4">
                        <Button
                          href={getImageUrl(library.file)}
                          target="_blank"
                          className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
                        >
                          ᠳᠠᠤᠨᠯᠣᠭᠳ
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading state */}
              {isLoading && (
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                  <p
                    className="ml-4 text-gray-600"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...
                  </p>
                </div>
              )}

              {/* Error state */}
              {error && (
                <div className="flex items-center justify-center p-8">
                  <p
                    className="text-red-600"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
