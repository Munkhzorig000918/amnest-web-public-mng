import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import apiService from "@/services/apiService";
import { getImageUrl } from "@/utils/fetcher";

export default function BannerSlider({
  images,
  width = "100%",
  useDynamic = false,
}) {
  console.log("=== BannerSlider Props ===");
  console.log("images:", images);
  console.log("width:", width);
  console.log("useDynamic:", useDynamic);
  console.log("========================");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideshowData, setSlideshowData] = useState([]);
  const [slideshowLoading, setSlideshowLoading] = useState(false);
  const [slideshowError, setSlideshowError] = useState(null);
  const timeoutRef = useRef(null);

  // Fetch dynamic slideshow data if useDynamic is true
  useEffect(() => {
    console.log("useEffect triggered, useDynamic:", useDynamic);
    console.log("apiService:", apiService);
    console.log("apiService.slideshows:", apiService.slideshows);

    if (useDynamic) {
      console.log("Starting to fetch slideshows...");

      const fetchSlideshows = async () => {
        console.log("fetchSlideshows function called");
        setSlideshowLoading(true);
        setSlideshowError(null);

        try {
          console.log("Making API call to slideshows...");
          console.log(
            "Calling apiService.slideshows.getSlideshows with params:",
            {
              page: 1,
              pageSize: 10,
              sort: "publishedAt:desc",
            }
          );

          // Use regular slideshows endpoint since content is in slideshows collection
          const response = await apiService.slideshows.getSlideshows({
            page: 1,
            pageSize: 10,
            sort: "publishedAt:desc",
          });

          console.log("API Response received:", response);
          console.log("Response type:", typeof response);
          console.log("Response.data:", response?.data);
          console.log("Response.data length:", response?.data?.length);

          // The slideshowsService.getSlideshows() uses formatStrapiResponse()
          // which returns the data directly as an array, not wrapped in response.data
          const slideshowsData = Array.isArray(response)
            ? response
            : response?.data || [];

          setSlideshowData(slideshowsData);
          console.log("setSlideshowData called with:", slideshowsData);
        } catch (error) {
          console.error("Error fetching slideshows:", error);
          console.error("Error details:", error.message, error.stack);
          setSlideshowError(error);
        } finally {
          console.log("Setting loading to false");
          setSlideshowLoading(false);
        }
      };

      console.log("About to call fetchSlideshows()");
      fetchSlideshows();
      console.log("fetchSlideshows() called");
    } else {
      console.log("useDynamic is false, skipping API call");
    }
  }, [useDynamic]);

  // Convert slideshow data to banner format
  const dynamicImages = slideshowData
    ? slideshowData.flatMap((slide) => {
        console.log("Processing slide:", slide.id, slide);

        // formatStrapiResponse flattens the structure, so properties are directly on slide
        // Instead of slide.attributes.title, it's slide.title
        console.log("Slide title:", slide.title);
        console.log("Slide body:", slide.body);
        console.log("Slide cover:", slide.cover);
        console.log("Slide images:", slide.images);

        const images = [];

        // Use cover image if available - no .attributes needed after formatStrapiResponse
        const coverImage =
          slide.cover?.data?.attributes ||
          slide.cover?.attributes ||
          slide.cover;
        console.log("Cover image data:", coverImage);

        if (coverImage) {
          const coverImageUrl =
            coverImage?.formats?.large?.url ||
            coverImage?.formats?.medium?.url ||
            coverImage?.formats?.small?.url ||
            coverImage?.url;

          console.log("Cover image URL:", coverImageUrl);

          if (coverImageUrl) {
            const coverSlide = {
              id: `${slide.id}-cover`,
              src: `http://localhost:1337${coverImageUrl}`,
              alt: slide.title || `Slideshow ${slide.id} Cover`,
              caption: {
                title:
                  slide.title ||
                  "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠢᠮᠫᠤᠽᠢᠦᠮ ᠒᠐᠒᠕",
                description:
                  slide.body?.replace(/<[^>]*>/g, "") ||
                  "«ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠢᠮᠫᠤᠽᠢᠦᠮ ᠒᠐᠒᠕- ᠳ᠋ᠤ» ᠢᠯᠡᠳᢈᠡᠯ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠬᠤ",
              },
            };
            console.log("Adding cover slide:", coverSlide);
            images.push(coverSlide);
          }
        }

        // Add additional images from the images array - no .attributes needed after formatStrapiResponse
        const slideImages = slide.images?.data || slide.images || [];
        console.log("Additional images data:", slideImages);

        slideImages.forEach((image, index) => {
          console.log(`Processing additional image ${index}:`, image);
          const imageAttrs = image.attributes || image;
          const imageUrl =
            imageAttrs?.formats?.large?.url ||
            imageAttrs?.formats?.medium?.url ||
            imageAttrs?.formats?.small?.url ||
            imageAttrs?.url;

          console.log(`Additional image ${index} URL:`, imageUrl);

          if (imageUrl) {
            const additionalSlide = {
              id: `${slide.id}-img-${index}`,
              src: `http://localhost:1337${imageUrl}`,
              alt:
                imageAttrs?.alternativeText ||
                slide.title ||
                `Slideshow ${slide.id} Image ${index + 1}`,
              caption: {
                title:
                  slide.title ||
                  "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠢᠮᠫᠤᠽᠢᠦᠮ ᠒᠐᠒᠕",
                description:
                  slide.body?.replace(/<[^>]*>/g, "") ||
                  "«ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠢᠮᠫᠤᠽᠢᠦᠮ ᠒᠐᠒᠕- ᠳ᠋ᠤ» ᠢᠯᠡᠳᢈᠡᠯ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠬᠤ",
              },
            };
            console.log(`Adding additional slide ${index}:`, additionalSlide);
            images.push(additionalSlide);
          }
        });

        console.log("Final images array for this slide:", images);
        return images;
      })
    : [];

  console.log("=== FINAL RESULTS ===");
  console.log("Slideshow data:", slideshowData);
  console.log("Dynamic images:", dynamicImages);
  console.log("Static images:", images);

  // Use dynamic images if available and useDynamic is true, otherwise use static images
  const displayImages =
    useDynamic && dynamicImages.length > 0 ? dynamicImages : images;

  console.log("Display images:", displayImages);
  console.log("Using dynamic:", useDynamic && dynamicImages.length > 0);

  const nextSlide = useCallback(() => {
    if (displayImages && displayImages.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [displayImages]);

  const prevSlide = useCallback(() => {
    if (displayImages && displayImages.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
      );
    }
  }, [displayImages]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-slide effect
  useEffect(() => {
    if (isAutoPlaying && displayImages && displayImages.length > 1) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, displayImages, nextSlide]);

  // Show loading state for dynamic content
  if (useDynamic && slideshowLoading) {
    return (
      <div
        className="relative overflow-hidden md:m-4 h-full flex items-center justify-center bg-gray-100"
        style={{ width: width }}
      >
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

  // Show error state for dynamic content
  if (useDynamic && slideshowError) {
    console.warn(
      "Failed to load slideshow data, falling back to static images"
    );
    // Fall back to static images if provided
    if (!images || images.length === 0) {
      return (
        <div
          className="relative overflow-hidden md:m-4 h-full flex items-center justify-center bg-gray-100"
          style={{ width: width }}
        >
          <p
            className="text-red-600 text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠡᠳᠡᢉᠡ ᠠᠴᠢᠶᠠᠯᠠᠬᠤ ᠳ᠋ᠤ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠪᠠ
          </p>
        </div>
      );
    }
  }

  // If no images to display, show placeholder
  if (!displayImages || displayImages.length === 0) {
    return (
      <div
        className="relative overflow-hidden md:m-4 h-full flex items-center justify-center bg-gray-100"
        style={{ width: width }}
      >
        <p
          className="text-gray-500 text-sm"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠵᠢᠷᠤᠭ ᠦᠭᠡᠢ
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden md:m-4 h-full"
      style={{ width: width }}
    >
      {/* Banner Images */}
      <div
        className="h-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: "100%",
        }}
      >
        {displayImages.map((image, index) => (
          <div
            key={image.id || index}
            className="h-full relative flex-shrink-0"
            style={{ width: "100%" }}
          >
            <Image
              src={image.src}
              alt={image.alt || `Banner image ${index + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="md:rounded-xl"
              priority={index === 0}
              onError={(e) => {
                e.target.src = "/images/news1.png"; // fallback image
              }}
            />
            {image.caption && (
              <div className="hidden md:flex absolute h-full top-0 left-0 bg-black/50 backdrop-blur-lg text-white max-w-xs rounded-xl gap-8 p-16">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  {image.caption.title}
                </h3>
                <p
                  className="text-gray-200"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  {image.caption.description}
                </p>
                <Button
                  text={"ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ"}
                  type="primary"
                  className="text-black h-40"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {displayImages.length > 1 && (
        <div className="absolute right-5 bottom-5 md:right-10 md:bottom-10 flex justify-center gap-2 md:gap-3 z-10">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

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
