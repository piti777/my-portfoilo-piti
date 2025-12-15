export default function Logo({ isDarkMode }) {
  return (
    <div className="flex items-center">
      <span
        className={`text-3xl md:text-4xl font-bold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Phiti
      </span>
      <span className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full ml-1"></span>
    </div>
  );
}
