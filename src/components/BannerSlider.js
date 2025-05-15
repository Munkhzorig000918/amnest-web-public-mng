import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function BannerSlider({ images, width = "100%" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };
  
  useEffect(() => {
    if (isAutoPlaying) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);
  
  // Get width in pixels for calculations
  const widthValue = typeof width === 'string' && width.endsWith('rem') 
    ? parseFloat(width) * 16 
    : (width === '100%' ? '100%' : parseFloat(width));
  
  return (
    <div 
      className="relative h-full overflow-hidden m-4"
      style={{ width }}
    >
      {/* Banner Images */}
      <div 
        className="h-full flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          width: '100%'
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="h-full relative flex-shrink-0"
            style={{ width: '100%' }}
          >
            <Image 
              src={image.src} 
              alt={image.alt || `Banner image ${index + 1}`} 
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-xl"
              priority={index === 0}
            />
            {image.caption && (
              <div className="absolute h-full top-0 left-0 bg-black/50 backdrop-blur-lg text-white max-w-xs rounded flex gap-8 p-16">
                <h3 className="text-2xl font-bold mb-3" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠢᠮᠫᠤᠽᠢᠦᠮ ᠒᠐᠒᠕</h3>
                <p className="text-gray-200" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>«ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠢᠮᠫᠤᠽᠢᠦᠮ ᠒᠐᠒᠕- ᠳ᠋ᠤ» ᠢᠯᠡᠳᢈᠡᠯ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠬᠤ</p>
                <button className="bg-[#FFFF00] rounded-[10px] w-[50px] h-[200px] py-4 flex items-center justify-center shadow-md hover:brightness-105 transition-all" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
                  <p className="pl-2 font-bold text-black">ᠪᠦᢈᠦ ᠮᠡᠳᠡᢉᠡ ᠶ᠋ᠢ ᠦᠵᠡᢈᠦ</p>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute right-10 bottom-10 flex justify-center gap-3 z-10">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Controls */}
      {/* <button 
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-3 rounded-full text-white z-10 transition-all duration-300"
        aria-label="Previous slide"
      >
        <Icon icon="lucide:chevron-left" fontSize={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-3 rounded-full text-white z-10 transition-all duration-300"
        aria-label="Next slide"
      >
        <Icon icon="lucide:chevron-right" fontSize={24} />
      </button> */}
      
      {/* Autoplay Control */}
      {/* <button 
        onClick={toggleAutoPlay}
        className="absolute top-5 right-5 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white z-10 transition-all duration-300"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        <Icon icon={isAutoPlaying ? "lucide:pause" : "lucide:play"} fontSize={20} />
      </button> */}
    </div>
  );
} 