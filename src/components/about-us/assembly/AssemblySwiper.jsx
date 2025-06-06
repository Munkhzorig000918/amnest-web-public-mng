import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/common/Button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

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

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function AssemblySwiper() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const { toMongolianNumeral } = useMongolianNumeral();

  const slides = [
    {
      id: 1,
      image: "https://www.youtube.com/watch?v=F5jCTOgfuw0",
    },
    {
      id: 2,
      image: "https://www.youtube.com/watch?v=F5jCTOgfuw0",
    },
    {
      id: 3,
      image: "https://www.youtube.com/watch?v=F5jCTOgfuw0",
    },
    {
      id: 4,
      image: "https://www.youtube.com/watch?v=F5jCTOgfuw0",
    },
    {
      id: 5,
      image: "https://www.youtube.com/watch?v=F5jCTOgfuw0",
    },
    {
      id: 6,
      image: "https://www.youtube.com/watch?v=F5jCTOgfuw0",
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
        {slides.map((slide) => {
          const videoId = getYouTubeVideoId(slide.image);
          return (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full flex gap-4">
                <div className="relative z-0 aspect-square">
                  {videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`Video ${slide.id}`}
                      className="rounded-lg aspect-square min-h-[270px] min-w-[270px] h-full relative z-0"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="rounded-lg aspect-square min-h-[270px] min-w-[270px] relative z-0 bg-gray-200 flex items-center justify-center">
                      <p>Invalid video URL</p>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
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
