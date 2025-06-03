import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import SectionTitle from "../SectionTitle";

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

export default function RightSwiper({ title, description, sectionTitle }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const { toMongolianNumeral } = useMongolianNumeral();

  const slides = [
    {
      id: 1,
      title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠶᠡᠷᠦᠩᢈᠡᠢ ᠣᠶᠢᠯᠠᠭᠠᠯᠲᠠ",
      image: "/images/dummy-image.png",
      duration: "᠙᠐ ᠮᠢᠨ",
    },
    {
      id: 2,
      title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠶᠡᠷᠦᠩᢈᠡᠢ ᠣᠶᠢᠯᠠᠭᠠᠯᠲᠠ",
      image: "/images/dummy-image.png",
      duration: "᠙᠐ ᠮᠢᠨ",
    },
    {
      id: 3,
      title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠶᠡᠷᠦᠩᢈᠡᠢ ᠣᠶᠢᠯᠠᠭᠠᠯᠲᠠ",
      image: "/images/dummy-image.png",
      duration: "᠙᠐ ᠮᠢᠨ",
    },
    {
      id: 4,
      title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠶᠡᠷᠦᠩᢈᠡᠢ ᠣᠶᠢᠯᠠᠭᠠᠯᠲᠠ",
      image: "/images/dummy-image.png",
      duration: "᠙᠐ ᠮᠢᠨ",
    },
    {
      id: 5,
      title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠶᠡᠷᠦᠩᢈᠡᠢ ᠣᠶᠢᠯᠠᠭᠠᠯᠲᠠ",
      image: "/images/dummy-image.png",
      duration: "᠙᠐ ᠮᠢᠨ",
    },
    {
      id: 6,
      title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠶᠡᠷᠦᠩᢈᠡᠢ ᠣᠶᠢᠯᠠᠭᠠᠯᠲᠠ",
      image: "/images/dummy-image.png",
      duration: "᠙᠐ ᠮᠢᠨ",
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
    <div className="h-full flex gap-8">
      <h1
        className="text-2xl font-bold"
        style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
      >
        {title}
      </h1>
      <p
        className="text-sm font-bold"
        style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
      >
        {description}
      </p>
      <Button text={"ᠪᠦᢉᠦᠳᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ"} type="secondary" />
      <SectionTitle title={sectionTitle} />
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={40}
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
            <div className="w-full h-full flex gap-4">
              <div className="flex flex-col items-center gap-4 justify-between">
                <p
                  className="sm"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {slide.title}
                </p>
                <p
                  className="sm"
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
                  alt={""}
                  className="rounded-lg aspect-square min-h-[270px] min-w-[270px] relative z-0"
                />
                <Button text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"} type="details" />
              </div>

              <p
                className="text-sm flex justify-end"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠲᠤᠩ ᠤᠳᠠᠬᠤ ᠦᢉᠡᠢ
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center gap-2">
        <Button text={<ChevronUp />} type="chevron" onClick={handlePrevSlide} />
        <p
          className="text-sm"
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
