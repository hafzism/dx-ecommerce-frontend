export default function Loader() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4 text-center">
      <div className="relative w-[200px] h-[7px] rounded-full bg-black/20 dark:bg-white/10 overflow-hidden mb-8">
        <span className="absolute top-0 left-0 h-full w-0 rounded-full bg-[#D4A574] dark:bg-[#C89F6F] [moving_1s_ease-in-out_infinite]"></span>
      </div>

      <div className="max-w-sm space-y-3 animate-pulse">
        <h2 className="text-xl sm:text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
          Waking up the server...
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
          Please allow up to a minute for the initial load. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}

