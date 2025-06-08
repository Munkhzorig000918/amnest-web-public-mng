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
import SectionTitle from "@/components/common/SectionTitle";

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

export default function AssemblySwiper({ title, description, sectionTitle }) {
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

  const slides = [
    {
      id: 1,
      title: "᠒᠐᠒᠔ ᠣᠨ: ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠠᠶᠢᠯᠤᠨ",
      image: "/images/dummy-image.png",
    },
    {
      id: 2,
      title: "᠒᠐᠒᠔ ᠣᠨ: ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠠᠶᠢᠯᠤᠨ",
      image: "/images/dummy-image.png",
    },
    {
      id: 3,
      title: "᠒᠐᠒᠔ ᠣᠨ: ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠠᠶᠢᠯᠤᠨ",
      image: "/images/dummy-image.png",
    },
    {
      id: 4,
      title: "᠒᠐᠒᠔ ᠣᠨ: ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠠᠶᠢᠯᠤᠨ",
      image: "/images/dummy-image.png",
    },
    {
      id: 5,
      title: "᠒᠐᠒᠔ ᠣᠨ: ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠠᠶᠢᠯᠤᠨ",
      image: "/images/dummy-image.png",
    },
    {
      id: 6,
      title: "᠒᠐᠒᠔ ᠣᠨ: ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠤ᠋ ᠲᠠᠶᠢᠯᠤᠨ",
      image: "/images/dummy-image.png",
    },
  ];

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

  return (
    <div className="h-full flex flex-col sm:flex-row gap-8 p-4">
      <div className="flex gap-2 sm:gap-8 max-h-[150px] sm:max-h-max">
        <h1
          className="text-[10px] sm:text-2xl font-bold"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          {title}
        </h1>
        <p
          className="text-[10px] sm:text-sm font-bold text-[#848382] sm:text-black"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          {description}
        </p>
      </div>
      <SectionTitle title={sectionTitle} containerClassName="hidden sm:block" />
      <div className="flex flex-row gap-2">
        <p
          className="text-[10px] font-bold block sm:hidden"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          {sectionTitle}
        </p>
        <Swiper
          direction={isMobile ? "horizontal" : "vertical"}
          slidesPerView={isMobile ? 1.3 : 3}
          spaceBetween={isMobile ? 20 : 40}
          navigation={false}
          pagination={false}
          modules={[Navigation, Pagination]}
          className="h-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`w-full h-full flex gap-4`}>
                <div className="flex flex-col items-center gap-4 justify-between">
                  <p
                    className="text-sm font-bold"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {slide.title}
                  </p>
                </div>
                <img
                  src={slide.image}
                  alt={""}
                  className={`rounded-lg shadow-lg relative z-0 ${
                    isMobile
                      ? "w-full max-w-[200px] aspect-[16/9]"
                      : "min-w-[200px] aspect-[9/16]"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-row sm:flex-col justify-center sm:justify-start items-center gap-2">
        <Button
          text={isMobile ? <ChevronLeft /> : <ChevronUp />}
          type="chevron"
          onClick={handlePrevSlide}
        />
        <p className="text-sm">
          {toMongolianNumeral(currentSlide)}/{toMongolianNumeral(slides.length)}
        </p>
        <Button
          text={isMobile ? <ChevronRight /> : <ChevronDown />}
          type="chevron"
          onClick={handleNextSlide}
        />
      </div>
    </div>
  );
}
