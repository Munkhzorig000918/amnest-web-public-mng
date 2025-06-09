export default function Button({
  text,
  onClick,
  type = "primary",
  className = "",
}) {
  let buttonClasses;

  if (type === "primary") {
    buttonClasses = `${className} bg-[#FFFF00] rounded-[8px] sm:rounded-[10px] sm:w-[50px] py-3 sm:py-6 px-1 sm:px-0 max-h-10 sm:max-h-max flex flex-col gap-2 items-center justify-center hover:brightness-105 transition-all text-xs sm:text-base`;
  } else if (type === "secondary") {
    buttonClasses = `${className} border border-solid border-[#E3E3E3] rounded-[8px] sm:rounded-[10px] w-6 sm:w-[50px] max-h-min whitespace-nowrap py-3 flex items-center justify-center hover:brightness-105 transition-all`;
  } else if (type === "details") {
    buttonClasses = `${className} text-sm flex justify-end absolute bottom-0 right-0 z-10 bg-[#FFFFFF99] px-2 py-4 rounded-lg`;
  } else if (type === "chevron") {
    buttonClasses = `${className} border border-solid border-[#E3E3E3] w-10 h-10 rounded-full flex justify-center items-center p-2 hover:bg-gray-100 transition-all`;
  } else if (type === "banner") {
    buttonClasses = `${className} text-[10px] sm:text-sm z-10 bg-[#FFFFFF99] opacity-60 px-2 py-4 rounded-lg`;
  } else {
    buttonClasses = `${className} border border-solid border-[#E3E3E3] rounded-[10px] w-[50px] py-6 flex items-center justify-center hover:brightness-105 transition-all`;
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
    >
      <p
        className={`${
          type !== "chevron" && "pl-1 sm:pl-2"
        } font-bold text-[10px] sm:text-base`}
      >
        {text}
      </p>
    </button>
  );
}
