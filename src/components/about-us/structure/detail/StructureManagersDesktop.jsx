import Image from "next/image";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";

export default function StructureManagersDesktop() {
  // Static managers data
  const managers = [
    {
      id: 1,
      name: "Р. Очирбал",
      position: "Удирдах зөвлөлийн дарга",
      description:
        "Отгонтэнгэр их сургуулийн Хууль зүйн сургуульд багшилдаг. Хуульч, өмгөөлөгчөөр ажилладаг. Эмнестигийн үйл ажиллагаанд сүүлийн 10 гаруй жилийн хугацаанд идэвхтэй оролцож, Хуульчдын бүлгийн ахлагч, 2019 оноос Удирдах зөвлөлийн гишүүн, 2023 оны 9 дүгээр сараас Удирдах зөвлөлийн сонгогдон даргаар ажиллаж байна. Хүний эрх, эрх чөлөөний асуудал ялангуяа шинэ тутам үүсэж байгаа хүний эрхийн асуудлууд тухайлбал, уур амьсгалын өөрчлөлт ба хүний эрх, Бизнес ба хүний эрх, Технологи ба хүний эрх, Онц байдал ба Хүний эрх, Татвар ба Хүний эрх, Ирээдүй хойчийн шударга ёс зэрэг асуудалд Монголын Эмнести Интернэшнл бодлогын байр сууринаас хандаж үйл ажиллагаа явуулахын тулд дотоодын чадамж, гишүүдийнхээ мэдлэг, ойлголтыг нэмэгдүүлэн, сургалт, судалгааны салбарт онцгойлон анхаарах шаардлагатай хэмээн үзэж дээрх салбарт бодитой хувь нэмэр оруулахыг хичээн ажиллаж байна.",
      image: "/images/managers/ochirbal.png",
    },
    {
      id: 2,
      name: "Б. Болдсүрэн",
      position: "Удирдах зөвлөлийн дэд дарга",
      description:
        "МУИС-ийн Боловсрол судлалын тэнхимд багшилдаг бөгөөд ирээдүйд багш болох оюутнуудтай голлон ажилладагийн хувьд хүний эрхийн агуулгыг Багш боловсролын хөтөлбөрийн агуулгад нэгтгэх чиглэлээр манлайлдаг.",
      image: "/images/managers/boldsuren.png",
    },
    {
      id: 3,
      name: "Б. Мөнхжавхлан",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "МУИС-ийн философи, шашин судлалын тэнхимийн багш, доктор. 2003 оноос хойш МЭИ-д элсэж, эмэгтэйчүүдийн бүлгийн гишүүн, Хяналтын зөвлөлийн даргаар ажиллаж байсан.",
      image: "/images/managers/munkhjavhlan.png",
    },
    {
      id: 4,
      name: "Б. Баялагмаа",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "МУИС-ийн Хууль зүйн сургуульд багшаар ажилладаг. Өмгөөллийн Фиделитас партнерс ХХН-ийн партнер, өмгөөлөгч. Эмнестид 2017 оноос Хуульчдын бүлгийн гишүүнээр, 2021 оноос Удирдлах зөвлөлийн гишүүнээр ажиллаж байна.",
      image: "/images/managers/baylagmaa.png",
    },
    {
      id: 5,
      name: "Д. Оюунномин",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "ШУТИС-ийн багш, Сэтгэл зүйч, Доктарант. МЭИ байгууллагын гишүүн болоод 20 жил болж байгаа бөгөөд энэ хугацаанд хорихын боловсрол төсөл, хүний эрхийн боловсрол, эрүүдэн шүүхийн эсрэг ажил, цаазаар авах ялын эсрэг кино хэлэлцүүлэг гээд хүний эрхийн боловсролтой холбоотой бүхий л төсөл хөтөлбөрүүдэд ажиллаж байсан.",
      image: "/images/managers/oyunnomin.png",
    },
    {
      id: 6,
      name: "Б. Бадрал",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "Монгол Улсын Их сургуулийн хууль зүйн сургуулийн магистрант, эрх зүйч мэргэжилтэй. Эмнестид 2021 оноос удирдах зөвлөлийн гишүүнээр ажиллаж байна.",
      image: "/images/managers/badral.png",
    },
    {
      id: 7,
      name: "Б. Хүслэн",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "МСС ХХК-д Ахлах аудитороор ажилладаг. Эмнестид 2017 оноос Залуучуудын бүлгийн гишүүн, Сайн дурын ажилтнаар ажиллаж байна.",
      image: "/images/managers/khuslen.png",
    },
    {
      id: 8,
      name: "М. Нандинцэцэг",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "2011 оноос 2013 он хүртэл Хорихоос гарсан хүмүүсийг нийгэмшүүлэх чиглэлээр үйл ажиллагаа явуулдаг Германы Шайдевег нийгэмлэг, Хүүхдийн эрх хамгаалалын чиглэлээр Гүүд Нэйборс ОУТББ-ийн ХИТХ төслийн ажилтанаар ажилласан.",
      image: "/images/managers/nandintsetseg.png",
    },
    {
      id: 9,
      name: "Б. Идэржав",
      position: "Удирдах зөвлөлийн гишүүн",
      description:
        "Эрүүл мэндийн нийгмийн ажилтан мэргэжилтэй. 2018 онд Философи, хүний эрхийн уулзварт олимпиадад оролцоод Эмнестид гишүүнээр элсэн орсон.",
      image: "/images/managers/iderjav.png",
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

        {/* Managers Section */}
        <div className="flex flex-col gap-4 min-w-[1000px]">
          <SectionTitle
            title={"ᠦᠳᠢᠷᠳᠠᠭᠰᠡᠨ ᠵᠥᠪᠯᠡᠨ"}
            containerClassName={"bg-[#FFFF00] text-xl"}
          />

          <div className="flex flex-col gap-8 overflow-y-auto max-h-[800px] p-4">
            {managers.map((manager, index) => (
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
                {index < managers.length - 1 && (
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
