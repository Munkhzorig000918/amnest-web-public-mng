import Button from "@/components/common/Button";

export default function StructureDiagram() {
  return (
    <div className="relative">
      <img src="/images/structure-diagram.png" alt="" className="h-full z-0" />
      <div className="flex gap-[202px] absolute top-[260px] left-[330px] w-full h-full">
        <div className="flex flex-col gap-[390px]">
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
        </div>
        <Button
          text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
          type="secondary"
          className="bg-white mt-[245px]"
        />
        <Button
          text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
          type="secondary"
          className="bg-white mt-[255px]"
        />
        <div className="flex flex-col gap-[390px]">
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
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
