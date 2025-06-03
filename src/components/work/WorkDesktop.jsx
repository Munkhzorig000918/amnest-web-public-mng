import Image from "next/image";
import Button from "@/components/Button";
import BannerSlider from "@/components/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/SectionTitle";

export default function HomeDesktop() {
  return (
    <div className="h-full flex gap-10 overflow-x-auto w-auto flex-shrink-0">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="h-full p-4 flex gap-32">
        <div className="h-full flex gap-10">
          <SectionTitle title={"ᠪᠢᠳᠡ ᢈᠡᠷᢈᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠶ᠋ᠢ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?"} />
          <div className="h-full w-full grid grid-cols-1 grid-rows-3 gap-10">
            {changeitems.map((item) => (
              <div key={item.id} className="flex gap-5">
                <h4
                  className="text-2xl font-bold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm font-bold"
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
        <div className="h-full flex gap-10">
          <SectionTitle title={"ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠤ᠋ᠳ"} />
          <div className="h-full grid grid-rows-3 grid-flow-col gap-[10px]">
            {campaignItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center w-36 gap-5 border-2 border-black p-5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                />
                <p
                  className="text-base font-bold"
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
