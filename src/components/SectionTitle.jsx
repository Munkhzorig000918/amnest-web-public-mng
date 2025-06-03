export default function SectionTitle({
  title,
  className = "text-2xl font-bold pl-2",
  containerClassName = "h-full flex items-center justify-center border border-[#E3E3E3] rounded-xl p-8",
  button = null,
}) {
  return (
    <div className={containerClassName}>
      <h2
        className={className}
        style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
      >
        {title}
      </h2>
      {button && button}
    </div>
  );
}
