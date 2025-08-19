import Image from "next/image";

export default function StaticHeader({
  image = "/images/news1.png",
  alt = "Header Image",
  width = "90rem",
  title = null,
}) {
  return (
    <div
      className="relative overflow-hidden md:p-4 h-full"
      style={{ width: width }}
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
        )}
      </div>
    </div>
  );
}
