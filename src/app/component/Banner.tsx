import React from "react";

// You can define the types for props if you want to pass them to the component
interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="text-slate-700 flex flex-col items-start md:items-center justify-center min-h-screen leading-tight">
      <p className="text-[6rem] font-bold text-slate-400 text-center sm:text-start">
        AUNYAPAT
      </p>
      <p className="text-[3rem] md:text-[5rem] font-bold text-center sm:text-start h-auto leading-tight ">
        Computer Engineering Student
      </p>
    </div>
  );
};

export default Banner;
