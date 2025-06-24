import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";
import { useGetPostsQuery, useGetFaqsQuery } from "@/redux/services/apiService";
import { getImageUrl } from "@/config/api";

export default function HomeDesktop() {
  // Fetch posts for news section (limit to 6 for layout)
  const {
    data: postsData,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery({
    pageSize: 6,
    sort: "publishedAt:desc",
  });

  // Fetch FAQs for about section (limit to 4 for layout)
  const {
    data: faqsData,
    error: faqsError,
    isLoading: faqsLoading,
  } = useGetFaqsQuery({
    pageSize: 4,
    sort: "publishedAt:desc",
  });

  // Convert posts data to the format expected by the component
  const newsItems = postsData
    ? postsData.map((post) => ({
        id: post.id,
        title: post.title || "ᠭᠠᠷᠴᠢᠭ ᠦᠭᠡᠢ",
        image: getImageUrl(post.cover) || "/images/news1.png", // fallback image
        body: post.short_description || post.body || "",
        category: "news",
      }))
    : [];

  // Convert FAQs data to about items format
  const aboutItems = faqsData
    ? faqsData.map((faq) => ({
        id: faq.id,
        title: faq.question || "ᠠᠰᠠᠭᠤᠯᠲᠠ",
        body: faq.answer || "ᠬᠠᠷᠢᠭᠤᠯᠲᠠ ᠦᠭᠡᠢ",
        image: getImageUrl(faq.image) || "/images/about1.png", // fallback image
      }))
    : [];

  // Loading state
  if (postsLoading || faqsLoading) {
    return (
      <div className="h-full gap-10 overflow-x-auto w-auto flex-shrink-0 hidden md:flex items-center justify-center">
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
  if (postsError || faqsError) {
    return (
      <div className="h-full gap-10 overflow-x-auto w-auto flex-shrink-0 hidden md:flex items-center justify-center">
        <div className="text-center text-red-600">
          <p style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full gap-10 overflow-x-auto w-auto flex-shrink-0 hidden md:flex">
      <BannerSlider images={bannerImages} width="90rem" useDynamic={true} />
      <div className="h-full p-4">
        <div className="h-full flex gap-10">
          <SectionTitle
            title="ᠰᠡᢉᠦᠯ ᠦ᠋ᠨ ᠦᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠠᠯᠠᠭᠠᠷᢈᠢ ᠮᠡᠳᠡᢉᠡ"
            containerClassName="h-full flex flex-col items-center justify-between border border-[#E3E3E3] rounded-xl p-8"
            button={<Button text={"ᠪᠦᢈᠦ ᠮᠡᠳᠡᢉᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ"} type="primary" />}
          />
          <div className="h-full grid grid-cols-2 grid-rows-3 gap-10">
            {newsItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="w-full h-full flex items-end space-x-4"
              >
                <h3
                  className="w-16 h-full text-sm"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  title={item.title}
                >
                  {item.title.length > 50
                    ? `${item.title.substring(0, 50)}...`
                    : item.title}
                </h3>
                <div className="relative w-[270px] h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = "/images/news1.png"; // fallback image
                    }}
                  />
                  <Button
                    text={"ᠮᠡᠳᠡᢉᠡ"}
                    type="primary"
                    className="absolute top-0 right-0 text-black"
                  />
                </div>
                <Button
                  text={"ᠤᠩᠰᠢᠬᠤ"}
                  type="secondary"
                  className="text-black h-48"
                />
              </div>
            ))}
            {/* Fill empty slots if we have less than 6 posts */}
            {Array.from({ length: Math.max(0, 6 - newsItems.length) }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  className="w-full h-full flex items-center justify-center border border-gray-200 rounded-xl"
                >
                  <p
                    className="text-gray-400"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    ᠮᠡᠳᠡᢉᠡ ᠦᠭᠡᠢ
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="h-screen w-[20rem] bg-[#F1F1F1] flex items-center justify-center gap-10">
        <p
          className="text-black font-bold"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠰᠢᠨ᠋ᠯ ᠨᠢ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠳ᠋ᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠨᠢ ᠡᠳ᠋ᠯᠡᢉᠦᠯᢈᠦ ᠶ᠋ᠢᠨ
          ᠲᠥᠯᠦᢉᠡ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨᠯᠢᢉ ᠰᠡᠳᢈᠢᠯ ᠳ᠋ᠦ ᠲᠤᠯᠭᠠᠭᠤᠷᠢᠯᠠᠨ ᠻᠠᠮᠫᠠᠨᠢᠲᠤ <br />
          ᠠᠵᠢᠯ ᠥᠷᠨᠢᢉᠦᠯᠳᠡᢉ ᠑᠐ ᠰᠠᠶ᠋ᠢ ᢈᠦᠮᠦᠨ ᠢ᠋ ᠡᠩᠨᠡᢉᠡᠨ ᠳ᠋ᠦ ᠪᠡᠨ ᠨᠢᢉᠡᠳᢈᠡᢉᠰᠡᠨ ᠳᠡᠯᠡᢈᠡᠢ
          ᠳᠠᠶᠠᠭᠠᠷᢈᠢ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ ᠶᠤᠮ᠃
        </p>
        <p
          className="text-[#848382] font-bold"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠡᠷᢈᠡ ᠪᠠᠷᠢᠭᠴᠢᠳ ᠣᠯᠠᠨ ᠤᠯᠤᠰ ᠤ᠋ᠨ ᠡᠷᢈᠡ ᠵᠦᠢ᠂ ᢈᠡᠮ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢ ᢈᠦᠨᠳᠦᠳᢈᠡᠳᠡᢉ᠂
          ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ ᠪᠠᠨ ᢈᠦᠯᠢᠶᠡᠳᠡᢉ᠂ ᠠᠮᠠᠯᠠᠯᠲᠠ ᠳ᠋ᠤ ᠪᠠᠨ ᢈᠦᠷᠳᠡᢉ <br />
          ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢ ᠪᠤᠢ ᠪᠣᠯᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠪᠢᠳᠡ ᠠᠵᠢᠯᠠᠳᠠᠭ᠃
        </p>
      </div>
      <div className="h-full p-4">
        <div className="h-full grid grid-cols-2 grid-rows-2 grid-flow-col gap-[10px] mr-20">
          {aboutItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex border border-[#E3E3E3] rounded-xl p-5 gap-4"
            >
              <div className="flex flex-col items-center gap-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  onError={(e) => {
                    e.target.src = "/images/about1.png"; // fallback image
                  }}
                />
                <h4
                  className="text-black font-bold text-sm"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                  title={item.title}
                >
                  {item.title.length > 20
                    ? `${item.title.substring(0, 20)}...`
                    : item.title}
                </h4>
              </div>
              <div
                className="min-w-28 text-black font-bold text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                title={item.body}
              >
                {item.body.length > 100
                  ? `${item.body.substring(0, 100)}...`
                  : item.body}
              </div>
              <div className="flex items-end">
                <Button type="secondary" text={"ᠪᠢᠳᠡᠨ ᠦ᠋ ᠲᠡᠦᢈᠡ ᠶ᠋ᠢ ᠤᠩᠰᠢᠬᠤ"} />
              </div>
            </div>
          ))}
          {/* Fill empty slots if we have less than 4 FAQs */}
          {Array.from({ length: Math.max(0, 4 - aboutItems.length) }).map(
            (_, index) => (
              <div
                key={`empty-about-${index}`}
                className="flex border border-gray-200 rounded-xl p-5 items-center justify-center"
              >
                <p
                  className="text-gray-400"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠮᠡᠳᠡᢉᠡ ᠦᠭᠡᠢ
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
