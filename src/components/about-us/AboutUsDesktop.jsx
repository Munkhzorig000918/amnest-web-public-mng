import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import { useGetFaqsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function AboutUsDesktop() {
  // Fetch FAQs from API
  const {
    data: faqsData,
    error: faqsError,
    isLoading: faqsLoading,
  } = useGetFaqsQuery({
    pageSize: 8,
    sort: "publishedAt:desc",
  });

  // Convert FAQs data to about items format
  const aboutItems = faqsData
    ? faqsData.slice(0, 4).map((faq) => ({
        id: faq.id,
        title: faq.question || "ᠠᠰᠠᠭᠤᠯᠲᠠ",
        body: faq.answer || "ᠬᠠᠷᠢᠭᠤᠯᠲᠠ ᠦᠭᠡᠢ",
        image: getImageUrl(faq.image) || "/images/aboutus1.png",
      }))
    : [];

  // Use remaining FAQs for history items
  const historyItems = faqsData
    ? faqsData.slice(4, 8).map((faq, index) => ({
        id: faq.id,
        date: `᠒᠐᠒${index + 1}`, // Simple date format
        image:
          getImageUrl(faq.image) ||
          `/images/internationalhistoryimage${index + 1}.png`,
        desc: faq.answer || "ᠲᠡᠦᠬᠡ ᠦᠭᠡᠢ",
      }))
    : [];

  // Loading state
  if (faqsLoading) {
    return (
      <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
        <BannerSlider images={bannerImages} width="90rem" />
        <div className="flex items-center justify-center p-4">
          <p
            className="text-lg"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (faqsError) {
    return (
      <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
        <BannerSlider images={bannerImages} width="90rem" />
        <div className="flex items-center justify-center p-4">
          <p
            className="text-lg text-red-600"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="h-full p-4 flex gap-10">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠑᠕᠐ ᠭᠠᠷᠤᠢ ᠤᠯᠤᠰ ᠣᠷᠤᠨ᠂ ᠭᠠᠵᠠᠷ ᠨᠤᠲᠤᠭ ᠲᠤ ᠑᠐ ᠰᠠᠶ᠋ᠢ
          ᢈᠦᠮᠦᠨ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ
          ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠠᠭᠤᠮ᠎ᠠ᠃
        </h2>
        <p
          className="text-sm font-bold"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
          ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ
          ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ᠃ ᠪᠢᠳᠡ ᠠᠯᠢᠪᠠ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ
          ᠭᠠᠵᠠᠷ᠂ ᠤᠯᠤᠰ ᠲᠥᠷᠦ ᠶ᠋ᠢᠨ ᠦᠵᠡᠯ ᠰᠤᠷᠲᠠᠯ᠂ ᠡᠳ᠋ ᠦ᠋ᠨ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠠᠰᠢᠭ ᠰᠣᠨᠢᠷᠬᠠᠯ᠂
          ᠱᠠᠰᠢᠨ ᠰᠢᠲᠦᠯᢉᠡ ᠡᠴᠡ ᠠᠩᢉᠢ ᠳ᠋ᠤ ᠪᠡᠶ᠎ᠡ ᠳᠠᠭᠠᠭᠠᠭᠰᠠᠨ᠂ ᠬᠠᠷᠠᠭᠠᠲᠤ ᠪᠤᠰᠤ ᠪᠥᢉᠡᠳ
          ᢉᠡᠰᠢᢉᠦᠳ ᠳᠡᠮᠵᠢᢉᠴᠢᠳ ᠦ᠋ᠨ ᠢ᠋ᠶᠡᠨ ᠬᠠᠨᠳᠢᠪ ᠲᠤᠰᠠᠯᠠᠮᠵᠢ ᠪᠠᠷ ᠰᠠᠩᢈᠦᠵᠢᠳᠡᢉ᠃ ᢈᠦᠮᠦᠰ ᠡᠪ
          ᠰᠠᠨᠠᠭᠠᠨ ᠤ᠋ ᠨᠢᢉᠡᠳᠦᠯ ᠲᠡᠢ᠂ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠡᠨᠡᠷᠢᠩᢉᠦᠢ ᠪᠠᠶᠢᠭᠰᠠᠨ ᠢ᠋ᠶᠠᠷ ᠢᠯᠡᢉᠦᠦ
          ᠰᠠᠶᠢᠬᠠᠨ ᠨᠡᠶᠢᢉᠡᠮ ᠢ᠋ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠵᠤ᠂ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠵᠦ ᠴᠢᠳᠠᠨ᠎ᠠ ᢉᠡᠳᠡᢉ ᠲᠦ ᠪᠢᠳᠡ
          ᠢᠲᠡᢉᠡᠳᠡᢉ᠃ ᠮᠠᠨ ᠤ᠋ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ᠎ᠠ ᠶ᠋ᠢᠨ ᢈᠦᠴᠦ ᠪᠣᠯ ᢈᠦᠮᠦᠰ᠃ ᠣᠯᠠᠨ ᢈᠦᠮᠦᠰ ᠰᠢᠳᠤᠷᠭᠤ
          ᠶᠣᠰᠤᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ ᠳᠤᠤᠭᠠᠷᠳᠠᠭ ᠤᠴᠢᠷ ᠠ᠋ᠴᠠ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠭᠠᠶᠢᠬᠠᠯᠲᠠᠢ
          ᠠᠮᠵᠢᠯᠲᠠ ᠨᠤᠭᠤᠳ ᠢ᠋ ᠭᠠᠷᠭᠠᠭᠰᠠᠭᠠᠷ ᠢᠷᠡᢉᠰᠡᠨ᠃
        </p>
      </div>
      <div className="min-w-[20rem] py-4 px-14 bg-[#F1F1F1] flex gap-7">
        <p
          className="text-black font-bold text-2xl"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠪᠣᠯ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠳᠠᠭᠤ ᠬᠣᠭᠤᠯᠠᠢ
          ᠶᠤᠮ᠃ ᠪᠢᠳᠡ ᠖᠐ ᠭᠠᠷᠤᠢ ᠵᠢᠯ ᠦ᠋ᠨ ᠲᠤᠷᠰᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠵᠥᠷᠢᠴᠡᠯ᠂ ᠣᠯᠠᠨ ᠤᠯᠤᠰ
          ᠤ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠤᠯᠢ ᠲᠣᠭᠲᠠᠭᠠᠮᠵᠢ᠂ ᠰᠲ᠋ᠠᠨ᠋ᠳᠠᠷᠲ ᠤ᠋ᠨ ᠲᠠᠯᠠᠭᠠᠷ
          ᠨᠠᠶᠢᠳᠠᠪᠤᠷᠢᠲᠠᠢ᠂ ᠦᠨᠡᠨ ᠵᠥᠪ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ᠶᠡᠷ ᠳᠡᠯᠡᢈᠡᠢ ᠨᠡᠶᠢᠲᠡ ᢈᠦᠷᢉᠡᠰ ᠢ᠋ᠶᠡᠷ
          ᠢᠷᠡᢉᠰᠡᠨ᠃
        </p>
        <p
          className="font-bold text-sm"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᠠᠯᠢᠪᠠ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ᠂ ᠤᠯᠤᠰ ᠲᠥᠷᠦ ᠶ᠋ᠢᠨ ᠦᠵᠡᠯ
          ᠰᠤᠷᠲᠠᠯ᠂ ᠡᠳ᠋ ᠦ᠋ᠨ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠠᠰᠢᠭ ᠰᠣᠨᠢᠷᠬᠠᠯ᠂ ᠱᠠᠰᠢᠨ ᠰᠢᠲᠦᠯᢉᠡ ᠡᠴᠡ ᠦᠯᠦ
          ᠬᠠᠮᠢᠶᠠᠷᠳᠠᠭ᠃ ᠪᠢᠳᠡ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠰᠤᠳᠤᠯᠭ᠎ᠠ᠂ ᠰᠤᠷᠲᠠᠯᠴᠢᠯᠠᠭᠠᠨ ᠤ᠋ ᠠᠵᠢᠯ
          ᠳ᠋ᠤ ᠵᠣᠷᠢᠭᠤᠯᠵᠤ ᠶᠠᠮᠠᠷ ᠴᠤ ᠵᠠᠰᠠᠭ ᠤ᠋ᠨ ᠭᠠᠵᠠᠷ ᠠ᠋ᠴᠠ ᠰᠠᠩᢈᠦᠵᠢᠯᠲᠡ ᠠᠪᠳᠠᠭ ᠦᢉᠡᠢ ᠪᠠ
          ᠪᠢᠳᠡ ᠬᠤᠪᠢ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠬᠠᠨᠳᠢᠪ ᠢ᠋ᠶᠠᠷ ᠰᠠᠩᢈᠦᠵᠢᠳᠡᢉ᠃ ᠪᠢᠳᠡᠨ ᠋ ᠴᠣᠷ ᠤ᠋ᠨ ᠭᠠᠭᠴᠠ
          ᠵᠣᠷᠢᠯᠭ᠎ᠠ ᠪᠣᠯ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠡᠳ᠋ᠯᠡᠳᠡᢉ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢ ᠪᠤᠢ
          ᠪᠣᠯᠭᠠᠬᠤ ᠶᠤᠮ᠃
        </p>
      </div>
      <div className="flex gap-12 p-4 h-full">
        <SectionTitle title={"ᠪᠢᠳᠡ ᢈᠡᠷᢈᠢᠨ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᢈᠢᠳᠡᢉ ᠪᠤᠢ?"} />
        <div className="h-full grid grid-cols-2 grid-rows-2 gap-12 mr-20">
          {aboutItems.map((item) => (
            <div key={item.id} className="flex items-start p-5 gap-4 h-[600px]">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                onError={(e) => {
                  e.target.src = "/images/aboutus1.png"; // fallback image
                }}
              />
              <h2
                className="font-bold text-xl"
                style={{
                  writingMode: "vertical-lr",
                }}
                title={item.title}
              >
                {item.title.length > 50
                  ? `${item.title.substring(0, 50)}...`
                  : item.title}
              </h2>
              <p
                className="text-black font-bold text-sm"
                style={{
                  writingMode: "vertical-lr",
                }}
                title={item.body}
              >
                {item.body.length > 200
                  ? `${item.body.substring(0, 200)}...`
                  : item.body}
              </p>
            </div>
          ))}
          {/* Fill empty slots if we have less than 4 FAQs */}
          {Array.from({ length: Math.max(0, 4 - aboutItems.length) }).map(
            (_, index) => (
              <div
                key={`empty-${index}`}
                className="flex items-start p-5 gap-4 h-[600px] opacity-50"
              >
                <Image
                  src="/images/aboutus1.png"
                  alt="Empty slot"
                  width={80}
                  height={80}
                />
                <h2
                  className="font-bold text-xl text-gray-400"
                  style={{
                    writingMode: "vertical-lr",
                  }}
                >
                  ᠮᠡᠳᠡᢉᠡ ᠦᠭᠡᠢ
                </h2>
                <p
                  className="text-gray-400 font-bold text-sm"
                  style={{
                    writingMode: "vertical-lr",
                  }}
                >
                  ᠮᠡᠳᠡᢉᠡ ᠦᠭᠡᠢ
                </p>
              </div>
            )
          )}
        </div>
        <div className="flex gap-12 p-4 h-full">
          <SectionTitle
            title={"ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨᠯ: ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠲᠡᠦᢈᠡᠨ ᠲᠣᠪᠴᠢᠶ᠎ᠠ"}
          />
          <div className="flex h-full">
            {historyItems.map((h, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div
                  className={`h-1/2 flex px-16 justify-center ${
                    i % 2 === 0 ? "items-end" : "items-start"
                  } ${i % 2 === 1 ? "order-last" : ""}`}
                >
                  <p
                    className="text-sm text-center max-h-[380px]"
                    style={{
                      writingMode: "vertical-lr",
                    }}
                  >
                    {h.desc}
                  </p>
                </div>
                <div className="relative my-5">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="h-4 w-4 bg-black rounded-full absolute -top-2 left-1/2 -translate-x-1/2"></div>
                </div>
                <div
                  className={`h-1/2 flex flex-col gap-3 px-16 items-center ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  } ${i % 2 === 1 ? "order-first" : ""}`}
                >
                  <h2 className="text-2xl text-start font-bold">{h.date}</h2>
                  <img src={h.image} className="max-w-[230px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-full gap-7 px-14 py-4 bg-[#F1F1F1]">
        <h2
          className="text-2xl font-bold"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠮᠠᠨ ᠤ᠋ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠦ᠋ᢉᠡᠷᠡᠢ
        </h2>
        <p
          className="text-sm"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠪᠠᠶᠢᠳᠠᠯ ᠲᠠᠢ ᠲᠡᠮᠡᠴᠡᠵᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ
          ᠡᠳ᠋ᠯᠡᠳᠡᢉ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠳ᠋ᠤ ᠲᠤᠰᠠᠯᠠᠭᠠᠷᠠᠢ᠃
        </p>
        <Button
          text={"ᠬᠠᠨᠳᠢᠪ ᠥᢉᢈᠦ"}
          type="primary"
          className="max-h-min whitespace-nowrap"
        />
      </div>
    </div>
  );
}
