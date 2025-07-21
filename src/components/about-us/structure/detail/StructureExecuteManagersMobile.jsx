import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";

export default function StructureExecuteManagersMobile() {
  // Static executive managers data
  const executeManagers = [
    {
      id: 1,
      name: "Б. Алтантуяа",
      position: "Гүйцэтгэх захирал",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын гүйцэтгэх захирлаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна. Өмнө нь Хүний эрхийн үндэсний комисст 2015-2023 онд ажиллаж байсан бөгөөд хүний эрхийн боловсрол, сургалт, судалгааны чиглэлээр ажиллаж байсан туршлагатай.",
      image: "/images/execute-managers/altantuya.png",
    },
    {
      id: 2,
      name: "Г. Амарзаяа",
      position: "Иргэний болон улс төрийн эрхийн кампанит ажлын зохицуулагч",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын иргэний болон улс төрийн эрхийн кампанит ажлын зохицуулагчаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/amarzaya.png",
    },
    {
      id: 3,
      name: "У. Наранцацрал",
      position: "Санхүүгийн ажилтан",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын санхүүгийн ажилтнаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/narantsatsral.png",
    },
    {
      id: 4,
      name: "Б. Оюунбат",
      position: "Дижитал медиа хариуцсан зохицуулагч",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын дижитал медиа хариуцсан зохицуулагчаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/oyunbat.png",
    },
    {
      id: 5,
      name: "Г. Сүхбат",
      position: "Өсөлт, хөгжил хариуцсан зохицуулагч",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын өсөлт, хөгжил хариуцсан зохицуулагчаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/sukhbat.png",
    },
    {
      id: 6,
      name: "Б. Аззаяа",
      position: "Касс, ложистик хариуцсан зохицуулагч",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын касс, ложистик хариуцсан зохицуулагчаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/azzaya.png",
    },
    {
      id: 7,
      name: "Я. Цэцэнзаяа",
      position: "Эдийн засаг, нийгэм соёлын эрхийн кампанит ажлын зохицуулагч",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын эдийн засаг, нийгэм соёлын эрхийн кампанит ажлын зохицуулагчаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/tsetsenzaya.png",
    },
    {
      id: 8,
      name: "Б. Тэргэл",
      position: "Хүний эрхийн боловсрол, сан арвижуулалт хариуцсан зохицуулагч",
      description:
        "Монголын Эмнести Интернэшнл байгууллагын хүний эрхийн боловсрол, сан арвижуулалт хариуцсан зохицуулагчаар 2023 оны 9 дүгээр сараас эхлэн ажиллаж байна.",
      image: "/images/execute-managers/tergel.png",
    },
  ];

  return (
    <div className="w-full block sm:hidden">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} width="90rem" />
      </div>
      <div className="flex flex-col gap-12 p-4 h-full">
        <div className="flex gap-2 max-h-[200px]">
          <h2
            className="text-[10px] font-bold"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠪᠣᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠳᠠᠭᠤ
            ᠬᠣᠭᠤᠯᠠᠢ ᠶᠤᠮ᠃ ᠪᠢᠳᠡ ᠖᠐ ᠭᠠᠷᠤᠢ ᠵᠢᠯ ᠦ᠋ᠨ ᠲᠤᠷᠰᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ᠂
            ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠤᠯᠢ ᠲᠣᠭᠲᠠᠭᠠᠮᠵᠢ᠂ ᠰᠲ᠋ᠠᠨ᠋ᠳᠠᠷᠲ ᠤ᠋ᠨ
            ᠲᠠᠯᠠᠭᠠᠷ ᠨᠠᠶᠢᠳᠠᠪᠤᠷᠢᠲᠠᠢ᠂ ᠦᠨᠡᠨ ᠵᠥᠪ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠨᠡᠶᠢᠲᠡ
            ᢈᠦᠷᢉᠡᠰ ᠢ᠋ᠶᠡᠷ ᠢᠷᠡᢉᠰᠡᠨ᠃
          </h2>
          <p
            className="text-[10px] text-[#848382]"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
            ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ
            ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃
          </p>
        </div>
        <div className="flex gap-2">
          <SectionTitle
            title={"ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠱᠢᠨᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠦᠲᠦᠴᠡ"}
            containerClassName={"bg-[#FFFF00] text-[10px]"}
          />
        </div>

        {/* Executive Managers Section */}
        <div className="flex flex-col gap-4">
          <SectionTitle
            title={"ᠭᠦᠢᠴᠡᠭᠡᠨ ᠲᠣᠪᠴᠢᠭᠠ"}
            containerClassName={"bg-[#FFFF00] text-[10px]"}
          />

          <div className="flex flex-col gap-6 overflow-y-auto max-h-[600px] p-2">
            {executeManagers.map((manager, index) => (
              <div
                key={manager.id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
              >
                {/* Manager Image */}
                <div className="h-48 w-full relative">
                  <Image
                    src={manager.image || "/images/no-image-icon.png"}
                    alt={manager.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Manager Info */}
                <div className="p-4">
                  <h3
                    className="font-bold text-lg mb-2 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "120px",
                      overflow: "hidden",
                    }}
                  >
                    {manager.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600 text-center mb-3"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "60px",
                      overflow: "hidden",
                    }}
                  >
                    {manager.position}
                  </p>
                  <p
                    className="text-xs text-gray-700 line-clamp-4"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    {manager.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
