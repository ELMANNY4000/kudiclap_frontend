export default function Button({ children, onClick, variant = "primary", className = "", type = "button", disabled = false }) {
  const baseClasses = "px-6 py-3 rounded-full font-bold transition-all duration-300 font-button disabled:opacity-50";
  
  const variants = {
    primary: "bg-[#00FF85] text-black hover:bg-[#00E670] shadow-glow",
    secondary: "bg-[#FFD700] text-black hover:bg-[#E6C200]",
    dark: "bg-[#1A1A1A] text-white hover:bg-[#252525] border border-[#333]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}