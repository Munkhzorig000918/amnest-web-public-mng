import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import { useState, useEffect } from "react";
import apiService from "@/services/apiService";
import Image from "next/image";

export default function StructureManagersMobile() {
  // State for API data
  const [managersData, setManagersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch managers data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("Fetching managers data for structure detail page...");
        const managers = await apiService.managers.getManagers({
          page: 1,
          pageSize: 10,
          sort: "publishedAt:desc",
        });
        console.log("Managers response:", managers);

        const managersArray = Array.isArray(managers)
          ? managers
          : managers?.data || [];
        setManagersData(managersArray);
      } catch (err) {
        console.error("Error fetching managers data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Static managers data as fallback
  const staticManagers = [
    {
      id: 1,
      name: "Р. Очирбал",
      position: "Удирдах зөвлөлийн дарга",
      description:
        "Отгонтэнгэр их сургуулийн Хууль зүйн сургуульд багшилдаг. Хуульч, өмгөөлөгчөөр ажилладаг. Эмнестигийн үйл ажиллагаанд сүүлийн 10 гаруй жилийн хугацаанд идэвхтэй оролцож, Хуульчдын бүлгийн ахлагч, 2019 оноос Удирдах зөвлөлийн гишүүн, 2023 оны 9 дүгээр сараас Удирдах зөвлөлийн сонгогдон даргаар ажиллаж байна.",
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
  ];

  const managersToDisplay =
    managersData.length > 0 ? managersData : staticManagers;

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

        {/* Managers Section */}
        <div className="flex flex-col gap-4">
          <SectionTitle
            title={"ᠦᠳᠢᠷᠳᠠᠭᠰᠡᠨ ᠵᠥᠪᠯᠡᠨ"}
            containerClassName={"bg-[#FFFF00] text-[10px]"}
          />

          <div className="flex flex-col gap-6 overflow-y-auto max-h-[600px] p-2">
            {managersToDisplay.map((manager, index) => (
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

            {/* Loading state */}
            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p
                  className="ml-2 text-gray-600 text-xs"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...
                </p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="flex items-center justify-center p-4">
                <p
                  className="text-red-600 text-xs"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
