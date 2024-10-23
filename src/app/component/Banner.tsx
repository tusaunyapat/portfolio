import IconSVG from "./Icon";

export default function Banner() {
  return (
    <div className="text-slate-700 flex flex-col items-start sm:items-center justify-start sm:justify-center min-h-screen leading-tight">
      {/* Scaled Icon centered */}
      <div className="opacity-15">
        <IconSVG />
      </div>

      {/* First Line Text with margin */}
      <div className="relative sm:absolute">
        <p className="text-5xl z-50 lg:text-9xl md:text-[6rem] font-bold text-slate-400 dark:text-white text-center ">
          AUNYAPAT
        </p>

        {/* Second Line Text */}
        <p className="text-3xl sm:text-4xl z-50 lg:text-6xl font-bold text-center leading-tight">
          Computer Engineering Student
        </p>
      </div>
    </div>
  );
}
