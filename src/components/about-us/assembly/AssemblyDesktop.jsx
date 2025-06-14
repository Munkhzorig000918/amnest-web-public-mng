import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import AssemblySwiper from "./AssemblySwiper";

export default function ReportDesktop() {
  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-16 p-4 h-full">
        <div className="flex gap-6 max-h-screen">
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠣᠩᠭᠤᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ (ᠮᠡᠶᠢ)-ᠡᠶᠢᠨ “ᠪᠢᠳᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ᠂ ᠪᠢᠳᠡᠨ
            ᠦ᠋ ᠳᠡᠯᠡᢈᠡᠢ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠢᠷᠡᢉᠡᠳᠦᠢ” XXII ᠶᠡᠷᠦᠩᢈᠡᠢ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠒᠐᠒᠓ ᠣᠨ ᠤ᠋ ᠐᠙
            ᠳ᠋ᠦ᠋ᢉᠡᠷ ᠰᠠᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠒᠓- ᠤ᠋ ᠡᠳᠦᠷ ᠠᠮᠵᠢᠯᠲᠠᠲᠠᠢ ᠵᠣᢈᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠯ᠎ᠠ᠃
            ᠴᠢᠭᠤᠯᠭᠠᠨ ᠳ᠋ᠤ ᠤᠯᠤᠰ ᠣᠷᠤᠨ ᠤ᠋ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠡᠴᠡ ᠢᠷᠡᢉᠰᠡᠨ ᠣᠷᠤᠨ ᠨᠤᠲᠤᠭ
            ᠤ᠋ᠨ ᠲᠥᠯᠦᢉᠡᠯᠡᢉᠴᠢᠳ᠂ ᠮᠡᠷᢉᠡᠵᠢᠯ᠂ ᠰᠣᠨᠢᠷᠬᠠᠯ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠳ᠂ ᠵᠠᠯᠠᠭᠤᠴᠤᠳ᠂ ᠪᠦᠰᠡ
            ᠶ᠋ᠢᠨ ᠲᠥᠪ ᠦ᠋ᠨ ᠲᠥᠯᠦᢉᠡᠯᠡᠯ ᠵᠡᠷᢉᠡ ᠣᠯᠠᠨ ᠲᠠᠯᠠᠲᠤ ᠲᠥᠯᠦᢉᠡᠯᠡᠯ ᠣᠷᠤᠯᠴᠠᠯ᠎ᠠ᠃
            ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠠᠷᠤᠭ᠎ᠠ ᠰᠠ‍᠂ᠭᠠᠩᠴᠢᠮᠡᢉ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠢ᠋
            ᠨᠡᢉᠡᢉᠡᠵᠦ ᢈᠡᠯᠡᢉᠰᠡᠨ ᠦᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ “ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ
            ᠦ᠋ᠨ ᠖᠒ ᠵᠢᠯ᠂ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠒᠙ ᠵᠢᠯ ᠦ᠋ᠨ ᠣᠢ ᠪᠣᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠥᠨᠦᠳᠦᠷ ᠡᠮᠨᠧᠰᠲ
            ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠤ᠋ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠨ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢ
            ᠲᠡᠢ ᠪᠡᠷ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠶᠠᠪᠤᠭᠤᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠡᠨᠡ ᢈᠦ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤ᠋ ᠤᠷᠢᠶ᠎ᠠ
            “ᠪᠢᠳᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠳᠡᠯᠡᢈᠡᠢ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠢᠷᠡᢉᠡᠳᠦᠢ” ᢉᠡᠰᠡᠨ ᠰᠡᠳᠦᠪ
            ᠢ᠋ᠶᠡᠷ ᢈᠡᠯᠡᠯᠴᠡᢉᠦᠯᢈᠦ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠨᠦᠪ- ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ
            ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠠᠲᠤᠯᠠᠯ ᠤ᠋ᠨ ᠗᠕ ᠵᠢᠯ᠂ ᠸᠧᠨᠢ ᠶ᠋ᠢᠨ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠤ᠋ᠨ ᠓᠐ ᠵᠢᠯ᠂ ᢈᠦᠮᠦᠨ
            ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠶ᠋ᠢᠨ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠤ᠋ᠨ ᠒᠕ ᠵᠢᠯ ᠦ᠋ᠨ ᠣᠢ ᠪᠣᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃
            ᠡᠨᠡ ᢈᠦ ᠣᠢ ᠶ᠋ᠢᠨ ᠵᠢᠯ ᠦ᠋ᠳ ᠲᠣᢈᠢᠶᠠᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠨᠢ ᠦᠨᠳᠦᠰᠦᠨ ᠦ᠋ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ᠂ ᠲᠣᠭᠲᠠᠪᠤᠷᠢᠲᠠᠢ ᢈᠥᢉᠵᠢᠯ ᠦ᠋ᠨ ᠵᠣᠷᠢᠯᠲᠠ
            ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᢈᠦᠷᠢᠶᠡᠨ ᠳ᠋ᠦ ᠡᠨᠡ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷᢈᠡ ᠲᠥᠷᠦ ᠶ᠋ᠢᠨ ᠡᢉᠦᠷᢉᠡ ᠠᠮᠠᠯᠠᠯᠲᠠ
            ᠶ᠋ᠢ ᠣᠳᠤ ᠳᠠᢈᠢᠨ ᠰᠠᠨᠠᠭᠤᠯᠬᠤ᠂ ᠱᠠᠭᠠᠷᠳᠠᠬᠤ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂
            ᠨᠡᠶᠢᠲᠡᠯᠢᢉ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᠨᠤᠲᠤᠭᠰᠢᠭᠤᠯᠬᠤ᠂ ᠨᠥᠯᠦᢉᠡᠯᠡᠵᠦ
            ᠠᠵᠢᠯᠯᠠᠬᠤ ᠵᠠᠪᠰᠢᠶᠠᠨ ᠢ᠋ ᠪᠢᠳᠡᠨ ᠳ᠋ᠦ ᠣᠯᠭᠤᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ” ᢈᠡᠮᠡᠨ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠪᠠ᠃
            ᠮᠥᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨ ᠦ᠋ᠯ ᠦ᠋ᠨ ᠪᠦᠰᠡ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ
            ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠬᠠᠷᠢᠭᠤᠴᠠᠭᠰᠠᠨ ᠵᠣᢈᠢᠴᠠᠭᠤᠯᠤᠭᠴᠢ ᠰᠣᠮᠢᠶ᠎ᠠ ᠳᠢᠮᠷᠢ “ᠡᠮᠨᠧᠰᠲ᠋ᠢ
            ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠥᠩᢉᠡᠷᠡᢉᠰᠡᠨ ᠵᠢᠯ ᠳ᠋ᠦ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ
            ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠢ᠋ᠶᠠᠷ ᠢ᠋ᠶᠠᠨ ᠔ ᠰᠠᠶ᠎ᠠ ᢈᠦᠨᠳᠦ ᢈᠦᠷᠴᠦ ᠠᠵᠢᠯᠯᠠᠭᠰᠠᠨ᠃ ᠡᢉᠦᠨ ᠳ᠋ᠦ
            ᠮᠡᠢ ᠴᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ᠃ ᠢᠷᠡᢈᠦ ᠵᠢᠯ ᠦ᠋ᠳ ᠲᠦ ᠬᠠᠮᠲᠤ ᠳ᠋ᠠᠭᠠᠨ
            ᠢᠯᠡᢉᠦᠦ ᠶᠡᢈᠡ ᢈᠦᠨᠳᠦ ᢈᠦᠷᠴᠦ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠪᠠᠨ ᠠᠮᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ” ᢈᠡᠮᠡᠨ
            ᠮᠡᠨᠳᠦᠴᠢᠯᠡᢉᠡ ᠳᠡᠪᠰᠢᢉᠦᠯᠦᠯ᠎ᠡ᠃ ᠮᠥᠨ ᠨᠢᢉᠡᠳᠦᢉᠰᠡᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ
            ᠶ᠋ᠢᠨ ᠮᠣᠩᠭᠣᠯ ᠳᠠᢈᠢ ᠰᠠᠭᠤᠷᠢᠨ ᠵᠣᢈᠢᠴᠠᠭᠤᠯᠤᠭᠴᠢ ᠲᠠᠫᠠᠨ ᠮᠢᠰᠢᠷᠠ ᠢᠯᠡᢉᠡᠯᠲᠡ ᠳ᠋ᠡᢉᠡᠨ
            “ᠪᠢ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠨᠡᠷ᠎ᠡ ᢈᠦᠨᠳᠦ ᠲᠡᠢ᠂ᠨᠥᠯᠦᢉᠡ
            ᠪᠦᢈᠦᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᠨᠢᢉᠡ ᠪᠣᠯᠬᠤ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠲᠡᠢ
            ᠬᠠᠮᠲᠤᠷᠠᠨ ᠠᠵᠢᠯᠯᠠᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᠪᠠᠬᠠᠷᠬᠠᠵᠤ᠂ ᠲᠠᠯᠠᠷᠬᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃
            ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ ᠳ᠋ᠠᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠰᠠᠭᠤᠳᠠᠯ᠂ ᠢᠯᠠᠩᠭᠤᠶ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋
            ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ᠂ ᠦᠵᠡᠯ ᠪᠣᠳᠤᠯ ᠢ᠋ᠶᠠᠨ ᠢᠯᠡᠷᢈᠡᠶᠢᠯᠡᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ
            ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᢈᠥᠳᠡᠯᠮᠦᠷᠢᠯᠡᢈᠦ ᠪᠣᠯᠤᠨ ᠣᠷᠤᠨ ᠪᠠᠶᠢᠷᠢ ᠲᠠᠢ ᠪᠠᠶᠢᠬᠤ ᠡᠷᢈᠡ᠂ ᢈᠦᠮᠦᠨ
            ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ᠂ ᠡᠷᠡᢉᠦᠳᠡᠨ ᠰᠢᢉᠦᢈᠦ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠵᠦᠢ ᠪᠤᠰᠤ ᠬᠠᠷᠢᠴᠠᠬᠤ
            ᠵᠡᠷᢉᠡ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ ᠲᠠ ᠪᠦᢈᠦᠨ ᠮᠠᠩᠯᠠᠶᠢᠯᠠᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠶ᠋ᠢ ᠪᠢᠳᠡ ᠦᠷᢉᠦᠯᠵᠢ
            ᠦᠨᠡᠯᠡᢉᠰᠡᢉᠡᠷ ᠢᠷᠡᢉᠰᠡᠨ᠃ ᠪᠢ ᠲᠠ ᠪᠦᢈᠦᠨ ᠦ᠋ ᠠᠯᠤᠰ ᠤ᠋ᠨ ᠬᠠᠷᠠᠭ᠎ᠠ᠂ ᠡᠷᢈᠢᠮ
            ᠵᠣᠷᠢᠯᠭ᠎ᠠ᠂ ᠦᠨᠡᠲᠦ ᠵᠦᠢᠯᠡᠰ᠂ ᠣᠯᠤᠯᠲᠠ ᠠᠮᠵᠢᠯᠲᠠ᠂ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ᠂ ᠰᠣᠷᠢᠯᠲᠠ
            ᠪᠡᠷᢈᠡᠰᠢᠶᠡᠯ ᠢ᠋ ᢈᠡᠷᢈᠢᠨ ᠳᠠᠪᠠᠨ ᠲᠤᠭᠤᠯᠵᠤ ᠪᠠᠶᠢᠭ᠎ᠠ ᠶ᠋ᠢ ᠲᠠᠨᠢ ᠬᠠᠷᠠᠭᠠᠳ
            ᠪᠢᠰᠢᠷᠡᠵᠦ᠂ ᠦᠨᠡᠯᠡᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ “ᠪᠢᠳᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠳᠡᠯᠡᢈᠡᠢ᠂ ᠪᠢᠳᠡᠨ
            ᠦ᠋ ᠢᠷᠡᢉᠡᠳᠦᠢ” ᠰᠡᠳᠦᠪ ᠢ᠋ᠶᠡᠷ ᠲᠠ ᠪᠦᢈᠦᠨ ᢈᠡᠯᠡᠯᠴᠡᢈᠦ ᢉᠡᠵᠦ ᠪᠠᠶᠢᠭ᠎ᠠ ᠶ᠋ᠢ ᠪᠢ ᠡᠨᠡ
            ᠴᠠᠭ ᠦᠶ᠎ᠡ ᠳ᠋ᠦ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠪᠣᠯᠤᠭᠠᠳ ᠦᠨᠳᠦᠰᠦᠨ ᠦ᠋ ᠨᠥᢈᠦᠴᠡᠯ ᠪᠠᠶᠢᠳᠠᠯ ᠳ᠋ᠤ
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠮᠥᠷ ᠦ᠋ᠨ ᢈᠦᠲᠦᠯᠪᠦᠷᠢ ᠶ᠋ᠢᠨ
          </p>
          <img
            src="/images/assembly-image1.png"
            className="w-[247px] h-[350px]"
          />
        </div>
        <AssemblySwiper />
        <div className="flex flex-col gap-5 max-h-screen">
          <img
            src="/images/assembly-image2.png"
            className="w-[508px] h-[286px]"
          />
          <div className="flex gap-8 h-full">
            <p
              className="text-base"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠣᠩᠭᠤᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ (ᠮᠡᠶᠢ)-ᠡᠶᠢᠨ “ᠪᠢᠳᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ᠂ ᠪᠢᠳᠡᠨ
              ᠦ᠋ ᠳᠡᠯᠡᢈᠡᠢ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠢᠷᠡᢉᠡᠳᠦᠢ” XXII ᠶᠡᠷᠦᠩᢈᠡᠢ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠒᠐᠒᠓ ᠣᠨ ᠤ᠋
              ᠐᠙ ᠳ᠋ᠦ᠋ᢉᠡᠷ ᠰᠠᠷ᠎ᠠ ᠶ᠋ᠢᠨ ᠒᠓- ᠤ᠋ ᠡᠳᠦᠷ ᠠᠮᠵᠢᠯᠲᠠᠲᠠᠢ ᠵᠣᢈᠢᠶᠠᠨ
              ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠯ᠎ᠠ᠃ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠳ᠋ᠤ ᠤᠯᠤᠰ ᠣᠷᠤᠨ ᠤ᠋ ᠥᠨᠴᠦᢉ ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠡᠴᠡ
              ᠢᠷᠡᢉᠰᠡᠨ ᠣᠷᠤᠨ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᠲᠥᠯᠦᢉᠡᠯᠡᢉᠴᠢᠳ᠂ ᠮᠡᠷᢉᠡᠵᠢᠯ᠂ ᠰᠣᠨᠢᠷᠬᠠᠯ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ
              ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠨ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢ ᠲᠡᠢ ᠪᠡᠷ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠶᠠᠪᠤᠭᠤᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃
              ᠡᠨᠡ ᢈᠦ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤ᠋ ᠤᠷᠢᠶ᠎ᠠ “ᠪᠢᠳᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠳᠡᠯᠡᢈᠡᠢ᠂ ᠪᠢᠳᠡᠨ
              ᠦ᠋ ᠢᠷᠡᢉᠡᠳᠦᠢ” ᢉᠡᠰᠡᠨ ᠰᠡᠳᠦᠪ ᠢ᠋ᠶᠡᠷ ᢈᠡᠯᠡᠯᠴᠡᢉᠦᠯᢈᠦ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠨᠦᠪ- ᠤ᠋ᠨ
              ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠪᠠᠲᠤᠯᠠᠯ ᠤ᠋ᠨ ᠗᠕ ᠵᠢᠯ᠂ ᠸᠧᠨᠢ ᠶ᠋ᠢᠨ
              ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠤ᠋ᠨ ᠓᠐ ᠵᠢᠯ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠶ᠋ᠢᠨ ᠲᠤᠩᠬᠠᠭᠯᠠᠯ ᠤ᠋ᠨ
              ᠒᠕ ᠵᠢᠯ ᠦ᠋ᠨ ᠣᠢ ᠪᠣᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠡᠨᠡ ᢈᠦ ᠣᠢ ᠶ᠋ᠢᠨ ᠵᠢᠯ ᠦ᠋ᠳ ᠲᠣᢈᠢᠶᠠᠵᠤ
              ᠪᠠᠶᠢᠭ᠎ᠠ ᠨᠢ ᠦᠨᠳᠦᠰᠦᠨ ᠦ᠋ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠦᠢᠯᠡ
              ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ᠂ ᠲᠣᠭᠲᠠᠪᠤᠷᠢᠲᠠᠢ ᢈᠥᢉᠵᠢᠯ ᠦ᠋ᠨ ᠵᠣᠷᠢᠯᠲᠠ ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᢈᠦᠷᠢᠶᠡᠨ ᠳ᠋ᠦ
              ᠡᠨᠡ ᠴᠢᢉᠯᠡᠯ ᠢ᠋ᠶᠡᠷᢈᠡ ᠲᠥᠷᠦ ᠶ᠋ᠢᠨ ᠡᢉᠦᠷᢉᠡ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠶ᠋ᠢ ᠣᠳᠤ ᠳᠠᢈᠢᠨ
              ᠰᠠᠨᠠᠭᠤᠯᠬᠤ᠂ ᠱᠠᠭᠠᠷᠳᠠᠬᠤ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠣᠶᠤᠯ᠂ ᠨᠡᠶᠢᠲᠡᠯᠢᢉ ᢈᠡᠮ
              ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᠳᠡᠯᢉᠡᠷᠡᢉᠦᠯᢈᠦ᠂ ᠨᠤᠲᠤᠭᠰᠢᠭᠤᠯᠬᠤ᠂ ᠨᠥᠯᠦᢉᠡᠯᠡᠵᠦ ᠠᠵᠢᠯᠯᠠᠬᠤ
              ᠵᠠᠪᠰᠢᠶᠠᠨ ᠢ᠋ ᠪᠢᠳᠡᠨ ᠳ᠋ᠦ ᠣᠯᠭᠤᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ” ᢈᠡᠮᠡᠨ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠪᠠ᠃ ᠮᠥᠨ
              ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨ ᠦ᠋ᠯ ᠦ᠋ᠨ ᠪᠦᠰᠡ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ
              ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠬᠠᠷᠢᠭᠤᠴᠠᠭᠰᠠᠨ ᠵᠣᢈᠢᠴᠠᠭᠤᠯᠤᠭᠴᠢ ᠰᠣᠮᠢᠶ᠎ᠠ ᠳᠢᠮᠷᠢ “ᠡᠮᠨᠧᠰᠲ᠋ᠢ
              ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠥᠩᢉᠡᠷᠡᢉᠰᠡᠨ ᠵᠢᠯ ᠳ᠋ᠦ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ
              ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠢ᠋ᠶᠠᠷ ᠢ᠋ᠶᠠᠨ ᠔ ᠰᠠᠶ᠎ᠠ ᢈᠦᠨᠳᠦ ᢈᠦᠷᠴᠦ ᠠᠵᠢᠯᠯᠠᠭᠰᠠᠨ᠃ ᠡᢉᠦᠨ
              ᠳ᠋ᠦ ᠮᠡᠢ ᠴᠤ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠰᠠᠨ᠃ ᠢᠷᠡᢈᠦ ᠵᠢᠯ ᠦ᠋ᠳ ᠲᠦ ᠬᠠᠮᠲᠤ
              ᠳ᠋ᠠᠭᠠᠨ ᠢᠯᠡᢉᠦᠦ ᠶᠡᢈᠡ
            </p>
            <p
              className="text-base"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠦ᠋ᠳ᠂ ᠵᠠᠯᠠᠭᠤᠴᠤᠳ᠂ ᠪᠦᠰᠡ ᠶ᠋ᠢᠨ ᠲᠥᠪ ᠦ᠋ᠨ ᠲᠥᠯᠦᢉᠡᠯᠡᠯ ᠵᠡᠷᢉᠡ ᠣᠯᠠᠨ ᠲᠠᠯᠠᠲᠤ
              ᠲᠥᠯᠦᢉᠡᠯᠡᠯ ᠣᠷᠤᠯᠴᠠᠯ᠎ᠠ᠃ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠦ᠋ᠨ ᠳᠠᠷᠤᠭ᠎ᠠ
              ᠰᠠ‍᠂ᠭᠠᠩᠴᠢᠮᠡᢉ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠢ᠋ ᠨᠡᢉᠡᢉᠡᠵᠦ ᢈᠡᠯᠡᢉᠰᠡᠨ ᠦᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ “ᠣᠯᠠᠨ ᠤᠯᠤᠰ
              ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠦ᠋ᠨ ᠖᠒ ᠵᠢᠯ᠂ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠒᠙ ᠵᠢᠯ ᠦ᠋ᠨ ᠣᠢ
              ᠪᠣᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠥᠨᠦᠳᠦᠷ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠤ᠋ ᠑᠐
              ᠰᠠᠶ᠋ᠢ ᠭᠠᠷᠤᠢ ᢉᠡᠰᠢᢉᠦᠨ᠂ ᠳᠡᠮᠵᠢᢉᠴᠢ ᠲᠡᠢ ᠪᠡᠷ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠶᠠᠪᠤᠭᠤᠯᠵᠤ
              ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠡᠨᠡ ᢈᠦ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤ᠋ ᠤᠷᠢᠶ᠎ᠠ “ᠪᠢᠳᠡᠨ ᠦ᠋ ᠡᠷᢈᠡ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋
              ᠳᠡᠯᠡᢈᠡᠢ᠂ ᠪᠢᠳᠡᠨ ᠦ᠋ ᠢᠷᠡᢉᠡᠳᠦᠢ” ᢉᠡᠰᠡᠨ ᠰᠡᠳᠦᠪ ᠢ᠋ᠶᠡᠷ ᢈᠡᠯᠡᠯᠴᠡᢉᠦᠯᢈᠦ
              ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠨᠦᠪ- ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠦᢉᠡᠮᠡᠯ ᠤᠯᠤᠰ ᠣᠷᠤᠨ ᠤ᠋ ᠥᠨᠴᠦᢉ
              ᠪᠤᠯᠤᠩ ᠪᠦᠷᠢ ᠡᠴᠡ ᠢᠷᠡᢉᠰᠡᠨ ᠣᠷᠤᠨ ᠨᠤᠲᠤᠭ ᠤ᠋ᠨ ᠲᠥᠯᠦᢉᠡᠯᠡᢉᠴᠢᠳ᠂ ᠮᠡᠷᢉᠡᠵᠢᠯ᠂
              ᠰᠣᠨᠢᠷᠬᠠᠯ ᠤ᠋ᠨ ᠪᠦᠯᠦᢉ ᠦ᠋ᠳ᠂ ᠵᠠᠯᠠᠭᠤᠴᠤᠳ᠂ ᠪᠦᠰᠡ ᠶ᠋ᠢᠨ ᠲᠥᠪ ᠦ᠋ᠨ ᠲᠥᠯᠦᢉᠡᠯᠡᠯ
              ᠵᠡᠷᢉᠡ ᠣᠯᠠᠨ ᠲᠠᠯᠠᠲᠤ ᠲᠥᠯᠦᢉᠡᠯᠡᠯ ᠣᠷᠤᠯᠴᠠᠯ᠎ᠠ᠃ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ
              ᠦ᠋ᠨ ᠳᠠᠷᠤᠭ᠎ᠠ ᠰᠠ‍᠂ᠭᠠᠩᠴᠢᠮᠡᢉ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠢ᠋ ᠨᠡᢉᠡᢉᠡᠵᠦ ᢈᠡᠯᠡᢉᠰᠡᠨ ᠦᢉᠡᠨ ᠳ᠋ᠦ
              ᠪᠡᠨ “ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ ᠦ᠋ᠨ ᠖᠒ ᠵᠢᠯ᠂ ᠮᠡᠶᠢ-ᠡᠶᠢᠨ ᠒᠙
              ᠵᠢᠯ ᠦ᠋ᠨ ᠣᠢ ᠪᠣᠯᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ ᠥᠨᠦᠳᠦᠷ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠑᠕᠐ ᠭᠠᠷᠤᠢ
              ᠣᠷᠤᠨ ᠤ᠋ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᢈᠦᠨᠳᠦ ᢈᠦᠷᠴᠦ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠪᠠᠨ ᠠᠮᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ” ᢈᠡᠮᠡᠨ
              ᠮᠡᠨᠳᠦᠴᠢᠯᠡᢉᠡ ᠳᠡᠪᠰᠢᢉᠦᠯᠦᠯ᠎ᠡ᠃
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const reportItems = [
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
];
