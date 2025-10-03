export default function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <div className="relative w-[200px] h-[7px] rounded-full bg-black/20 overflow-hidden">
      <span className="absolute top-0 left-0 h-full w-0 rounded-full bg-[#0071e2] [animation:moving_1s_ease-in-out_infinite]"></span>
    </div>
    </div>
  );
}
