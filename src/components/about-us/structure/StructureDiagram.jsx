import Button from "@/components/common/Button";
import Link from "next/link";

export default function StructureDiagram() {
  return (
    <div className="relative">
      <img src="/images/structure-diagram.png" alt="" className="h-full z-0" />
      <div className="flex gap-[202px] absolute top-[260px] left-[330px] w-full h-full">
        <div className="flex flex-col gap-[390px]">
          <Link href="/about-us/structure/control-managers">
            <Button
              text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
              type="secondary"
              className="bg-white hover:bg-gray-100 transition-colors"
            />
          </Link>
          <Link href="/about-us/structure/chapter-members">
            <Button
              text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
              type="secondary"
              className="bg-white hover:bg-gray-100 transition-colors"
            />
          </Link>
        </div>
        <Link href="/about-us/structure/managers">
          <Button
            text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
            type="secondary"
            className="bg-white mt-[245px] hover:bg-gray-100 transition-colors"
          />
        </Link>
        <Link href="/about-us/structure/execute-managers">
          <Button
            text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
            type="secondary"
            className="bg-white mt-[255px] hover:bg-gray-100 transition-colors"
          />
        </Link>
        <div className="flex flex-col gap-[390px]">
          <Link href="/about-us/structure/control-managers">
            <Button
              text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
              type="secondary"
              className="bg-white hover:bg-gray-100 transition-colors"
            />
          </Link>
          <Link href="/about-us/structure/chapter-members">
            <Button
              text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
              type="secondary"
              className="bg-white hover:bg-gray-100 transition-colors"
            />
          </Link>
        </div>
      </div>
      <div className="flex absolute top-[170px] left-[100px] w-full h-full whitespace-nowrap font-bold text-lg">
        <p
          className="text-black mt-[295px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠴᠢᠭᠤᠯᠭᠠᠨ
        </p>
        <div className="flex flex-col ml-[125px]">
          <p
            className="text-black"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
          <p
            className="text-black mt-[320px]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
        </div>
        <p
          className="text-black ml-[225px] mt-[235px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
        </p>
        <p
          className="text-black ml-[220px] mt-[235px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
        </p>
        <div className="flex flex-col ml-[225px] -mt-4">
          <p
            className="text-black"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
          <p
            className="text-black mt-[336px]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
        </div>
      </div>
    </div>
  );
}
