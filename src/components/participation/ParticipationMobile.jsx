import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function ParticipationMobile() {
  return (
    <div className="h-full w-full block sm:hidden">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="h-full p-4 flex flex-col gap-7">
        <div className="h-full flex gap-2 max-h-[150px]">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠵᠠᢈᠢᠳᠠᠯ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠵᠢᠷᠤᠵᠤ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠰᠠᠶᠢᠨ ᠳᠤᠷ
            ᠠ᠋ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠠ᠋ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᢉᠡᠰᠢᢉᠦᠨ ᠪᠣᠯᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃
          </h2>
          <p
            className="text-[10px] overflow-x-auto"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠥᠨᠦᠳᠦᠷ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠠᠪᠴᠤ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ
            ᠲᠥᠯᠦᢉᠡ ᠬᠠᠮᠲᠤ ᠳ᠋ᠤ ᠪᠠᠨ ᠵᠣᠭᠰᠤᠬᠤ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠦ᠋ ᠨᠢᢉᠡ ᢈᠡᠰᠡᢉ
            ᠪᠣᠯᠤᠭᠠᠷᠠᠢ᠃
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {changeitems.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 w-full max-h-[150px] overflow-x-auto"
            >
              <h3
                className="text-xs font-bold"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {item.title}
              </h3>
              <img
                src="/images/dummy-image.png"
                alt="dummy"
                className="aspect-square w-full max-h-[150px] max-w-[150px] min-h-[150px] min-w-[150px] rounded-lg"
              />
              <p
                className="text-[10px]"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {item.description}
              </p>
              <Button
                type="primary"
                text={"ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ ᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                className="max-h-[150px]"
              />
            </div>
          ))}
        </div>
        <div className="h-[1px] w-full bg-black"></div>
        <div className="flex flex-col gap-2 w-full">
          {changeitems.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 w-full max-h-[150px] overflow-x-auto"
            >
              <h3
                className="text-xs font-bold"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {item.title}
              </h3>
              <img
                src="/images/dummy-image.png"
                alt="dummy"
                className="aspect-square w-full max-h-[150px] max-w-[150px] min-h-[150px] min-w-[150px] rounded-lg"
              />
              <p
                className="text-[10px]"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {item.description}
              </p>
              <Button
                type="primary"
                text={"ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ ᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                className="max-h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const changeitems = [
  {
    id: 1,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
    description:
      "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃  ᢈᠡᠷᠪᠡ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠪᠥᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ ᠪᠣᠯ ᠡᠨᠳᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᢉᠡᠷᠡᠢ᠃",
  },
  {
    id: 2,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
    description:
      "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃  ᢈᠡᠷᠪᠡ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠪᠥᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ ᠪᠣᠯ ᠡᠨᠳᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᢉᠡᠷᠡᠢ᠃",
  },
  {
    id: 3,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
    description:
      "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃  ᢈᠡᠷᠪᠡ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠪᠥᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ ᠪᠣᠯ ᠡᠨᠳᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᢉᠡᠷᠡᠢ᠃",
  },
];
