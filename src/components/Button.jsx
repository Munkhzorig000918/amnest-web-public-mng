export default function Button({ text, onClick, type = "primary", className = "" }) {
    const buttonClasses = type === "primary" 
        ? `${className} bg-[#FFFF00] rounded-[10px] w-[50px] py-6 flex items-center justify-center hover:brightness-105 transition-all`
        : `${className} border border-solid border-[#E3E3E3] rounded-[10px] w-[50px] py-6 flex items-center justify-center hover:brightness-105 transition-all`;
        
    return (
        <button onClick={onClick} className={buttonClasses} style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
          <p className="pl-2 font-bold">{text}</p>
        </button>
    )
}