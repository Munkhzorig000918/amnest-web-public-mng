export default function SectionTitle({
  title,
  className = "text-2xl font-bold pl-2",
  containerClassName,
  button = null,
}) {
  return (
    <div
      className={`${containerClassName} h-full flex items-center justify-center border border-[#E3E3E3] rounded-xl p-8`}
    >
      <h2
        className={`${className} text-2xl font-bold pl-2`}
        style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
      >
        {title}
      </h2>
      {button && button}
    </div>
  );
}
