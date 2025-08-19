import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import InteractiveMap from "@/components/participation/InteractiveMap";
import StaticHeader from "@/components/common/StaticHeader";

// Sample data for top 5 provinces - this should come from API in real implementation
const top5Provinces = [
  { provinceName: "Улаанбаатар", count: 25, percent: 25.0 },
  { provinceName: "Төв", count: 18, percent: 18.0 },
  { provinceName: "Орхон", count: 16, percent: 16.0 },
  { provinceName: "Дархан-Уул", count: 14, percent: 14.0 },
  { provinceName: "Дорнод", count: 13, percent: 13.0 },
];

// Arch visualization data - all yellow dots
const archGraduses = [
  { gradus: 4 },
  { gradus: 13 },
  { gradus: 22 },
  { gradus: 31 },
  { gradus: 40 },
  { gradus: 49 },
  { gradus: 58 },
  { gradus: 67 },
  { gradus: 76 },
  { gradus: 85 },
  { gradus: 94 },
  { gradus: 103 },
  { gradus: 112 },
  { gradus: 121 },
  { gradus: 130 },
  { gradus: 139 },
  { gradus: 148 },
  { gradus: 157 },
  { gradus: 166 },
  { gradus: 175 },
];

export default function EyeDesktop() {
  const totalNews = 100; // This should come from API
  const archInfo = {
    count: totalNews,
    percent: 100,
    title: "Нийт ирсэн мэдээллийн тоо",
  };

  return (
    <div className="h-full hidden sm:flex gap-10 w-auto flex-shrink-0">
      <StaticHeader
        image="/images/news1.png"
        alt="Youth Page Header"
        width="90rem"
        title="ᠵᠠᠯᠠᠭᠤᠴᠤᠳ ᠤ᠋ᠨ ᠣᠷᠤᠯᠴᠠᠭ᠎ᠠ"
      />
      <div className="h-full p-4 flex gap-20">
        <div className="flex gap-10">
          <p
            className="text-sm"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠩᠬᠠᠷᠤᠯ ᠲᠠᠲᠠᠭᠰᠠᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠤ᠋ᠳ ᠢ᠋ ᠡᠷᠢᠯᢈᠢᠯᠡᢈᠦ᠂
            ᠰᠢᠢᠳᠪᠦᠷᠢᠯᠡᢈᠦ ᠠᠷᠭ᠎ᠠ ᠵᠠᠮ ᠢ᠋ ᠲᠣᠳᠤᠷᠬᠠᠶᠢᠯᠠᠬᠤ ᠳ᠋ᠤ ᠢᠷᢉᠡᠳ ᠦ᠋ᠨ ᠣᠷᠤᠯᠴᠠᠭ᠎ᠠ ᠶ᠋ᠢ
            ᠳᠡᠮᠵᠢᢈᠦ ᠵᠣᠷᠢᠯᠭ᠎ᠠ ᠪᠠᠷ ᠶᠠᠪᠤᠭᠤᠯᠵᠤ ᠪᠤᠢ "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠨᠢᠳᠦ" ᠦᠨᠳᠦᠰᠦᠨ
            ᠦ᠋ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠦ᠋ᠨ ᠮᠠᠷᠠᠹᠤᠨ᠃
          </p>
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠶᠠᠭᠠᢈᠢᠭᠰᠠᠨ ᠬᠠᠷᠠᠩᠬᠤᠢ ᠶᠤᠮ ᠪᠤᠢ ᢉᠡᠵᠦ ᠬᠠᠰᢈᠢᠷᠤᠭᠰᠠᠨ ᠠ᠋ᠴᠠ ᠶᠠᠳᠠᠵᠤ ᠨᠢᢉᠡ ᠴᠤ
            ᢉᠡᠰᠡᠨ ᠯᠠ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᠠᠰᠠᠭ᠎ᠠ᠃ ᠃ ᠃
          </h2>
        </div>
        <div className="h-full flex justify-center items-center gap-16">
          <p
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠤ᠋ᠨ ᠵᠢᠷᠤᠭ
          </p>
          <div className="h-1/2">
            <InteractiveMap />
          </div>
        </div>

        {/* Yellow Arch Visualization */}
        <div className="flex flex-col items-center">
          <div className="w-[546px] h-[311px] flex items-center justify-end flex-col mb-[60px]">
            <div className="text-[42px] px-4 flex flex-col items-center">
              {archInfo.percent}%
              <div className="h-[3px] w-[127px] bg-black mb-1" />
            </div>
            <div className="text-[13px] w-[240px] h-[40px] text-center truncate-text">
              {archInfo.title}
            </div>
            <div className="text-[71px] leading-none">{archInfo.count}</div>
            <div className="w-0 h-0 relative">
              {archGraduses.map((item, index) => (
                <div
                  key={index}
                  className="w-[260px] h-[45px] absolute right-0 bottom-4 flex items-center space-x-1.5"
                  style={{
                    transform: `rotate(${item.gradus}deg)`,
                    transformOrigin: "right",
                    clipPath: "polygon(0 0, 0 100%, 100% 50%)",
                  }}
                >
                  {[0, 1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className="w-[17px] h-[17px] rounded-full"
                      style={{
                        backgroundColor: "#fcff29",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Хамгийн их мэдээлэл ирсэн аймаг, дүүрэг section */}
          <div className="flex flex-col">
            <div
              className="w-[507px] h-[120px] flex items-center justify-center border border-black text-[22px]"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠬᠠᠮᠠᠭᠢᠨ ᠢ᠋ᠢᠬ ᠮᠡᠳᠡᠡᠡᠯ ᠢᠷᠰᠡᠨ ᠠ᠋ᠢᠮᠠᠭ᠂ ᠳ᠋ᠦᠦᠷᠡᠭ
            </div>
            <div className="flex w-[507px] h-[80px] pl-[10px] my-[20px]">
              <div className="flex-1 flex items-center justify-center">
                <span
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠠ᠋ᠢᠮᠠᠭ
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠨᠢᠢᠢᠲ
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  %
                </span>
              </div>
            </div>
            {top5Provinces.map((item, index) => (
              <div
                key={index}
                className="flex w-[507px] h-[80px] pl-[10px] mb-[20px] border-l-2 border-black"
              >
                <div
                  className={`flex-1 flex items-center justify-center border border-black ${
                    index === 0 ? "border-none" : ""
                  }`}
                  style={{
                    backgroundColor: index === 0 ? "#fcff29" : "transparent",
                  }}
                >
                  <span
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {item.provinceName}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <span
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {item.count}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <span
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {item.percent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-7 p-20" id="fill-info">
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳ᠋ᠤᠭᠠᠷ:
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
              ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠬᠤ ᠻᠣᠳ*
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
              ᠪᠠᠶᠢᠷᠢᠰᠢᠯ*
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
              ᠻᠣᠸᠧᠷ ᠵᠢᠷᠤᠭ ᠰᠣᠩᠭᠤᠬᠤ*
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
              ᠶᠠᠮᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ*
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

const volunteerItems = [
  {
    id: 1,
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠲᠦ ᢈᠦᠴᠦ ᠨᠡᠮᠡᠵᠦ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᢈᠦᠴᠦᠷᢈᠡᢉ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠦᢉᠡᠢ ᠪᠡᠷ ᠡᠨᠡ ᠲᠡᠮᠡᠴᠡᠯ ᠳ᠋ᠦ ᠠᠮᠵᠢᠯᠲᠠ ᠭᠠᠷᠭᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠢ᠋ ᠲᠥᠯᠦᠪᠰᠢᢉᠦᠯᠵᠦ᠂ ᠤᠳᠤᠷᠢᠳᠴᠤ᠂ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠳᠡᢉ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠢᠨ ᠲᠠᠢ ᠠᠩᠬᠠᠨ ᠱᠠᠲᠤᠨ ᠤ᠋ ᢉᠡᠰᠢᢉᠦᠨᠴᠢᠯᠡᠯ ᠦ᠋ᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶᠤᠮ᠃ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠲᠡᠢ ᠪᠥᢉᠡᠳ ᠲᠡᠳᠡᠨ ᠦ᠋ ᠑᠐᠐᠐᠐ ᠭᠠᠷᠤᠢ ᠨᠢ ᠮᠣᠩᠭᠣᠯ ᠳ᠋ᠤ ᠪᠠᠶᠢᠳᠠᠭ᠃  ᠲᠡᠳᠡ ᠵᠠᢈᠢᠳᠠᠯ ᠤᠷᠢᠶᠠᠯᠭ᠎ᠠ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠴᠤᠭᠯᠠᠭᠤᠯᠬᠤ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠵᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠤᠷᠢᠶᠠᠯᠠᠵᠤ᠂ ᠮᠡᠳᠡᠯᢉᠡ ᠲᠦᢉᠡᢉᠡᠵᠦ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᠦᢉᠰᠡᠨ ᠡᠳᠡᢉᠡᠷ ᢈᠦᠮᠦᠰ ᠪᠣᠯ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠶ᠋ᠢᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠲᠣᠮᠤ ᢈᠦᠴᠦ ᠶᠤᠮ᠃  ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯᠲᠠᠨ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠡᠵᠡᠮᠰᠢᠵᠦ᠂ ᠰᠢᠨ᠎ᠡ ᢈᠦᠮᠦᠰ ᠲᠡᠢ ᠲᠠᠨᠢᠯᠴᠠᠬᠤ - ᠥᠨᠦᠳᠦᠷ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠠᠵᠢᠯ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃  ᠳᠣᠯᠤᠭ᠎ᠠ ᠬᠣᠨᠤᠭ ᠲᠤ ᢈᠡᠳᠦᠨ ᠮᠢᠨᠦ᠋ᠲ ᠴᠤ ᠪᠠᠢ᠂ ᢈᠡᠳᠦᠨ ᠴᠠᠭ ᠴᠤ ᠪᠠᠢ ᠲᠠ ᠮᠠᠨ ᠤ᠋ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᠨᠢᢉᠡ ᢈᠡᠰᠡᢉ ᠪᠣᠯᠵᠤ ᠴᠢᠳᠠᠨ᠎ᠠ᠃",
  },
  {
    id: 2,
    title: "᠑᠐᠐ ᠴᠠᠭ ᠤ᠋ᠨ ᠰᠧᠷᠲ᠋ᠢᠹᠢᠻᠠᠲ ᠲᠠᠢ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᢈᠥᠲᠦᠯᠪᠦᠷᠢ",
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠲᠦ ᢈᠦᠴᠦ ᠨᠡᠮᠡᠵᠦ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᢈᠦᠴᠦᠷᢈᠡᢉ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠦᢉᠡᠢ ᠪᠡᠷ ᠡᠨᠡ ᠲᠡᠮᠡᠴᠡᠯ ᠳ᠋ᠦ ᠠᠮᠵᠢᠯᠲᠠ ᠭᠠᠷᠭᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠢ᠋ ᠲᠥᠯᠦᠪᠰᠢᢉᠦᠯᠵᠦ᠂ ᠤᠳᠤᠷᠢᠳᠴᠤ᠂ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠳᠡᢉ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠢᠨ ᠲᠠᠢ ᠠᠩᠬᠠᠨ ᠱᠠᠲᠤᠨ ᠤ᠋ ᢉᠡᠰᠢᢉᠦᠨᠴᠢᠯᠡᠯ ᠦ᠋ᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶᠤᠮ᠃ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠲᠡᠢ ᠪᠥᢉᠡᠳ ᠲᠡᠳᠡᠨ ᠦ᠋ ᠑᠐᠐᠐᠐ ᠭᠠᠷᠤᠢ ᠨᠢ ᠮᠣᠩᠭᠣᠯ ᠳ᠋ᠤ ᠪᠠᠶᠢᠳᠠᠭ᠃  ᠲᠡᠳᠡ ᠵᠠᢈᠢᠳᠠᠯ ᠤᠷᠢᠶᠠᠯᠭ᠎ᠠ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠴᠤᠭᠯᠠᠭᠤᠯᠬᠤ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠵᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠤᠷᠢᠶᠠᠯᠠᠵᠤ᠂ ᠮᠡᠳᠡᠯᢉᠡ ᠲᠦᢉᠡᢉᠡᠵᠦ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᠦᢉᠰᠡᠨ ᠡᠳᠡᢉᠡᠷ ᢈᠦᠮᠦᠰ ᠪᠣᠯ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠶ᠋ᠢᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠲᠣᠮᠤ ᢈᠦᠴᠦ ᠶᠤᠮ᠃  ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯᠲᠠᠨ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠡᠵᠡᠮᠰᠢᠵᠦ᠂ ᠰᠢᠨ᠎ᠡ ᢈᠦᠮᠦᠰ ᠲᠡᠢ ᠲᠠᠨᠢᠯᠴᠠᠬᠤ - ᠥᠨᠦᠳᠦᠷ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠠᠵᠢᠯ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃  ᠳᠣᠯᠤᠭ᠎ᠠ ᠬᠣᠨᠤᠭ ᠲᠤ ᢈᠡᠳᠦᠨ ᠮᠢᠨᠦ᠋ᠲ ᠴᠤ ᠪᠠᠢ᠂ ᢈᠡᠳᠦᠨ ᠴᠠᠭ ᠴᠤ ᠪᠠᠢ ᠲᠠ ᠮᠠᠨ ᠤ᠋ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᠨᠢᢉᠡ ᢈᠡᠰᠡᢉ ᠪᠣᠯᠵᠤ ᠴᠢᠳᠠᠨ᠎ᠠ᠃",
  },
  {
    id: 3,
    title: "᠑᠐᠐ ᠴᠠᠭ ᠤ᠋ᠨ ᠰᠧᠷᠲ᠋ᠢᠹᠢᠻᠠᠲ ᠲᠠᠢ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᢈᠥᠲᠦᠯᠪᠦᠷᠢ",
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠲᠦ ᢈᠦᠴᠦ ᠨᠡᠮᠡᠵᠦ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᢈᠦᠴᠦᠷᢈᠡᢉ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠦᢉᠡᠢ ᠪᠡᠷ ᠡᠨᠡ ᠲᠡᠮᠡᠴᠡᠯ ᠳ᠋ᠦ ᠠᠮᠵᠢᠯᠲᠠ ᠭᠠᠷᠭᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠢ᠋ ᠲᠥᠯᠦᠪᠰᠢᢉᠦᠯᠵᠦ᠂ ᠤᠳᠤᠷᠢᠳᠴᠤ᠂ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠳᠡᢉ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠢᠨ ᠲᠠᠢ ᠠᠩᠬᠠᠨ ᠱᠠᠲᠤᠨ ᠤ᠋ ᢉᠡᠰᠢᢉᠦᠨᠴᠢᠯᠡᠯ ᠦ᠋ᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶᠤᠮ᠃ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠲᠡᠢ ᠪᠥᢉᠡᠳ ᠲᠡᠳᠡᠨ ᠦ᠋ ᠑᠐᠐᠐᠐ ᠭᠠᠷᠤᠢ ᠨᠢ ᠮᠣᠩᠭᠣᠯ ᠳ᠋ᠤ ᠪᠠᠶᠢᠳᠠᠭ᠃  ᠲᠡᠳᠡ ᠵᠠᢈᠢᠳᠠᠯ ᠤᠷᠢᠶᠠᠯᠭ᠎ᠠ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠴᠤᠭᠯᠠᠭᠤᠯᠬᠤ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠵᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠤᠷᠢᠶᠠᠯᠠᠵᠤ᠂ ᠮᠡᠳᠡᠯᢉᠡ ᠲᠦᢉᠡᢉᠡᠵᠦ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᠦᢉᠰᠡᠨ ᠡᠳᠡᢉᠡᠷ ᢈᠦᠮᠦᠰ ᠪᠣᠯ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠶ᠋ᠢᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠲᠣᠮᠤ ᢈᠦᠴᠦ ᠶᠤᠮ᠃  ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯᠲᠠᠨ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠡᠵᠡᠮᠰᠢᠵᠦ᠂ ᠰᠢᠨ᠎ᠡ ᢈᠦᠮᠦᠰ ᠲᠡᠢ ᠲᠠᠨᠢᠯᠴᠠᠬᠤ - ᠥᠨᠦᠳᠦᠷ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠠᠵᠢᠯ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃  ᠳᠣᠯᠤᠭ᠎ᠠ ᠬᠣᠨᠤᠭ ᠲᠤ ᢈᠡᠳᠦᠨ ᠮᠢᠨᠦ᠋ᠲ ᠴᠤ ᠪᠠᠢ᠂ ᢈᠡᠳᠦᠨ ᠴᠠᠭ ᠴᠤ ᠪᠠᠢ ᠲᠠ ᠮᠠᠨ ᠤ᠋ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᠨᠢᢉᠡ ᢈᠡᠰᠡᢉ ᠪᠣᠯᠵᠤ ᠴᠢᠳᠠᠨ᠎ᠠ᠃",
  },
  {
    id: 4,
    title: "᠑᠐᠐ ᠴᠠᠭ ᠤ᠋ᠨ ᠰᠧᠷᠲ᠋ᠢᠹᠢᠻᠠᠲ ᠲᠠᠢ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᢈᠥᠲᠦᠯᠪᠦᠷᠢ",
    description:
      "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠲᠦ ᢈᠦᠴᠦ ᠨᠡᠮᠡᠵᠦ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᢈᠦᠴᠦᠷᢈᠡᢉ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠦᢉᠡᠢ ᠪᠡᠷ ᠡᠨᠡ ᠲᠡᠮᠡᠴᠡᠯ ᠳ᠋ᠦ ᠠᠮᠵᠢᠯᠲᠠ ᠭᠠᠷᠭᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃  ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠢ᠋ ᠲᠥᠯᠦᠪᠰᠢᢉᠦᠯᠵᠦ᠂ ᠤᠳᠤᠷᠢᠳᠴᠤ᠂ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠳᠡᢉ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠢᠨ ᠲᠠᠢ ᠠᠩᠬᠠᠨ ᠱᠠᠲᠤᠨ ᠤ᠋ ᢉᠡᠰᠢᢉᠦᠨᠴᠢᠯᠡᠯ ᠦ᠋ᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶᠤᠮ᠃ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠳ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠲᠡᠢ ᠪᠥᢉᠡᠳ ᠲᠡᠳᠡᠨ ᠦ᠋ ᠑᠐᠐᠐᠐ ᠭᠠᠷᠤᠢ ᠨᠢ ᠮᠣᠩᠭᠣᠯ ᠳ᠋ᠤ ᠪᠠᠶᠢᠳᠠᠭ᠃  ᠲᠡᠳᠡ ᠵᠠᢈᠢᠳᠠᠯ ᠤᠷᠢᠶᠠᠯᠭ᠎ᠠ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠴᠤᠭᠯᠠᠭᠤᠯᠬᠤ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠵᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠤᠷᠢᠶᠠᠯᠠᠵᠤ᠂ ᠮᠡᠳᠡᠯᢉᠡ ᠲᠦᢉᠡᢉᠡᠵᠦ ᠲᠠᠰᠤᠷᠠᠯᠲᠠ ᠦᢉᠡᠢ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᠦᢉᠰᠡᢉᠡᠷ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᠦᢉᠰᠡᠨ ᠡᠳᠡᢉᠡᠷ ᢈᠦᠮᠦᠰ ᠪᠣᠯ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠶ᠋ᠢᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠲᠣᠮᠤ ᢈᠦᠴᠦ ᠶᠤᠮ᠃  ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯᠲᠠᠨ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠡᠵᠡᠮᠰᠢᠵᠦ᠂ ᠰᠢᠨ᠎ᠡ ᢈᠦᠮᠦᠰ ᠲᠡᠢ ᠲᠠᠨᠢᠯᠴᠠᠬᠤ - ᠥᠨᠦᠳᠦᠷ ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠠᠵᠢᠯ ᠢ᠋ ᠳᠡᠮᠵᠢᢈᠦ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃  ᠳᠣᠯᠤᠭ᠎ᠠ ᠬᠣᠨᠤᠭ ᠲᠤ ᢈᠡᠳᠦᠨ ᠮᠢᠨᠦ᠋ᠲ ᠴᠤ ᠪᠠᠢ᠂ ᢈᠡᠳᠦᠨ ᠴᠠᠭ ᠴᠤ ᠪᠠᠢ ᠲᠠ ᠮᠠᠨ ᠤ᠋ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᠠᠵᠢᠯ ᠤ᠋ᠨ ᠨᠢᢉᠡ ᢈᠡᠰᠡᢉ ᠪᠣᠯᠵᠤ ᠴᠢᠳᠠᠨ᠎ᠠ᠃",
  },
];
