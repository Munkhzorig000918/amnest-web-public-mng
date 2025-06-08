import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function ContactDesktop() {
  return (
    <div className="h-full w-full block sm:hidden p-4">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-10 max-h-[150px] overflow-x-auto">
        <div className="flex gap-2">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠤᠲᠠᠰᠤ: ᠗᠐᠐᠐-᠔᠗᠐᠘
          </h2>
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-[10px]"
          >
            ᠠᠩᠬᠠᠷᠤᠨ᠎ᠠ ᠤ᠋ᠤ: ᠪᠢᠳᠡ ᠲᠠᠨ ᠤ᠋ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ ᠤᠲᠠᠰᠤ ᠪᠠᠷ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠬᠤ
            ᢈᠦᠷᠲᠡᠯ᠎ᠡ ᠲᠠᠨ ᠤ᠋ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪᠲᠤ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠣᠷᠤᠭᠤᠯᠬᠤ᠂ ᠴᠤᠴᠠᠯᠠᠬᠤ
            ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃ ᠬᠣᠯᠪᠤᠭᠳᠠᠬᠤ ᠳ᠋ᠤᠭᠠᠷ ᠗᠐᠐᠐-᠔᠗᠐᠕᠃
          </p>
        </div>
        <div className="flex gap-2">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯᠡ ᠶ᠋ᠢᠨ ᠣᠹᠹᠢᠰ
          </h2>
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-[10px]"
          >
            ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ ᠬᠣᠲᠠ᠂ ᠰᠦᢈᠡᠪᠠᠭᠠᠲᠤᠷ ᠳᠡᢉᠦᠷᢉᠡ᠂ ᠖-ᠷ ᠬᠣᠷᠢᠶ᠎ᠠ᠂ AB Centerᠯ᠂ ᠗
            ᠳᠠᠪᠬᠤᠷ
          </p>
        </div>
      </div>
      <div className="flex gap-7 mt-4 w-full">
        <h2
          className="text-xs font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠬᠣᠯᠪᠤᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-[10px]">ᠨᠡᠷ᠎ᠡ*</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px]">ᠢᠮᠡᠶᠢᠯ ᠬᠠᠶᠢᠭ*</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px]">ᠭᠠᠷᠴᠠᠭ</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px]">ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳ᠋ᠤᠭᠠᠷ (ᠵᠠᠪᠠᠯ ᠪᠢᠰᠢ)</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px]">ᠶᠠᠮᠠᠷ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ?</p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px]">ᠮᠧᠰᠰᠧᠵᠢ</p>
            <textarea
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
