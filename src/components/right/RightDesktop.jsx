import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import RightSwiper from "./RightSwiper";
import { useState, useEffect } from "react";
import {
  videosService,
  librariesService,
  actionsService,
  storiesService,
} from "@/services/apiService";

export default function RightDesktop() {
  const [swiperData, setSwiperData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllContent();
  }, []);

  const fetchAllContent = async () => {
    try {
      setLoading(true);

      // Fetch all content types in parallel
      const [libraries, videos, actions, stories] = await Promise.all([
        librariesService.getLibraries({ pageSize: 6 }),
        videosService.getVideos({ pageSize: 6 }),
        actionsService.getActions({ pageSize: 6 }),
        storiesService.getStories({ pageSize: 6 }),
      ]);

      console.log("Fetched content:", { libraries, videos, actions, stories });

      // Create swiper data structure
      const dynamicSwiperData = [
        {
          id: 1,
          title: "ᠰᠤᠷᠭᠠᠯᠲᠠ:",
          description:
            'ᠲᠠ "ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠶ᠎ᠡ" ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ᠂ ᠮᠡᠳᠡᠯᢉᠡ ᠶ᠋ᠢᠨ ᠴᠠᢈᠢᠮ ᠲᠠᠯᠠᠪᠤᠷ ᠠ᠋ᠴᠠ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢ ᠡᠷᢈᠢᠯᠡᠨ ᠭᠠᠷᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠣᠯᠠᠨ ᠲᠣᠭᠠᠨ ᠤ᠋ ᠨᠣᠮ ᠲᠣᠪᢈᠢᠮᠠᠯ᠂ ᠸᠢᠳᠧᠣ᠋ ᠻᠣᠨ᠋ᠲ᠋ᠧᠨ᠋ᠲ ᠠ᠋ᠴᠠ ᢈᠦᠰᠡᢉᠰᠡᠨ ᠢ᠋ᠶᠡᠷ ᠢ᠋ᠶᠡᠨ ᠦᠵᠡᠵᠦ ᠰᠤᠳᠤᠯᠵᠤ ᠥᠪᠡᠷ ᠢ᠋ ᠪᠡᠨ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠳᠠᠭ ᢈᠦᠮᠦᠨ ᠪᠣᠯᠬᠤ ᠳ᠋ᠤ ᠲᠤᠰᠠᠯᠠᠭᠠᠷᠠᠢ᠃',
          sectionTitle: "ᠣᠨᠴᠠᠯᠠᠬᠤ ᠰᠤᠷᠭᠠᠯᠲᠠ ᠨᠤᠭᠤᠳ",
          data: stories?.data || [],
        },
        {
          id: 2,
          title: "ᠴᠠᢈᠢᠮ ᠰᠤᠷᠭᠠᠯᠲᠠ:",
          description:
            "ᠮᠣᠩᠭᠣᠯ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠒᠐ ᠭᠠᠷᠤᠢ ᠣᠷᠤᠨ ᠤ᠋ ᢈᠡᠯᠡ ᠳᠡᢉᠡᠷ᠎ᠡ ᠰᠤᠳᠤᠯᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠴᠠᢈᠢᠮ ᠰᠤᠷᠭᠠᠯᠲᠠ ᠨᠤᠭᠤᠳ ᠢ᠋ ᠰᠠᠨᠠᠯ ᠪᠣᠯᠭᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ᠃  ᠤᠭ ᠰᠤᠷᠭᠠᠯᠲᠠ ᠨᠤᠭᠤᠳ ᠨᠢ ᠦᠨ᠎ᠡ ᠲᠥᠯᠦᠪᠦᠷᠢ ᠦᢉᠡᠢ ᠪᠥᢉᠡᠳ ᠲᠠ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠲ ᠲᠦ ᠬᠣᠯᠪᠤᠭᠳᠠᠭᠰᠠᠨ ᠪᠠᠶᠢᠬᠤ ᠳ᠋ᠤ ᠯᠠ ᠬᠠᠩᠭᠠᠯᠲᠠᠲᠠᠢ᠃  ᠴᠠᢈᠢᠮ ᠰᠤᠷᠭᠠᠯᠲᠠ ᠶ᠋ᠢᠨ ᠦᠷᢉᠦᠯᠵᠢᠯᠡᢈᠦ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠠ᠋ᠴᠠ ᠬᠠᠮᠢᠶᠠᠷᠴᠤ ᠰᠧᠷᠲ᠋ᠢᠹᠢᠻᠠᠲ ᠣᠯᠭᠤᠨ᠎ᠠ᠃",
          sectionTitle: "ᠣᠨᠴᠠᠯᠠᠬᠤ ᠴᠠᢈᠢᠮ ᠰᠤᠷᠭᠠᠯᠲᠠ ᠨᠤᠭᠤᠳ",
          data: actions?.data || [],
        },
        {
          id: 3,
          title: "ᠨᠣᠮ ᠤ᠋ᠨ ᠰᠠᠩ:",
          description:
            "ᠲᠠ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠡᠯ ᠡᠴᠡ ᠡᠷᢈᠢᠯᠡᠨ ᠭᠠᠷᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠣᠯᠠᠨ ᠨᠣᠮ ᠲᠣᠪᢈᠢᠮᠠᠯ᠂ ᠰᠤᠳᠤᠯᠭ᠎ᠠ᠂ ᠭᠠᠷ ᠤ᠋ᠨ ᠠᠪᠤᠯᠭ᠎ᠠ᠂ ᠲᠠᠶᠢᠯᠤᠨ ᠠ᠋ᠴᠠ ᢈᠦᠰᠡᢉᠰᠡᠨ ᠢ᠋ᠶᠡᠷ ᠢ᠋ᠶᠡᠨ ᠦᠵᠡᠵᠦ ᠰᠤᠳᠤᠯᠵᠤ ᠥᠪᠡᠷ ᠢ᠋ ᠪᠡᠨ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠳᠠᠭ ᢈᠦᠮᠦᠨ ᠪᠣᠯᠬᠤ ᠳ᠋ᠤ ᠲᠤᠰᠠᠯᠠᠭᠠᠷᠠᠢ᠃",
          sectionTitle: "ᠣᠨᠴᠠᠯᠠᠬᠤ ᠨᠣᠮ ᠲᠣᠪᢈᠢᠮᠠᠯ ᠤ᠋ᠳ",
          data: libraries?.data || [],
        },
        {
          id: 4,
          title: "ᠸᠢᠳᠧᠣ᠋:",
          description:
            "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠮᠡᠳᠡᠯᢉᠡ ᠣᠯᠭᠤᠬᠤ ᠪᠢᠴᠢᠯ ᠸᠢᠳᠧᠣ᠋᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᢈᠢᠴᠢᠶᠡᠯ ᠦ᠋ᠳ᠂ ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠯ ᠤ᠋ᠨ ᠵᠣᢈᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠳᠠᠭ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠣᠶᠢᠮᠤ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠵᠡᠷᢉᠡ ᠶ᠋ᠢ ᠳᠠᠷᠠᠭᠠᢈᠢ ᠴᠠᢈᠢᠮ ᠸᠢᠳᠧᠣ᠋ ᠰᠠᠩ ᠠ᠋ᠴᠠ ᢈᠦᠯᠢᠶᠡᠨ ᠠᠪᠴᠤ ᠦᠵᠡᠨ᠎ᠡ ᠦᠦ᠃",
          sectionTitle: "ᠣᠨᠴᠠᠯᠠᠬᠤ ᠸᠢᠳᠧᠤᠨ ᠨᠤᠭᠤᠳ",
          data: videos?.data || [],
        },
      ];

      setSwiperData(dynamicSwiperData);
    } catch (error) {
      console.error("Error fetching content:", error);
      // Set empty array if API fails
      setSwiperData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full hidden sm:flex gap-10 overflow-x-auto overflow-y-hidden flex-shrink-0 p-4 max-h-screen">
      <BannerSlider images={bannerImages} width="90rem" useDynamic={true} />
      <div className="h-full p-4">
        <div className="h-full flex gap-10">
          <div className="flex gap-7">
            <h1
              className="text-2xl font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠶ᠎ᠡ
            </h1>
            <p
              className="text-sm font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠥᠨ ᠪᠢᠳᠡ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯᠦ ᠶ᠋ᠢᠨ ᠵᠠᠢ ᠶ᠋ᠢᠨ ᠰᠤᠷᠭᠠᠯᠲᠠ ᠨᠤᠭᠤᠳ ᠢ᠋
              ᠲᠠ ᠪᠦᢈᠦᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᢈᠦᠷᢉᠡᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃
            </p>
            <p
              className="text-sm font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠲᠠ "ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠶ᠎ᠡ" ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ᠂ ᠮᠡᠳᠡᠯᢉᠡ ᠶ᠋ᠢᠨ
              ᠴᠠᢈᠢᠮ ᠲᠠᠯᠠᠪᠤᠷ ᠠ᠋ᠴᠠ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢ ᠡᠷᢈᠢᠯᠡᠨ ᠭᠠᠷᠭᠠᠭᠰᠠᠨ ᢈᠦᠮᠦᠨ ᠦ᠋
              ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠣᠯᠠᠨ ᠲᠣᠭᠠᠨ ᠤ᠋ ᠨᠣᠮ ᠲᠣᠪᢈᠢᠮᠠᠯ᠂ <br />
              ᠸᠢᠳᠧᠣ᠋ ᠻᠣᠨ᠋ᠲ᠋ᠧᠨ᠋ᠲ ᠠ᠋ᠴᠠ ᢈᠦᠰᠡᢉᠰᠡᠨ ᠢ᠋ᠶᠡᠷ ᠢ᠋ᠶᠡᠨ ᠦᠵᠡᠵᠦ ᠰᠤᠳᠤᠯᠵᠤ ᠥᠪᠡᠷ ᠢ᠋
              ᠪᠡᠨ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ
              ᠬᠠᠮᠠᠭᠠᠯᠠᠳᠠᠭ ᢈᠦᠮᠦᠨ ᠪᠣᠯᠬᠤ ᠳ᠋ᠤ <br />
              ᠲᠤᠰᠠᠯᠠᠭᠠᠷᠠᠢ᠃
            </p>
            <p
              className="text-sm font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ᠶᠠᠷ ᠳᠠᠮᠵᠢᠭᠤᠯᠤᠨ ᠲᠠ ᠲᠡᢉᠰᠢ ᠡᠷᢈᠡ᠂
              ᠨᠡᠷ᠎ᠡ ᢈᠦᠨᠳᠦ᠂ ᠬᠠᠷᠢᠯᠴᠠᠨ ᢈᠦᠨᠳᠦᠯᠡᠯ ᠢ᠋ ᠥᠪᠡᠷ ᠦ᠋ᠨ ᠣᠷᠴᠢᠨ ᠲᠣᠭᠤᠷᠢᠨ ᠳ᠋ᠤ᠂
              ᠨᠡᠶᠢᢉᠡᠮ ᠳ᠋ᠦ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᢈᠢᠨ ᠢ᠋ᠶᠠᠨ ᠲᠦᢉᠡᢉᠡᢈᠦ <br />
              ᠤᠷ᠎ᠠ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠬᠠᠨᠳᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢ ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᠲᠤ
              ᠲᠥᠯᠦᠪᠰᠢᢉᠦᠯᠵᠦ᠂ ᢈᠥᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠨ᠎ᠠ᠃
            </p>
          </div>
          {loading ? (
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-500">Loading content...</p>
            </div>
          ) : (
            swiperData.map((item) => (
              <RightSwiper
                key={item.id}
                title={item.title}
                description={item.description}
                sectionTitle={item.sectionTitle}
                data={item.data}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
