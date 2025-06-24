import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { useGetEventsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function ParticipationMobile() {
  // Fetch events for participation activities
  const {
    data: eventsData,
    error: eventsError,
    isLoading: eventsLoading,
  } = useGetEventsQuery({
    pageSize: 6, // Fetch 6 events for mobile layout
    sort: "event_date:desc",
  });

  // Convert events data to participation items format
  const participationItems = eventsData
    ? eventsData.map((event) => ({
        id: event.id,
        title:
          event.title ||
          "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
        description:
          event.body ||
          "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃",
        image: getImageUrl(event.image) || "/images/dummy-image.png",
        date: event.event_date,
      }))
    : [];

  // Loading state
  if (eventsLoading) {
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
  if (eventsError) {
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

      <div className="h-full p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠵᠠᢈᠢᠳᠠᠯ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠵᠢᠷᠤᠵᠤ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠰᠠᠶᠢᠨ ᠳᠤᠷ
            ᠠ᠋ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠠ᠋ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᢉᠡᠰᠢᢉᠦᠨ ᠪᠣᠯᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃
          </h2>
          <p
            className="text-[10px]"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠥᠨᠦᠳᠦᠷ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠠᠪᠴᠤ᠂ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ
            ᠲᠥᠯᠦᢉᠡ ᠬᠠᠮᠲᠤ ᠳ᠋ᠤ ᠪᠠᠨ ᠵᠣᠭᠰᠤᠬᠤ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠦ᠋ ᠨᠢᢉᠡ ᢈᠡᠰᠡᢉ
            ᠪᠣᠯᠤᠭᠠᠷᠠᠢ᠃
          </p>
        </div>

        <div className="h-full flex flex-col gap-4 overflow-y-auto">
          {participationItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border border-[#E3E3E3] rounded-lg p-3"
            >
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                  onError={(e) => {
                    e.target.src = "/images/dummy-image.png"; // fallback image
                  }}
                />
                <Button
                  type="primary"
                  text={"ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                  className="text-[8px] px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3
                  className="text-[10px] font-bold"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  title={item.title}
                >
                  {item.title.length > 40
                    ? `${item.title.substring(0, 40)}...`
                    : item.title}
                </h3>
                <p
                  className="text-[8px] text-gray-600"
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
                {item.date && (
                  <p className="text-[8px] text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))}
          {/* Show message if no events */}
          {participationItems.length === 0 && (
            <div className="flex items-center justify-center h-32 border border-gray-200 rounded-lg">
              <p
                className="text-gray-400 text-[10px]"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠠᠵᠢᠯ ᠦᠭᠡᠢ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
