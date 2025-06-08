import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function ContactDesktop() {
  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-16 p-4 h-full">
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
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
            className="text-sm"
          >
            ᠠᠩᠬᠠᠷᠤᠨ᠎ᠠ ᠤ᠋ᠤ: ᠪᠢᠳᠡ ᠲᠠᠨ ᠤ᠋ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ ᠤᠲᠠᠰᠤ ᠪᠠᠷ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠬᠤ
            ᢈᠦᠷᠲᠡᠯ᠎ᠡ ᠲᠠᠨ ᠤ᠋ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪᠲᠤ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠣᠷᠤᠭᠤᠯᠬᠤ᠂ ᠴᠤᠴᠠᠯᠠᠬᠤ
            ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃ ᠬᠣᠯᠪᠤᠭᠳᠠᠬᠤ ᠳ᠋ᠤᠭᠠᠷ ᠗᠐᠐᠐-᠔᠗᠐᠕᠃
          </p>
        </div>
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
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
            className="text-sm"
          >
            ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ ᠬᠣᠲᠠ᠂ ᠰᠦᢈᠡᠪᠠᠭᠠᠲᠤᠷ ᠳᠡᢉᠦᠷᢉᠡ᠂ ᠖-ᠷ ᠬᠣᠷᠢᠶ᠎ᠠ᠂ AB Centerᠯ᠂ ᠗
            ᠳᠠᠪᠬᠤᠷ
          </p>
        </div>
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠬᠣᠯᠪᠤᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
          </h2>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠨᠡᠷ᠎ᠡ*
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠢᠮᠡᠶᠢᠯ ᠬᠠᠶᠢᠭ*
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠭᠠᠷᠴᠠᠭ
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳ᠋ᠤᠭᠠᠷ (ᠵᠠᠪᠠᠯ ᠪᠢᠰᠢ)
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠶᠠᠮᠠᠷ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ?
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠧᠰᠰᠧᠵᠢ
            </p>
            <textarea
              type="text"
              className="border border-gray-300 rounded-md p-2 w-60"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
