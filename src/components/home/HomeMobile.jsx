import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import Image from "next/image";

export default function HomeMobile() {
  return (
    <div className="w-full min-h-screen bg-white block md:hidden">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} width="100%" />
      </div>
      <div className="h-full p-1">
        <div className="max-h-[200px] h-full flex gap-3">
          <SectionTitle
            title="ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠦᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠮᠡᠳᠡᢉᠡ"
            containerClassName="max-h-[200px] flex flex-col gap-1 items-center justify-between border-0 rounded-none border-r border-[#E3E3E3] p-2"
            button={
              <button
                className="text-sm rounded-lg bg-[#FFFF00] max-h-10 text-[8px] leading-tight p-1"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠪᠦᢈᠦ ᠮᠡᠳᠡᢉᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ
              </button>
            }
          />
          <div className="flex flex-row gap-4 overflow-x-auto">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="w-full min-w-max flex items-end space-x-2"
              >
                <h3
                  className="text-[10px] max-h-[200px] py-2"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.title}
                </h3>
                <div className="relative min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] object-cover rounded-xl"
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
                  className="text-black clear-start "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-h-[200px] w-full overflow-x-auto bg-[#F1F1F1] flex gap-10 p-5">
        <p
          className="text-black font-bold text-[10px] sm:text-base"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ
          ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ <br />
          ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᢈᠦᠮᠦᠨ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ
          ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠤᠮ᠃
        </p>
        <p
          className="text-[#848382] font-bold text-[10px] sm:text-base"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
          ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ <br />
          ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠠᠳᠠᠭ᠃
        </p>
      </div>
      <div className="min-h-[400px] w-full overflow-x-auto p-1">
        <div className="h-full grid grid-cols-2 grid-rows-2 gap-[5px]">
          {aboutItems.map((item) => (
            <div
              key={item.id}
              className="max-h-[200px] w-full flex flex-row justify-between border border-[#E3E3E3] rounded-xl p-2 gap-1"
            >
              <div className="flex items-end">
                <Button type="secondary" text={"ᠪᠢᠳᠡᠨ ᠦ᠋ ᠲᠡᠦᢈᠡ ᠶ᠋ᠢ ᠤᠩᠰᠢᠬᠤ"} />
              </div>
              <div className="flex flex-row-reverse gap-1">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                  <h4
                    className="text-black font-bold text-[10px] sm:text-base"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
                <div
                  className="text-black font-bold text-[8px] sm:text-base"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const newsItems = [
  {
    id: 1,
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠳ᠋ᠦ ᠡᢉᠡᠯᠢ ᠲᠡᠢ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᢈᠥᠲᠦᠯᠪᠦᠷᠢ ᠪᠠᠶᠠᠨ-ᠥᠯᠦᢉᠡᠢ᠂ ᠬᠣᠪᠳᠤ ᠠᠶᠢᠮᠠᠭ ᠲᠤ ᢈᠡᠷᠡᢉᠵᠢᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
    image: "/images/news1.png",
  },
  {
    id: 2,
    title:
      "ᠲᠠᠨ ᠤ᠋ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠡᠮᠡᠴᠡᠯ ᠲᠠᠢ ᠬᠣᠯᠪᠣᠭᠳᠠᠬᠤ ᠴᠢᠬᠤᠯᠠ ᠲᠡᠮᠡᠴᠡᠯ",
    image: "/images/news1.png",
  },
  {
    id: 3,
    title:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠵᠠᠯᠠᠭᠤᠴᠤᠳ ᠤᠨ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠪᠦᢉᠦᠳᠡ ᠶ᠋ᠢᠨ ᠢᠳᠡᠪᢈᠢ ᠣᠷᠣᠯᠴᠠᠭ᠎ᠠ ᠶ᠋ᠢ ᠡᠷᠢᠯᢈᠢᠯᠡᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ",
    image: "/images/news1.png",
  },
  {
    id: 4,
    title:
      "ᠲᠡᢉᠰᠢ ᠪᠢᠰᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠡᠰᠡᠷᢉᠦ ᠲᠡᠮᠡᠴᠡᠯ ᠢ ᠳᠡᠮᠵᠢᠬᠦ ᠲᠦᠷᠦ ᠶ᠋ᠢᠨ ᠪᠣᠳᠣᠯᠭ᠎ᠠ ᠶ᠋ᠢ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠬᠡᠷᠡᢉᠲᠡᠢ",
    image: "/images/news1.png",
  },
  {
    id: 5,
    title:
      "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠣᠯᠤᠨ ᠳᠠᠳᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠤᠨ ᠲᠥᠯᠦᢉᠡ ᠮᠣᠩᢉᠣᠯ ᠳᠠᠬᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠵᠢᠨ ᠠᠵᠢᠯᠯᠠᢉᠠ ᠲᠥᢈᠦᠰᠪᠦᠷᠢ",
    image: "/images/news1.png",
  },
  {
    id: 6,
    title:
      "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠲᠤᠷᠠᠯ ᠤᠨ ᠡᠷᢈᠡᠮ ᠰᠢᠨᠵᠢᠯᠡᢉᠡᠨ ᠦ᠋ ᠬᠦᠷᠢᠶᠡᠯᠡᠩ ᠢ᠋ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ",
    image: "/images/news1.png",
  },
];

const aboutItems = [
  {
    id: 1,
    title: "ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?",
    body: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
    image: "/images/about1.png",
  },
  {
    id: 2,
    title: "ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?",
    body: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠢᠱᠢᢉ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠢᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠡᠨᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ  ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠳ᠋ᠦ ᠣᠷᠤᠰᠢᠨ᠎ᠠ᠃",
    image: "/images/about2.png",
  },
  {
    id: 3,
    title: "ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?",
    body: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
    image: "/images/about3.jpg",
  },
  {
    id: 4,
    title: "ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?",
    body: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠢᠱᠢᢉ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠢᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠡᠨᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ  ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠳ᠋ᠦ ᠣᠷᠤᠰᠢᠨ᠎ᠠ᠃",
    image: "/images/about4.jpg",
  },
];
