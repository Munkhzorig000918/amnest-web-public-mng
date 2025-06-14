import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function HistoryMobile() {
  return (
    <div className="w-full min-h-screen bg-white block sm:hidden">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} />
      </div>

      <div className="flex flex-col gap-12 p-4 h-full relative">
        <p
          className="text-[10px] font-bold absolute top-0 mt-3 max-h-[150px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ: ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠲᠡᠦᢈᠡᠨ ᠲᠣᠪᠴᠢᠶ᠎ᠠ
        </p>
        <div className="flex justify-center h-full relative p-2">
          {/* Central vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black transform -translate-x-1/2"></div>

          <div className="flex flex-col h-full gap-8 w-full -mt-3">
            {historyItems.map((h, i) => (
              <div key={i} className="flex relative">
                {/* Milestone dot aligned with date */}
                <div className="absolute left-1/2 top-0 h-2 w-2 bg-black rounded-full transform -translate-x-1/2 z-10"></div>

                {/* Content only on one side - alternating */}
                <div
                  className={`w-full flex -mt-2 ${
                    i % 2 === 0 ? "justify-end pl-8" : "justify-start pr-8"
                  }`}
                >
                  <div className={`w-1/2 flex flex-col gap-2`}>
                    <p className="text-lg">{h.date}</p>
                    <p
                      className="text-[6px] flex-1 h-full w-full min-h-[150px] overflow-x-auto"
                      style={{
                        writingMode: "vertical-lr",
                      }}
                    >
                      {h.desc}
                    </p>
                    {/* Image under the text */}
                    <img src={h.image} className="h-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const historyItems = [
  {
    id: 1,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history1.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 2,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history2.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 3,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history3.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 4,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history4.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 5,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history5.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 6,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history6.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 7,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history7.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 8,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history8.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 9,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history9.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
  {
    id: 10,
    date: "᠑᠙᠙᠔-᠑᠙᠙᠕",
    image: "/images/history10.png",
    desc: "᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃᠑᠙᠗᠗ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠰᠢᠨᠯ ᠨᠢ “ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠦᠨᠳᠦᠰᠦ ᠰᠠᠭᠤᠷᠢ ᠶ᠋ᠢ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠵᠤ”᠂ ᠤᠯᠠᠮ ᠢ᠋ᠶᠠᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠢ᠋ ᠲᠣᠭᠲᠠᠭᠠᠬᠤ ᠳ᠋ᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠨᠣᠪᠧᠯ ᠤ᠋ᠨ ᠡᠩᢈᠡ ᠲᠠᠶᠢᠪᠤᠩ ᠤ᠋ᠨ ᠱᠠᠩᠨᠠᠯ ᢈᠦᠷᠲᠡᠪᠡ᠃  ᠡᠨᠡ ᠨᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠰᠢᠷᠭᠠᠭᠤ ᢈᠥᠳᠡᠯᠮᠦᠷᠢ᠂ ᠲᠤᠭᠤᠰᠢᠲᠠᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠦᠷ᠎ᠡ ᠳ᠋ᠦᠩ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
  },
];
