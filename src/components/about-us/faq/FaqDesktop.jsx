import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function FaqDesktop() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-6 max-h-screen overflow-y-auto p-4">
        {faqItems.map((item, index) => (
          <div key={index} className="flex">
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-center items-center w-12 h-full py-6 rounded-lg transition-colors duration-200 bg-[#FFFF00]"
            >
              <h3
                className="text-lg font-bold text-black pl-2"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {item.title}
              </h3>
            </button>
            {openItems.has(index) && (
              <div
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className="max-w-xs h-full max-h-screen overflow-hidden transition-all duration-500 ease-in-out ml-2 px-4 py-6 bg-white bg-opacity-90 rounded-lg"
              >
                <p
                  className="text-black leading-relaxed"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqItems = [
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
  {
    title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ",
    description:
      "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠢ᠋ ᠬᠠᠮᠤᠷᠤᠭᠰᠠᠨ ᠑᠐ ᠰᠠᠶ᠎ᠠ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠴᠢᠳ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃  ᠪᠢᠳᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠪᠤᠢ ᠡᠷᠦᠰᠳᠡᠯ ᠳ᠋ᠦ ᠪᠤᠢ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠬᠠᠮᠠᠭᠠᠯᠠᠵᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠵᠡᠷᢉᠡᠴᠡᢉᠡ ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠲᠤ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠲᠦᢉᠡᢉᠡᠨ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ᠂ ᠴᠢᠳᠠᠪᠤᠷᠢᠵᠢᠭᠤᠯᠬᠤ᠂ ᠠᠶᠤᠯ ᠡᠷᠦᠰᠳᠡᠯ ᠦᢉᠡᠢ ᠨᠥᢈᠦᠴᠡᠯ ᠳ᠋ᠦ ᠠᠵᠢᠯ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠡᠨ ᠡᠷᢈᠢᠯᠡᢈᠦ ᠨᠥᢈᠦᠴᠡᠯ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠬᠠᠤᠯᠢ ᠡᠷᢈᠡ ᠵᠦᠢ ᠶ᠋ᠢᠨ ᠣᠷᠴᠢᠨ ᠢ᠋ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
  },
];
