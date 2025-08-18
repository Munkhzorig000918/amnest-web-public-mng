import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

export default function StructureChapterMembersMobile() {
  const router = useRouter();

  const chapterGroups = [
    {
      id: 1,
      name: "ᠵᠠᠯᠠᠭᠤᠴᠤᠤᠯ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ",
      image: "/images/aboutSub1/chapter/ZaluuchuudBulegFront.png",
      link: "/participation/youth",
    },
    {
      id: 2,
      name: "ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠦ᠋ᠨ ᠪᠦᠯᠦᢉ",
      image: "/images/aboutSub1/chapter/mergejilten.png",
    },
    {
      id: 3,
      name: "ᠣᠷᠤᠨ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ",
      image: "/images/aboutSub1/chapter/gazriinremovebg-preview.png",
      link: "#oronnutag",
    },
  ];

  return (
    <div className="w-full block sm:hidden">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} width="90rem" />
      </div>
      <div className="flex flex-col gap-12 p-4 h-full">
        {/* Header Section */}
        <div className="flex gap-2 max-h-[200px]">
          <h2
            className="text-[10px] font-bold"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠯ ᠦ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠳ
          </h2>
          <p
            className="text-[8px] text-[#848382]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ (ᠮᠡᠶᠢ) ᠨᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠭᠰᠠᠨ ᠴᠠᠭ ᠠ᠋ᠴᠠ
            ᠪᠠᠨ ᠡᢈᠢᠯᠡᠨ ᠥᠨᠦ ᠶ᠋ᠢ ᢈᠦᠷᠲᠡᠯ᠎ᠡ ᠣᠷᠤᠨ ᠳᠠᠶᠠᠭᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ
            ᠑᠐'᠐᠐᠐ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠲᠡᠢ ᠪᠣᠯᠤᠭᠰᠠᠨ᠃
          </p>
        </div>

        {/* Chapter Groups Section */}
        <div className="flex overflow-x-auto gap-4 pb-4">
          {chapterGroups.map((group) => (
            <div
              key={group.id}
              className="flex-none flex flex-col items-center gap-4 min-w-[250px] max-w-[250px] border-r border-dashed border-gray-300 pr-4 last:border-r-0"
            >
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src={group.image}
                  alt={group.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {group.link ? (
                <Link
                  href={group.link}
                  className="text-sm"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {group.name}
                </Link>
              ) : (
                <p
                  className="text-sm"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {group.name}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Local Chapters Map Section */}
        <div className="flex flex-col gap-4" id="oronnutag">
          <h3
            className="text-sm font-bold"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠣᠷᠤᠨ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ
          </h3>
          <div className="relative w-full h-[200px]">
            <Image
              src="/images/aboutSub1/chapter/gazriinremovebg-preview.png"
              alt="ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠤ᠋ᠨ ᠵᠢᠷᠤᠭ"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Membership Types Section */}
        <div className="flex flex-col gap-8">
          <h4
            className="text-sm font-bold"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯᠡ ᠶ᠋ᠢᠨ ᠳᠡᠮᠵᠢᢉᠴᠢ ᠪᠣᠯᠤᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠦ᠋
            ᠶ᠋ᠢᠨ ᠢᠯᠭᠠᠭ᠎ᠠ ᠨᠢ ᠶᠠᠭᠤ ᠪᠤᠢ?
          </h4>

          <div className="flex overflow-x-auto gap-8">
            <div className="flex-none min-w-[250px] max-w-[250px] flex flex-col items-center gap-4 border-r border-dashed border-gray-300 pr-4">
              <h4
                className="text-sm font-bold"
                style={{
                  writingMode: "vertical-lr",
                }}
              >
                ᠳᠡᠮᠵᠢᢉᠴᠢ
              </h4>
              <p
                className="text-xs"
                style={{
                  writingMode: "vertical-lr",
                }}
              >
                ᠳᠡᠮᠵᠢᢉᠴᠢ ᠨᠢ ᠰᠠᠩᢈᠦᠦ ᠶ᠋ᠢᠨ ᠬᠤᠪᠢ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠵᠤ
                ᠪᠠᠶᠢᠭ᠎ᠠ ᠡᠰᠡᠪᠡᠯ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠦ᠋ᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠠᠪᠴᠤ
                ᠪᠠᠶᠢᠭ᠎ᠠ ᢈᠦᠮᠦᠰ᠃
              </p>
              <Button
                text={"ᠠᠻᠲ᠋ᠢᠸᠢᠰᠮ ᠳ᠋ᠤ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                onClick={() => router.push("/participation")}
              />
            </div>

            <div className="flex-none min-w-[250px] max-w-[250px] flex flex-col items-center gap-4">
              <h4
                className="text-sm font-bold"
                style={{
                  writingMode: "vertical-lr",
                }}
              >
                ᢉᠡᠰᠢᢉᠦᠨ
              </h4>
              <p
                className="text-xs"
                style={{
                  writingMode: "vertical-lr",
                }}
              >
                ᢉᠡᠰᠢᢉᠦᠨ ᠵᠠᠰᠠᠭᠯᠠᠯ ᠲᠠᠢ ᠬᠣᠯᠪᠤᠭᠠᠲᠠᠢ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠳ᠋ᠤ ᠪᠦᠷᠢᠨ
                ᠣᠷᠤᠯᠴᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃
              </p>
              <Button
                text={"ᢉᠡᠰᠢᢉᠦᠨ ᠪᠣᠯᠬᠤ"}
                onClick={() => router.push("/member")}
              />
            </div>
          </div>
        </div>

        <div
          className="text-xs text-center"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᢈᠡᠷᠪᠡ ᠲᠠᠨ ᠳ᠋ᠤ ᠠᠰᠠᠭᠤᠯᠲᠠ ᠪᠠᠶᠢᠪᠠᠯ ᢉᠡᠰᠢᢉᠦᠳ ᠦ᠋ᠨ ᠦᠢᠯᠡᠴᠢᠯᠡᢉᠡ ᠤᠷᠤᠭᠤ ᠢᠮᠡᠶᠢᠯ
          ᠢᠯᠡᢉᠡᠨ᠎ᠡ ᠦᠦ: members@amnesty.mn
        </div>
      </div>
    </div>
  );
}
