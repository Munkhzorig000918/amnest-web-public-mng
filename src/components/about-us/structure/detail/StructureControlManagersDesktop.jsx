import Image from "next/image";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";

export default function StructureControlManagersDesktop() {
  // Static control managers data
  const controlManagers = [
    {
      id: 1,
      name: "П. Тодрол",
      position: "Хяналтын зөвлөлийн дарга",
      description:
        "Монос хүнс ХК-ийн Үйл ажиллагаа хариуцсан дэд захиралаар ажилладаг. Эмнести Интернэшлийн гишүүнээр 2001 онд элсэж байсан. Улмаар 2005 оны IYC-д төлөөлөгчөөр оролцож Монголын Эмнести Интернэшнлийн удирдах зөвлөлийн залуучуудын асуудал хариуцсан гишүүнээр сонгогдож байсан. Хүний эрхийн боловсрол олгох, зэр зэвсгийн хяналтыг сайжруулах, хүний эрхийн тэмцэгчдийг хамгаалах зэрэг кампанит ажилд идэвхтэй оролцож ирсэн.",
      image: "/images/control-managers/todrol.png",
    },
    {
      id: 2,
      name: "С. Нажидмаа",
      position: "Хяналтын зөвлөлийн гишүүн",
      description:
        "Нийслэлийн 33-р сургуульд түүх-нийгмийн багшаар ажилладаг. Эмнестид 2003 оноос багш нарын бүлгийн гишүүн, 2020 оноос эхлэн багш нарын бүлгийн ахлагчаар ажиллаж байна. 2003 оноос хойш багшаар ажиллаж эхлээд эрх зүй, хүний эрхийн ойлголтуудыг заах болсноос үүдэн Эмнестигийн номын сангаар үйлчлүүлж байгаад гишүүнээр элсэн орсон. Олон улсын сайн дурын өдрийн үйл ажиллагаа, Хүүхдийн хорих анги, эмэгтэйчүүдийн хорих анги, орон нутгийн болон нийслэлийн ЕБС зэрэгт хүний эрхийн чиглэлээр сургалтууд орж байсан туршлагатай.",
      image: "/images/control-managers/najidmaa.png",
    },
    {
      id: 3,
      name: "М. Чимгээ",
      position: "Хяналтын зөвлөлийн гишүүн",
      description:
        "Нийгмийн ажилтан мэргэжилтэй, магистр. 2011 оноос Эмнестид Архангайн бүлэгт гишүүнээр элсэж өнөөг хүртэл хугацаанд бүлгийн гишүүн, ахлагчаар тус тус ажиллаж байна. Хүүхдийн эрх, хамгааллын чиглэлээр орон нутгийн нийгмийн ажлын мэргэжилтнүүд болон оюутнууд, сургууль, цэцэрлэгийн багш нарт чиглэсэн сургалт, нөлөөлөл, төсөлт ажлуудыг төрийн болон төрийн бус байгууллагуудтай хамтран зохион байгуулан ажилладаг. Сүүлийн жилүүдэд зорилтот сум, багууд руу чиглэн орон нутгийн хүүхэд хамгааллын нэгжүүд болох хамтарсан багуудад сургалт нөлөөлөл, хүүхдийг зодож шийтгэхийн эсрэг компанит болон судалгааны ажлууд дээр ажиллахын зэрэгцээ кейс шийдвэрлэлт дээр арга зүйн зөвлөгөө өгч, хамтран ажиллаж байна.",
      image: "/images/control-managers/chimge.png",
    },
  ];

  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen sm:overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="flex gap-12 p-4 h-full">
        <div className="flex gap-10">
          <h2
            className="text-2xl font-bold"
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
            className="text-sm"
            style={{
              writingMode: "vertical-lr",
            }}
          >
            ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
            ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ
            ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃
          </p>
        </div>
        <SectionTitle
          title={"ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠱᠢᠨᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᠪᠦᠲᠦᠴᠡ"}
          containerClassName={"bg-[#FFFF00] text-2xl"}
        />

        {/* Control Managers Section */}
        <div className="flex flex-col gap-4 min-w-[1000px]">
          <SectionTitle
            title={"ᠬᠢᠶᠠᠨᠠᠯᠲᠠᠨ ᠵᠥᠪᠯᠡᠨ"}
            containerClassName={"bg-[#FFFF00] text-xl"}
          />

          <div className="flex flex-col gap-8 overflow-y-auto max-h-[800px] p-4">
            {controlManagers.map((manager, index) => (
              <div
                key={manager.id}
                className={`grid grid-cols-3 gap-8 items-center ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Manager Image and Info */}
                <div className="flex flex-col items-center">
                  <div className="relative w-60 h-60 mb-4">
                    <Image
                      src={manager.image || "/images/no-image-icon.png"}
                      alt={manager.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3
                    className="font-bold text-xl mb-2 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {manager.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {manager.position}
                  </p>
                </div>

                {/* Manager Description */}
                <div className="col-span-2">
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                      height: "400px",
                      overflow: "hidden",
                    }}
                  >
                    {manager.description}
                  </p>
                </div>

                {/* Divider */}
                {index < controlManagers.length - 1 && (
                  <div className="col-span-3 border-t-2 border-dashed border-gray-300 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
