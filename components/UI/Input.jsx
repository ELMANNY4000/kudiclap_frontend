export default function Input({ label, type = "text", name, placeholder, value, onChange, required = false, className = "" }) {
  return (
    <div className="mb-4 text-left">
      {label && <label className="block text-[#B0B0B0] text-sm mb-2">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-3 rounded-lg bg-[#1A1A1A] text-white border border-[#333] focus:border-[#00FF85] focus:outline-none transition-colors ${className}`}
      />
    </div>
  );
}