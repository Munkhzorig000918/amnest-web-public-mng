import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useGetFaqsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";
import BannerSlider from "@/components/common/BannerSlider";
import StaticHeader from "@/components/common/StaticHeader";

export default function FaqMobile() {
  const [expandedItem, setExpandedItem] = useState(null);

  // Fetch FAQs from API
  const {
    data: faqsData,
    error: faqsError,
    isLoading: faqsLoading,
  } = useGetFaqsQuery({
    pageSize: 10,
    sort: "publishedAt:desc",
  });

  // Convert FAQs data to the format expected by the component
  const faqItems = faqsData
    ? faqsData.map((faq) => ({
        id: faq.id,
        title: faq.question || "ᠠᠰᠠᠭᠤᠯᠲᠠ",
        description: faq.answer || "ᠬᠠᠷᠢᠭᠤᠯᠲᠠ ᠦᠭᠡᠢ",
      }))
    : [];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  // Loading state
  if (faqsLoading) {
    return (
      <div className="w-full min-h-screen bg-white md:hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p
            className="mt-4 text-gray-600"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
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
      <div className="w-full min-h-screen bg-white md:hidden flex items-center justify-center">
        <div className="text-center text-red-600">
          <p style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full block sm:hidden">
      <StaticHeader
        image="/images/news1.png"
        alt="FAQ Page Header"
        width="100%"
        title="ᠠᠰᠠᠭᠤᠯᠲᠠ ᠬᠠᠷᠢᠭᠤᠯᠲᠠ"
      />
      <div className="flex flex-col gap-4 p-4">
        {faqItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <button
              onClick={() => toggleExpanded(index)}
              className="flex justify-center items-center max-h-[150px] px-3 rounded-lg bg-[#FFFF00]"
            >
              <h3
                className="text-[10px] font-bold text-black pl-2 py-3"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {item.title}
              </h3>
            </button>

            <p
              className="text-[10px] max-h-[150px] w-full overflow-x-auto"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const bannerImages = [
  getImageUrl("banner1.jpg"),
  getImageUrl("banner2.jpg"),
  getImageUrl("banner3.jpg"),
];
