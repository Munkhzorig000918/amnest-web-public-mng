import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import Link from "next/link";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="h-full min-w-[100px] inline-flex flex-col justify-between bg-white border-r border-[#E3E3E3] z-20">
      <div className="flex flex-col items-center">
        <Link href="/" className="py-4 px-2">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} className="object-contain" />
        </Link>
        <div className="mt-4 flex flex-col gap-[10px] items-center">
          <div className="p-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors relative" onClick={toggleDropdown}>
            <Image src="/images/menu1.png" alt="menu1" width={25} height={25} />
            {showDropdown && (
              <>
                <div className="fixed inset-0 z-20 bg-black/5" onClick={toggleDropdown}></div>
                <div className="absolute left-[78px] top-[-30px] bg-white rounded-xl p-6 w-auto z-30 border border-[#E3E3E3]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-10">
                      <div className="flex flex-col items-center cursor-pointer group">
                        <p className="text-black font-bold group-hover:text-[#444] transition-colors" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                          ᠪᠢᠳᠡ ᢈᠡᠨ ᠪᠤᠢ?
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group">
                        <p className="text-black font-bold group-hover:text-[#444] transition-colors" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                          ᠪᠢᠳᠡ ᠶᠠᠭᠤ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group">
                        <p className="text-black font-bold group-hover:text-[#444] transition-colors" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                          ᠪᠢᠳᠡᠨ ᠦ᠋ ᠲᠡᠦᢈᠡ
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group">
                        <p className="text-black font-bold group-hover:text-[#444] transition-colors" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                          ᠪᠢᠳᠡᠨ ᠦ᠋ ᠠᠵᠢᠯ
                        </p>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group">
                        <p className="text-black font-bold group-hover:text-[#444] transition-colors" style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
                          ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <Link href="/campaign">
            <div className="p-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors">
              <Image src="/images/menu2.png" alt="menu2" width={25} height={25} />
            </div>
          </Link>
          <div className="p-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors">
            <Image src="/images/menu3.png" alt="menu3" width={25} height={25} />
          </div>
          <div className="p-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors">
            <Image src="/images/menu4.png" alt="menu4" width={25} height={25} />
          </div>
          <div className="p-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors">
            <Image src="/images/menu5.png" alt="menu5" width={25} height={25} />
          </div>
          <div className="p-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors">
            <Image src="/images/menu6.png" alt="menu6" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-5 gap-5">
        <button className="text-base text-black px-3 py-2 rounded border border-[#E3E3E3] hover:bg-gray-50 transition-colors">
          MNG
        </button>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#432C2C] to-transparent via-50%" />
        <button className="p-4 hover:bg-gray-100 rounded-md transition-colors">
          <Icon icon={"lucide:search"} fontSize={25} />  
        </button>
        <Button text={"ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠳᠡᠯᢉᠡᢉᠦᠷ"} type="primary" />
      </div>
    </div>
  );
}