import Layout from "@/components/layout/Layout";
import BannerSlider from "@/components/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import Image from "next/image";
import Button from "@/components/Button";

export default function Campaign() {
    return (
        <Layout>
            <div className="h-full flex gap-10 overflow-x-auto w-auto flex-shrink-0">
                <BannerSlider images={bannerImages} width="90rem" />
                <div className="h-full p-4">
                    <div className="h-full flex gap-10">
                        <div className="h-full flex flex-col items-center justify-between border border-[#E3E3E3] rounded-xl p-8">
                            <h2 className="text-2xl font-bold pl-2" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠦᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠮᠡᠳᠡᢉᠡ</h2>
                        </div>
                        <div className="h-full grid grid-cols-1 grid-rows-3 gap-5">
                            {[1,2,3].map((item) => (
                                <div key={item} className="w-full h-full flex items-start space-x-4">
                                    <h3 className="text-2xl font-bold" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                                        ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠤ᠋ᠳ
                                    </h3>
                                    <p className="w-40 h-full text-sm" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                                        ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ 
                                        ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ 
                                        ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ 
                                        ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ 
                                        ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-full p-4 mr-20">
                    <div className="h-full flex gap-10">
                        <div className="h-full flex flex-col items-center justify-between border border-[#E3E3E3] rounded-xl p-8">
                            <h2 className="text-2xl font-bold pl-2" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠦᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠮᠡᠳᠡᢉᠡ</h2>
                        </div>
                        <div className="h-full grid grid-cols-5 grid-rows-3 gap-[10px]">
                            {workItems.map((item) => (
                                <div key={item.id} className="w-40 h-full flex flex-col items-center justify-center gap-5 border border-black p-4">
                                    <Image src={item.image} alt={"item"} width={60} height={60} />
                                    <p className="text-black font-bold pl-2" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const workItems = [
    {
        id: 1,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 2,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 3,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 4,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 5,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 6,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 7,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 8,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 9,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 10,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 11,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
    {
        id: 12,
        title: "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: "/images/about4.jpg"
    },
]