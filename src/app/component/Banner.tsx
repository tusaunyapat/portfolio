import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className="text-slate-700 flex flex-col items-center justify-center leading-tight min-h-screen">
      <p
        className={`${styles.trackingInExpand} text-slate-200 text-5xl z-50 lg:text-9xl md:text-[6rem] font-bold  dark:text-white text-center `}
      >
        Aunyapat N.
      </p>

      {/* Second Line Text */}
      <p
        className={`${styles.trackingInExpand} text-2xl sm:text-4xl text-slate-400 p-2 z-50 lg:text-6xl font-bold text-center leading-tight`}
      >
        Computer Engineering Student
      </p>
    </div>
  );
}
