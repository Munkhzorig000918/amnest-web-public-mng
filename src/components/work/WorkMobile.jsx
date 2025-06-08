import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";

export default function WorkMobile() {
  return (
    <div className="h-full w-full block sm:hidden">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="h-full p-4 flex flex-col gap-7">
        <div className="h-full flex gap-7 max-h-[150px]">
          <h2
            className="text-xs font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠪᠢᠳᠡ ᢈᠡᠷᢈᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠶ᠋ᠢ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?
          </h2>
          <div className="h-full w-full flex max-h-[150px] gap-7 overflow-x-auto">
            {changeitems.map((item) => (
              <div key={item.id} className="flex gap-2">
                <h4
                  className="text-[10px] font-bold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[10px]"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full flex gap-7">
          <h2
            className="text-xs font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠤ᠋ᠳ
          </h2>
          <div className="h-full grid grid-cols-5 gap-2">
            {campaignItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-2 border rounded p-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="min-w-5 min-h-5"
                />
                <p
                  className="text-[10px] pl-2 font-bold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const changeitems = [
  {
    id: 1,
    title: "ᠰᠤᠳᠤᠯᠭ᠎ᠠ",
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃",
  },
  {
    id: 2,
    title: "ᠨᠥᠯᠦᢉᠡᠯᠡᠯ ᠦ᠋ᠨ ᠠᠵᠢᠯ",
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃",
  },
  {
    id: 3,
    title: "ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ᠂ ᠠᠻᠼ",
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃",
  },
];

const campaignItems = [
  {
    id: 1,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 2,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 3,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 4,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 5,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 6,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 7,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 8,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 9,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 10,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 11,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 12,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
  {
    id: 13,
    title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
    image: "/images/about1.png",
  },
];
