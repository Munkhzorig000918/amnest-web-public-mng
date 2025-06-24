import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import { useGetActionsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function WorkMobile() {
  // Fetch actions for campaigns
  const {
    data: actionsData,
    error: actionsError,
    isLoading: actionsLoading,
  } = useGetActionsQuery({
    pageSize: 15, // Fetch more for mobile grid
    sort: "publishedAt:desc",
  });

  // Convert actions data to campaign items format
  const campaignItems = actionsData
    ? actionsData.map((action) => ({
        id: action.id,
        title: action.title || "ᠵᠣᠷᠢᠭᠲᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ",
        image: getImageUrl(action.image) || "/images/about1.png",
      }))
    : [];

  // Static change items - these could be from a different content type or remain static
  const changeitems = [
    {
      id: 1,
      title: "ᠰᠤᠳᠤᠯᠭ᠎ᠠ",
      description:
        "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃",
    },
    {
      id: 2,
      title: "ᠨᠥᠯᠦᢉᠡᠯᠡᠯ ᠦ᠋ᠨ ᠠᠵᠢᠯ",
      description:
        "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃",
    },
    {
      id: 3,
      title: "ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ᠂ ᠠᠻᠼ",
      description:
        "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠪᠣᠯ ᠪᠠᠷᠢᠮᠲᠠ ᠠ᠋ᠴᠠ ᠡᢈᠢᠯᠡᠳᠡᢉ᠃  ᠮᠠᠨ ᠤ᠋ ᠮᠡᠷᢉᠡᠵᠢᠯᠲᠡᠨ ᠨᠦ᠋ᢉᠦᠳ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠪᠣᠯᠤᠨ ᠪᠤᠰᠤᠳ ᢈᠦᠮᠦᠰ ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ ᠦ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ ᠦᠨᠡᠨ ᠵᠥᠪ᠂ ᢈᠥᠨᠳᠡᠯᠡᠨ ᠰᠢᠯᠭᠠᠭᠰᠠᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ ᢈᠢᠳᠡᢉ᠃",
    },
  ];

  // Loading state
  if (actionsLoading) {
    return (
      <div className="h-full w-full block sm:hidden flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
          <p
            className="mt-4 text-gray-600 text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (actionsError) {
    return (
      <div className="h-full w-full block sm:hidden flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full block sm:hidden">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="h-full p-4 flex flex-col gap-7">
        <div className="h-full flex gap-7 max-h-[150px]">
          <h2
            className="text-xs font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠪᠢᠳᠡ ᢈᠡᠷᢈᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠶ᠋ᠢ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?
          </h2>
          <div className="h-full w-full flex max-h-[150px] gap-7 overflow-x-auto">
            {changeitems.map((item) => (
              <div key={item.id} className="flex gap-2">
                <h4
                  className="text-[10px] font-bold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[10px]"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  title={item.description}
                >
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full flex gap-7">
          <h2
            className="text-xs font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠻᠠᠮᠫᠠᠨᠢᠲᠤ ᠠᠵᠢᠯ ᠤ᠋ᠳ
          </h2>
          <div className="h-full grid grid-cols-5 gap-2">
            {campaignItems.slice(0, 15).map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-2 border rounded p-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="min-w-5 min-h-5"
                  onError={(e) => {
                    e.target.src = "/images/about1.png"; // fallback image
                  }}
                />
                <p
                  className="text-[10px] pl-2 font-bold text-center"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  title={item.title}
                >
                  {item.title.length > 15
                    ? `${item.title.substring(0, 15)}...`
                    : item.title}
                </p>
              </div>
            ))}
            {/* Fill empty slots if we have less than 15 actions */}
            {Array.from({ length: Math.max(0, 15 - campaignItems.length) }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded p-4"
                >
                  <div className="w-5 h-5 bg-gray-200 rounded"></div>
                  <p
                    className="text-[10px] pl-2 font-bold text-gray-400 text-center"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠠᠵᠢᠯ ᠦᠭᠡᠢ
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
