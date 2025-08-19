import Image from "next/image";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import StaticHeader from "@/components/common/StaticHeader";

export default function StructureManagersMobile() {
  const managers = [
    {
      id: 1,
      name: "ᠷ‍᠂ ᠸᠴᠢᠷᠪᠠᠯ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠣᠳᠬᠠᠨᠲᠩᠷᠢ ᠶᠡᢈᠡ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠬᠠᠤᠯᠢ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠳ᠋ᠤ ᠪᠠᠭᠰᠢᠯᠠᠳᠠᠭ᠃  ᠬᠠᠤᠯᠢᠴᠢ᠂ ᠥᠮᠦᢉᠡᠯᠡᢉᠴᠢ ᠪᠡᠷ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃  ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠶ᠋ᠢᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠳ᠋ᠤ ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠑᠐ ᠭᠠᠷᠤᠢ ᠵᠢᠯ ᠦ᠋ᠨ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠳ᠋ᠤ ᠢᠳᠡᠪᢈᠢ ᠲᠡᠢ ᠣᠷᠤᠯᠴᠠᠵᠤ᠂ ᠬᠠᠤᠯᠢᠴᠢᠳ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᠠᠬᠠᠯᠠᠭᠴᠢ᠂ ᠒᠐᠑᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ᠂ ᠒᠐᠒᠓ ᠣᠨ ᠤ᠋ ᠙ ᠳ᠋ᠦᢉᠡᠷ ᠰᠠᠷ᠎ᠠ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠰᠣᠩᠭᠤᠭᠳᠠᠨ ᠳᠠᠷᠤᠭ᠎ᠠ ᠪᠠᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/ochirbal.png",
    },
    {
      id: 2,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/boldsuren.png",
    },
    {
      id: 3,
      name: "ᠪ‍᠂ ᠮᠣᠩᠭᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠮᠣᠩᠭᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/munkhjavhlan.png",
    },
    {
      id: 4,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/baylagmaa.png",
    },
    {
      id: 5,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/oyunnomin.png",
    },
    {
      id: 6,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/badral.png",
    },
    {
      id: 7,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/khuslen.png",
    },
    {
      id: 8,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/nandintsetseg.png",
    },
    {
      id: 9,
      name: "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ",
      position: "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠡᠳ᠋ ᠳᠠᠷᠤᠭ᠎ᠠ",
      description:
        "ᠪ‍᠂ ᠪᠣᠯᠤᠳᠰᠦ᠋ᠷᠦᠩ ᠨᠢ ᠒᠐᠐᠙ ᠣᠨ ᠠ᠋ᠴᠠ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠪᠠᠭᠰᠢ ᠨᠠᠷ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ᠂ ᠒᠐᠒᠐ ᠣᠨ ᠠ᠋ᠴᠠ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠨ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
      image: "/images/managers/iderjav.png",
    },
  ];

  return (
    <div className="w-full block sm:hidden">
      <div className="relative w-full h-[40vh]">
        <StaticHeader
          title="ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ"
          description="ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠪᠣᠳᠤᠯᠭ᠎ᠠ᠂ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠳ᠋ᠤ ᠮᠡᠷᢉᠡᠵᠢᠯ ᠦ᠋ᠨ ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ᠂ ᠲᠤᠷᠰᠢᠯᠭ᠎ᠠ᠂ ᠴᠠᠭ ᠵᠠᠪ ᠢ᠋ᠶᠠᠨ ᠬᠠᠨᠳᠢᠪᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠳ᠃"
        />
      </div>
      <div className="flex flex-col gap-12 p-4 h-full">
        <div className="flex gap-2 max-h-[200px]">
          <h2
            className="text-[10px] font-bold"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ
          </h2>
          <p
            className="text-[8px] text-[#848382]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠪᠣᠳᠤᠯᠭ᠎ᠠ᠂ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠳ᠋ᠤ
            ᠮᠡᠷᢉᠡᠵᠢᠯ ᠦ᠋ᠨ ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ᠂ ᠲᠤᠷᠰᠢᠯᠭ᠎ᠠ᠂ ᠴᠠᠭ ᠵᠠᠪ ᠢ᠋ᠶᠠᠨ ᠬᠠᠨᠳᠢᠪᠯᠠᠵᠤ
            ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᢉᠡᠰᠢᢉᠦᠳ᠃
          </p>
        </div>

        {/* Managers Section */}
        <div className="flex overflow-x-auto gap-4 pb-4">
          {managers.map((manager, index) => (
            <div
              key={manager.id}
              className="flex-none flex flex-col items-center gap-4 min-w-[250px] max-w-[250px] border-r border-dashed border-gray-300 pr-4 last:border-r-0"
            >
              <Image
                src={manager.image || "/images/no-image-icon.png"}
                alt={manager.name}
                width={200}
                height={200}
                className="rounded-full w-[200px] h-[200px]"
              />
              <div className="flex items-start gap-2">
                <h3
                  className="font-bold text-sm"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {manager.name}
                </h3>
                <p
                  className="text-xs text-gray-600"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {manager.position}
                </p>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {manager.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
