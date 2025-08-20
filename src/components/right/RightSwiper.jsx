import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/common/Button";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import SectionTitle from "@/components/common/SectionTitle";
import { getImageUrl } from "@/utils/fetcher";

// Custom hook for Mongolian numeral conversion
const useMongolianNumeral = () => {
  const toMongolianNumeral = (num) => {
    const mongolianNumerals = {
      0: "᠐",
      1: "᠑",
      2: "᠒",
      3: "᠓",
      4: "᠔",
      5: "᠕",
      6: "᠖",
      7: "᠗",
      8: "᠘",
      9: "᠙",
    };
    return num
      .toString()
      .split("")
      .map((digit) => mongolianNumerals[digit])
      .join("");
  };

  return { toMongolianNumeral };
};

export default function RightSwiper({
  title,
  description,
  sectionTitle,
  data = [],
}) {
  const router = useRouter();
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const { toMongolianNumeral } = useMongolianNumeral();

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Process API data into slides format
  const slides = data.map((item, index) => {
    const itemAttrs = item.attributes || item;

    // Get the image using the helper function - try different field names
    const imageUrl =
      getImageUrl(itemAttrs.thumbnail) ||
      getImageUrl(itemAttrs.cover) ||
      getImageUrl(itemAttrs.image) ||
      getImageUrl(itemAttrs.featured_image) ||
      "/images/dummy-image.png";

    return {
      id: item.id || index + 1,
      title: itemAttrs.title || itemAttrs.name || "ᠦᠨᠡᠨ ᠦ᠋ ᠭᠠᠷᠴᠠᠭ",
      image: imageUrl,
      duration: itemAttrs.duration || itemAttrs.lesson_length || "᠙᠐ ᠮᠢᠨ",
      description:
        itemAttrs.description || itemAttrs.content || itemAttrs.introduction,
    };
  });

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex + 1);
  };

  // Navigate to detail page based on content type
  const navigateToDetail = (item) => {
    const itemId = item.id;

    // Determine the route based on section title
    let route = "";

    // Check if section title contains specific keywords
    if (
      sectionTitle.includes("ᠴᠠᠬᠢᠮ ᠰᠤᠷᠭᠠᠯᠲᠤ") ||
      sectionTitle.toLowerCase().includes("online lesson")
    ) {
      route = `/right/online-lessons/${itemId}`;
    } else if (
      sectionTitle.includes("ᠰᠤᠷᠭᠠᠯᠲᠤ") ||
      sectionTitle.toLowerCase().includes("lesson")
    ) {
      route = `/right/lessons/${itemId}`;
    } else if (
      sectionTitle.includes("ᠸᠢᠳᠧᠤ") ||
      sectionTitle.toLowerCase().includes("video")
    ) {
      route = `/right/videos/${itemId}`;
    } else if (
      sectionTitle.includes("ᠨᠣᠮ ᠲᠣᠪᠴᠢᠮᠠᠯ") ||
      sectionTitle.toLowerCase().includes("librar")
    ) {
      route = `/right/libraries/${itemId}`;
    } else if (
      sectionTitle.includes("ᠫᠣᠳᠺᠠᠰᠲ") ||
      sectionTitle.toLowerCase().includes("podcast")
    ) {
      route = `/right/podcasts/${itemId}`;
    } else {
      return;
    }

    router.push(route);
  };

  // Don't render if no data
  if (!slides.length) {
    return (
      <div className="h-full flex flex-col sm:flex-row gap-4 sm:gap-8 overflow-x-auto sm:overflow-auto">
        <div className="flex flex-row gap-4 sm:gap-8">
          <div className="flex gap-2 sm:gap-8 max-h-[120px] sm:max-h-max">
            <h1
              className="text-xs sm:text-2xl font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              {title}
            </h1>
            <p
              className="text-[8px] sm:text-sm font-bold"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              {description}
            </p>
          </div>
          <Button text={"ᠪᠦᢉᠦᠳᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ"} type="secondary" />
          <SectionTitle
            title={sectionTitle}
            containerClassName="hidden sm:block"
          />
        </div>
        <div className="flex items-center justify-center p-8">
          <p
            className="text-sm text-gray-500"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠦᠭᠡᠢ ᠪᠠᠶᠢᠨ᠎ᠠ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col sm:flex-row gap-4 sm:gap-8 overflow-x-auto sm:overflow-auto">
      <div className="flex flex-row gap-4 sm:gap-8">
        <div className="flex gap-2 sm:gap-8 max-h-[120px] sm:max-h-max">
          <h1
            className="text-xs sm:text-2xl font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            {title}
          </h1>
          <p
            className="text-[8px] sm:text-sm font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            {description}
          </p>
        </div>
        <Button text={"ᠪᠦᢉᠦᠳᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ"} type="secondary" />
        <SectionTitle
          title={sectionTitle}
          containerClassName="hidden sm:block"
        />
      </div>
      <div className="flex flex-row gap-2 max-h-[200px] sm:max-h-max">
        <p
          className="text-[10px] font-bold block sm:hidden border-r pr-2"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          {sectionTitle}
        </p>

        <Swiper
          direction={isMobile ? "horizontal" : "vertical"}
          slidesPerView={isMobile ? 1.3 : 3}
          spaceBetween={isMobile ? 10 : 40}
          navigation={false}
          pagination={false}
          modules={[Navigation, Pagination]}
          className="h-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full flex gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigateToDetail({ id: slide.id })}
              >
                <div className="flex flex-col items-center gap-4 justify-between max-h-[200px] sm:max-h-max">
                  <p
                    className="text-[9px] sm:text-sm"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {slide.title}
                  </p>
                  <p
                    className="text-[9px] sm:text-sm"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {slide.duration}
                  </p>
                </div>
                <div className="relative z-0 aspect-square">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg relative z-0 aspect-square w-full h-full min-h-[200px] min-w-[200px] sm:min-h-[270px] sm:min-w-[270px] object-cover"
                  />
                  <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢈᠦᠢ"} type="details" />
                </div>
                <p
                  className="text-[9px] sm:text-sm flex justify-end"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠤᠩᠰᠢᠬᠤ
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:flex flex-col justify-start items-center gap-2">
        <Button text={<ChevronUp />} type="chevron" onClick={handlePrevSlide} />
        <p
          className="text-[10px] sm:text-sm"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          {toMongolianNumeral(currentSlide)}/{toMongolianNumeral(slides.length)}
        </p>
        <Button
          text={<ChevronDown />}
          type="chevron"
          onClick={handleNextSlide}
        />
      </div>
    </div>
  );
}
