import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";

export default function StructureChapterMembersMobile() {
  // Static chapter members data
  const chapterMembers = [
    {
      id: 1,
      name: "А. Батбаатар",
      position: "Бүлгийн гишүүн",
      description:
        "Монгол Улсын Их сургуулийн хууль зүйн сургуулийн багш. Эмнестид 2018 оноос хойш идэвхтэй оролцож, хүний эрхийн боловсрол, сургалт, судалгааны ажлуудыг зохион явуулдаг.",
      image: "/images/chapter-members/batbaatar.png",
    },
    {
      id: 2,
      name: "Б. Мөнхбаатар",
      position: "Бүлгийн гишүүн",
      description:
        "МУИС-ийн философи, шашин судлалын тэнхимийн багш. Хүний эрхийн боловсрол, жендэр, хүрээлэн буй орчны асуудлаар сургалт, судалгааны ажил эрхэлж, хүний эрхийн сургалт, кампанит ажлуудыг зохион явуулдаг.",
      image: "/images/chapter-members/munkhbaatar.png",
    },
    {
      id: 3,
      name: "В. Оюунчимэг",
      position: "Бүлгийн гишүүн",
      description:
        "МУИС-ийн философи, шашин судлалын тэнхимийн багш, доктор. 2005 оноос хойш МЭИ-д элсэж, эмэгтэйчүүдийн бүлгийн гишүүн, Хяналтын зөвлөлийн даргаар ажиллаж байсан.",
      image: "/images/chapter-members/oyunchimeg.png",
    },
  ];

  return (
    <div className="w-full block sm:hidden">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} width="90rem" />
      </div>
      <div className="flex flex-col gap-12 p-4 h-full">
        <div className="flex gap-2 max-h-[200px]">
          <h2
            className="text-[10px] font-bold"
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
            className="text-[10px] text-[#848382]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
            ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ
            ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃
          </p>
        </div>
        <div className="flex gap-2">
          <SectionTitle
            title={"ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠱᠢᠨᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠦᠲᠦᠴᠡ"}
            containerClassName={"bg-[#FFFF00] text-[10px]"}
          />
        </div>

        {/* Chapter Members Section */}
        <div className="flex flex-col gap-4">
          <SectionTitle
            title={"ᠴᠢᠭᠤᠯᠭᠠᠨ ᠵᠥᠪᠯᠡᠨ"}
            containerClassName={"bg-[#FFFF00] text-[10px]"}
          />

          <div className="flex flex-col gap-6 overflow-y-auto max-h-[600px] p-2">
            {chapterMembers.map((member, index) => (
              <div
                key={member.id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
              >
                {/* Member Image */}
                <div className="h-48 w-full relative">
                  <Image
                    src={member.image || "/images/no-image-icon.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="p-4">
                  <h3
                    className="font-bold text-lg mb-2 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "120px",
                      overflow: "hidden",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600 text-center mb-3"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "60px",
                      overflow: "hidden",
                    }}
                  >
                    {member.position}
                  </p>
                  <p
                    className="text-xs text-gray-700 line-clamp-4"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
