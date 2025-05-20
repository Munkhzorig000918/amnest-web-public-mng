import Image from "next/image";
import Button from "@/components/Button";
import BannerSlider from "@/components/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function HomeDesktop() {
    return (
        <div className="h-full flex gap-10 overflow-x-auto w-auto flex-shrink-0">
          <BannerSlider images={bannerImages} width="90rem" />
          <div className="h-full p-4">
            <div className="h-full flex gap-10">
              <div className="h-full flex flex-col items-center justify-between border border-[#E3E3E3] rounded-xl p-8">
                <h2 className="text-2xl font-bold pl-2" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠦᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠮᠡᠳᠡᢉᠡ</h2>
                <Button text={"ᠪᠦᢈᠦ ᠮᠡᠳᠡᢉᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ"} type="primary" />
              </div>
              <div className="h-full grid grid-cols-2 grid-rows-3 gap-10">
                {newsItems.map((item) => (
                  <div key={item.id} className="w-full h-full flex items-end space-x-4">
                    <h3 className="w-16 h-full" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                      {item.title}
                    </h3>
                    <div className="relative w-[270px] h-full">
                      <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill
                          className="w-full h-full object-cover rounded-xl"
                      />
                      <Button text={"ᠮᠡᠳᠡᢉᠡ"} type="primary" className="absolute top-0 right-0 text-black" />
                    </div>
                    <Button text={"ᠤᠩᠰᠢᠬᠤ"} type="secondary" className="text-black h-48" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-screen w-[20rem] bg-[#F1F1F1] flex items-center justify-center gap-10">
            <p className="text-black font-bold" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ <br />
                ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᢈᠦᠮᠦᠨ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠤᠮ᠃
            </p>
            <p className="text-[#848382] font-bold" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂ ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ <br />
                ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠠᠳᠠᠭ᠃
            </p>
          </div>
          <div className="h-full p-4">
            <div className="h-full grid grid-cols-2 grid-rows-2 gap-[10px] mr-20">
                {aboutItems.map((item) => (
                  <div key={item.id} className="flex border border-[#E3E3E3] rounded-xl p-5 gap-4">
                    <div className="flex flex-col items-center gap-5">
                        <Image src={item.image} alt={item.title} width={50} height={50} />
                        <h4 className="text-black font-bold" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                          {item.title}
                        </h4>
                    </div>
                    <div className="min-w-28 text-black font-bold" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                      {item.body}
                    </div>
                    <div className="flex items-end">
                      <Button type="secondary" text={"ᠪᠢᠳᠡᠨ ᠦ᠋ ᠲᠡᠦᢈᠡ ᠶ᠋ᠢ ᠤᠩᠰᠢᠬᠤ"} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
    )
}

const newsItems = [
  {
    id: 1,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠳ᠋ᠦ ᠡᢉᠡᠯᠢ ᠲᠡᠢ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᢈᠥᠲᠦᠯᠪᠦᠷᠢ ᠪᠠᠶᠠᠨ-ᠥᠯᠦᢉᠡᠢ᠂ ᠬᠣᠪᠳᠤ ᠠᠶᠢᠮᠠᠭ ᠲᠤ ᢈᠡᠷᠡᢉᠵᠢᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃",
    image: "/images/news1.png"
  },
  {
    id: 2,
    title: "ᠲᠠᠨ ᠤ᠋ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠡᠮᠡᠴᠡᠯ ᠲᠠᠢ ᠬᠣᠯᠪᠣᠭᠳᠠᠬᠤ ᠴᠢᠬᠤᠯᠠ ᠲᠡᠮᠡᠴᠡᠯ",
    image: "/images/news1.png"
  },
  {
    id: 3,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠵᠠᠯᠠᠭᠤᠴᠤᠳ ᠤᠨ ᠬᠦᠳᠡᠯᢉᠡᠭᠡᠨ ᠮᠣᠩᢉᠣᠯ ᠤᠯᠤᠰ ᠤᠨ ᠪᠦᢉᠦᠳᠡ ᠶ᠋ᠢᠨ ᠢᠳᠡᠪᢈᠢ ᠣᠷᠣᠯᠴᠠᠭ᠎ᠠ ᠶ᠋ᠢ ᠡᠷᠢᠯᢈᠢᠯᠡᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ",
    image: "/images/news1.png"
  },
  {
    id: 4,
    title: "ᠲᠡᢉᠰᠢ ᠪᠢᠰᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠤ᠋ᠨ ᠡᠰᠡᠷᢉᠦ ᠲᠡᠮᠡᠴᠡᠯ ᠢ ᠳᠡᠮᠵᠢᠬᠦ ᠲᠦᠷᠦ ᠶ᠋ᠢᠨ ᠪᠣᠳᠣᠯᠭ᠎ᠠ ᠶ᠋ᠢ ᠰᠠᠶᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ ᠬᠡᠷᠡᢉᠲᠡᠢ",
    image: "/images/news1.png"
  },
  {
    id: 5,
    title: "ᠰᠠᠶᠢᠨ ᠳᠤᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠣᠯᠤᠨ ᠳᠠᠳᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠤᠨ ᠲᠥᠯᠦᢉᠡ ᠮᠣᠩᢉᠣᠯ ᠳᠠᠬᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠵᠢᠨ ᠠᠵᠢᠯᠯᠠᢉᠠ ᠲᠥᢈᠦᠰᠪᠦᠷᠢ",
    image: "/images/news1.png"
  },
  {
    id: 6,
    title: "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠡᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠲᠤᠷᠠᠯ ᠤᠨ ᠡᠷᢈᠡᠮ ᠰᠢᠨᠵᠢᠯᠡᢉᠡᠨ ᠦ᠋ ᠬᠦᠷᠢᠶᠡᠯᠡᠩ ᠢ᠋ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ",
    image: "/images/news1.png"
  }
];

const aboutItems = [
  {
    id: 1,
    title: "ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?",
    body: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
    image: "/images/about1.png"
  },
  {
    id: 2,
    title: "ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?",
    body: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠢᠱᠢᢉ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠢᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠡᠨᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ  ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠳ᠋ᠦ ᠣᠷᠤᠰᠢᠨ᠎ᠠ᠃",
    image: "/images/about2.png"
  },
  {
    id: 3,
    title: "ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?",
    body: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡᢈᠦ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃",
    image: "/images/about3.jpg"
  },
  {
    id: 4,
    title: "ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?",
    body: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠢᠱᠢᢉ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠢᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠡᠨᠡ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ  ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠳ᠋ᠦ ᠣᠷᠤᠰᠢᠨ᠎ᠠ᠃",
    image: "/images/about4.jpg"
  }
]