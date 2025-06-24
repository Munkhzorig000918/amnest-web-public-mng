import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { useGetEventsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function ParticipationDesktop() {
  // Fetch events for participation activities
  const {
    data: eventsData,
    error: eventsError,
    isLoading: eventsLoading,
  } = useGetEventsQuery({
    pageSize: 6, // Fetch 6 events (3 for each section)
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
      }))
    : [];

  // Loading state
  if (eventsLoading) {
    return (
      <div className="h-full hidden sm:flex gap-10 overflow-x-auto w-auto flex-shrink-0 items-center justify-center">
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
      <div className="h-full hidden sm:flex gap-10 overflow-x-auto w-auto flex-shrink-0 items-center justify-center">
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
    <div className="h-full hidden sm:flex gap-10 overflow-x-auto w-auto flex-shrink-0">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="h-full p-4 flex gap-20">
        <div className="h-full flex gap-4">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠵᠠᢈᠢᠳᠠᠯ ᠳ᠋ᠤ ᠭᠠᠷ ᠤ᠋ᠨ ᠦᠰᠦᢉ ᠵᠢᠷᠤᠵᠤ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠰᠠᠶᠢᠨ ᠳᠤᠷ
            ᠠ᠋ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᠠ᠋ᠠ ᠶ᠋ᠢᠨ ᠠᠵᠢᠯ ᢈᠢᠵᠦ᠂ ᢉᠡᠰᠢᢉᠦᠨ ᠪᠣᠯᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠲᠠᠢ᠃
          </h2>
          <p
            className="text-sm"
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
        <div className="h-full w-[1px] bg-black"></div>
        <div className="grid grid-rows-2 grid-flow-col gap-14">
          {participationItems.slice(0, 3).map((item) => (
            <div key={item.id} className="flex gap-4">
              <h3
                className="text-lg font-bold"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                title={item.title}
              >
                {item.title.length > 30
                  ? `${item.title.substring(0, 30)}...`
                  : item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square min-w-[420px] max-w-[420px] object-cover"
                onError={(e) => {
                  e.target.src = "/images/dummy-image.png"; // fallback image
                }}
              />
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                title={item.description}
              >
                {item.description.length > 200
                  ? `${item.description.substring(0, 200)}...`
                  : item.description}
              </p>
              <Button
                type="primary"
                text={"ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ ᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                className="text-sm"
              />
            </div>
          ))}
          {/* Fill empty slots if we have less than 3 events */}
          {Array.from({
            length: Math.max(0, 3 - participationItems.slice(0, 3).length),
          }).map((_, index) => (
            <div key={`empty-left-${index}`} className="flex gap-4">
              <h3
                className="text-lg font-bold text-gray-400"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠠᠵᠢᠯ ᠦᠭᠡᠢ
              </h3>
              <div className="aspect-square min-w-[420px] max-w-[420px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">ᠵᠢᠷᠤᠭ ᠦᠭᠡᠢ</span>
              </div>
              <p
                className="text-sm text-gray-400"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠲᠠᠢᠯᠪᠤᠷᠢ ᠦᠭᠡᠢ
              </p>
              <Button
                type="primary"
                text={"ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ ᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                className="text-sm opacity-50"
                disabled
              />
            </div>
          ))}
        </div>
        <div className="h-full w-[1px] bg-black"></div>
        <div className="grid grid-rows-2 grid-flow-col gap-14">
          {participationItems.slice(3, 6).map((item) => (
            <div key={item.id} className="flex gap-4">
              <h3
                className="text-lg font-bold"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                title={item.title}
              >
                {item.title.length > 30
                  ? `${item.title.substring(0, 30)}...`
                  : item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square min-w-[420px] max-w-[420px] object-cover"
                onError={(e) => {
                  e.target.src = "/images/dummy-image.png"; // fallback image
                }}
              />
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                title={item.description}
              >
                {item.description.length > 200
                  ? `${item.description.substring(0, 200)}...`
                  : item.description}
              </p>
              <Button
                type="primary"
                text={"ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ ᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                className="text-sm"
              />
            </div>
          ))}
          {/* Fill empty slots if we have less than 3 events for the second section */}
          {Array.from({
            length: Math.max(0, 3 - participationItems.slice(3, 6).length),
          }).map((_, index) => (
            <div key={`empty-right-${index}`} className="flex gap-4">
              <h3
                className="text-lg font-bold text-gray-400"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠠᠵᠢᠯ ᠦᠭᠡᠢ
              </h3>
              <div className="aspect-square min-w-[420px] max-w-[420px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">ᠵᠢᠷᠤᠭ ᠦᠭᠡᠢ</span>
              </div>
              <p
                className="text-sm text-gray-400"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠲᠠᠢᠯᠪᠤᠷᠢ ᠦᠭᠡᠢ
              </p>
              <Button
                type="primary"
                text={"ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ ᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠬᠤ"}
                className="text-sm opacity-50"
                disabled
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
