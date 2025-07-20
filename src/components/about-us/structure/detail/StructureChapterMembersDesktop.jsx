import Image from "next/image";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import { useState, useEffect } from "react";
import apiService from "@/services/apiService";

export default function StructureChapterMembersDesktop() {
  // State for API data
  const [chapterMembersData, setChapterMembersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch chapter members data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(
          "Fetching chapter members data for structure detail page..."
        );
        const chapterMembers =
          await apiService.chapterMembers.getChapterMembers({
            page: 1,
            pageSize: 20,
            sort: "publishedAt:desc",
          });
        console.log("Chapter members response:", chapterMembers);

        const chapterMembersArray = Array.isArray(chapterMembers)
          ? chapterMembers
          : chapterMembers?.data || [];
        setChapterMembersData(chapterMembersArray);
      } catch (err) {
        console.error("Error fetching chapter members data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Static chapter members data as fallback
  const staticChapterMembers = [
    {
      id: 1,
      name: "А. Батбаатар",
      position: "Салбарын гишүүн",
      description:
        "Монгол Улсын Их сургуулийн хууль зүйн сургуулийн багш. Эмнестид 2018 оноос хойш идэвхтэй оролцож, хүний эрхийн боловсрол, сургалт, судалгааны ажлуудыг зохион явуулдаг.",
      image: "/images/chapter-members/batbaatar.png",
    },
    {
      id: 2,
      name: "Б. Мөнхбаатар",
      position: "Салбарын гишүүн",
      description:
        "МУИС-ийн философи, шашин судлалын тэнхимийн багш. Хүний эрхийн боловсрол, жендэр, хүрээлэн буй орчны асуудлаар сургалт, судалгааны ажил эрхэлж, хүний эрхийн сургалт, кампанит ажлуудыг зохион явуулдаг.",
      image: "/images/chapter-members/munkhbaatar.png",
    },
    {
      id: 3,
      name: "В. Батбаатар",
      position: "Салбарын гишүүн",
      description:
        "Монгол Улсын Их сургуулийн хууль зүйн сургуулийн багш. Эмнестид 2019 оноос хойш идэвхтэй оролцож, хүний эрхийн боловсрол, сургалт, судалгааны ажлуудыг зохион явуулдаг.",
      image: "/images/chapter-members/batbaatar2.png",
    },
  ];

  const chapterMembersToDisplay =
    chapterMembersData.length > 0 ? chapterMembersData : staticChapterMembers;

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
            ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃
          </p>
        </div>
        <SectionTitle
          title={"ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠱᠢᠨᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠦᠲᠦᠴᠡ"}
          containerClassName={"bg-[#FFFF00] text-2xl"}
        />

        {/* Chapter Members Section */}
        <div className="flex flex-col gap-4 min-w-[1000px]">
          <SectionTitle
            title={"ᠰᠠᠯᠪᠠᠷ ᠶ᠋ᠢᠨ ᠭᠢᠰᠢᠭᠦᠨ"}
            containerClassName={"bg-[#FFFF00] text-xl"}
          />

          <div className="flex flex-col gap-8 overflow-y-auto max-h-[800px] p-4">
            {chapterMembersToDisplay.map((member, index) => (
              <div
                key={member.id}
                className={`grid grid-cols-3 gap-8 items-center ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Member Image and Info */}
                <div className="flex flex-col items-center">
                  <div className="relative w-60 h-60 mb-4">
                    <Image
                      src={member.image || "/images/no-image-icon.png"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3
                    className="font-bold text-xl mb-2 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {member.position}
                  </p>
                </div>

                {/* Member Description */}
                <div className="col-span-2">
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "400px",
                      overflow: "hidden",
                    }}
                  >
                    {member.description}
                  </p>
                </div>

                {/* Divider */}
                {index < chapterMembersToDisplay.length - 1 && (
                  <div className="col-span-3 border-t-2 border-dashed border-gray-300 my-4"></div>
                )}
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
      </div>
    </div>
  );
}
