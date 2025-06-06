import Button from "@/components/Button";

export default function StructureDiagram() {
  return (
    <div className="relative">
      <img src="/images/structure-diagram.png" alt="" className="h-full z-0" />
      <div className="flex gap-[302px] absolute top-[410px] left-[485px] w-full h-full">
        <div className="flex flex-col gap-[580px]">
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
        </div>
        <Button
          text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
          type="secondary"
          className="bg-white mt-[340px]"
        />
        <Button
          text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
          type="secondary"
          className="bg-white mt-[355px]"
        />
        <div className="flex flex-col gap-[580px]">
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
          <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="secondary" className="bg-white" />
        </div>
      </div>
      <div className="flex absolute top-[220px] left-[50px] w-full h-full whitespace-nowrap font-bold text-lg">
        <p
          className="text-black mt-[430px] ml-[95px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠴᠢᠭᠤᠯᠭᠠᠨ
        </p>
        <div className="flex flex-col ml-[180px]">
          <p
            className="text-black"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
          <p
            className="text-black mt-[520px]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
        </div>
        <p
          className="text-black ml-[325px] mt-[350px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
        </p>
        <p
          className="text-black ml-[325px] mt-[350px]"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
        </p>
        <div className="flex flex-col ml-[320px]">
          <p
            className="text-black"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᢈᠢᠨᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠵᠥᠪᠡᠯᢉᠡᢉᠡ
          </p>
          <p
            className="text-black mt-[520px]"
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
