import Image from "next/image";

export default function StaticHeader({
  image = "/images/news1.png",
  alt = "Header Image",
  width = "90rem",
  title = null,
}) {
  // Handle responsive width
  const getResponsiveStyle = () => {
    // If width is a percentage or specific mobile value, use it as is
    if (
      typeof width === "string" &&
      (width.includes("%") || width.includes("px"))
    ) {
      return { width: width };
    }
    // For rem values, make them responsive
    return {
      width: width,
      // On mobile, ensure it doesn't overflow
      maxWidth: "100vw",
    };
  };

  return (
    <div
      className="relative overflow-hidden md:p-4 h-full w-full"
      style={getResponsiveStyle()}
    >
      <div className="h-full relative">
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="md:rounded-xl"
          priority
          onError={(e) => {
            e.target.src = "/images/news1.png"; // fallback image
          }}
        />
        {title && (
          <>
            {/* Desktop Title Overlay */}
            <div className="hidden md:flex absolute h-full top-0 left-0 bg-black/50 backdrop-blur-lg text-white w-full max-w-xs rounded-xl items-center justify-center p-16">
              <h1
                className="text-3xl font-bold font-mongolian text-center"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
              >
                {title}
              </h1>
            </div>

            {/* Mobile Title Overlay */}
            <div className="flex md:hidden absolute inset-0 bg-black/40 backdrop-blur-sm text-white items-center justify-center p-4">
              <h1
                className="text-lg sm:text-xl font-bold font-mongolian text-center px-4 py-2 bg-black/30 rounded-lg backdrop-blur-md"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {title}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
