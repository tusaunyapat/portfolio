// components/IconSVG.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const IconSVG: React.FC = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <div className="flex flex-col items-start sm:items-center justify-center ">
      {/* Static SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-full h-[50vh] sm:h-[100vh]"
      >
        <g id="_34" data-name="34">
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="fill-current text-gray-700"
            d="M405.45,396.89H207.09a2.5,2.5,0,0,1,0-5H405.45a39.08,39.08,0,0,0,39-39,12.79,12.79,0,0,0-12.77-12.78H80.29a12.79,12.79,0,0,0-12.77,12.78,39.08,39.08,0,0,0,39,39h30.1a2.5,2.5,0,0,1,0,5h-30.1a44.08,44.08,0,0,1-44-44,17.8,17.8,0,0,1,17.77-17.78H431.71a17.8,17.8,0,0,1,17.77,17.78A44.08,44.08,0,0,1,405.45,396.89Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M405.45,396.89H207.09a2.5,2.5,0,0,1,0-5H405.45a39.08,39.08,0,0,0,39-39,12.79,12.79,0,0,0-12.77-12.78H80.29a12.79,12.79,0,0,0-12.77,12.78,39.08,39.08,0,0,0,39,39h30.1a2.5,2.5,0,0,1,0,5h-30.1a44.08,44.08,0,0,1-44-44,17.8,17.8,0,0,1,17.77-17.78H431.71a17.8,17.8,0,0,1,17.77,17.78A44.08,44.08,0,0,1,405.45,396.89Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M418.29,373.49H300.67a8.12,8.12,0,0,1-8.11-8.12V356.6a8.12,8.12,0,0,1,8.11-8.11h40.44a2.5,2.5,0,0,1,0,5H300.67a3.11,3.11,0,0,0-3.11,3.11v8.77a3.12,3.12,0,0,0,3.11,3.12H418.29a3.12,3.12,0,0,0,3.12-3.12V356.6a3.12,3.12,0,0,0-3.12-3.11H395.35a2.5,2.5,0,0,1,0-5h22.94a8.12,8.12,0,0,1,8.12,8.11v8.77A8.13,8.13,0,0,1,418.29,373.49Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M96.65,373.49a12.5,12.5,0,1,1,12.5-12.5A12.52,12.52,0,0,1,96.65,373.49Zm0-20a7.5,7.5,0,1,0,7.5,7.5A7.51,7.51,0,0,0,96.65,353.49Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M126.65,373.49a12.5,12.5,0,1,1,12.5-12.5A12.52,12.52,0,0,1,126.65,373.49Zm0-20a7.5,7.5,0,1,0,7.5,7.5A7.51,7.51,0,0,0,126.65,353.49Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M96.65,340.08a2.49,2.49,0,0,1-2.5-2.5V139.7A17.86,17.86,0,0,1,112,121.86h36.44a2.5,2.5,0,0,1,0,5H112A12.85,12.85,0,0,0,99.15,139.7V337.58A2.49,2.49,0,0,1,96.65,340.08Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M415.35,340.08a2.49,2.49,0,0,1-2.5-2.5V139.7A12.85,12.85,0,0,0,400,126.86H226.78a2.5,2.5,0,0,1,0-5H400a17.86,17.86,0,0,1,17.84,17.84V337.58A2.49,2.49,0,0,1,415.35,340.08Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M287.86,330.08h-22a2.5,2.5,0,0,1,0-5h22a7.5,7.5,0,0,0,0-15H224.14a7.5,7.5,0,0,0,0,15h9.27a2.5,2.5,0,1,1,0,5h-9.27a12.5,12.5,0,0,1,0-25h63.72a12.5,12.5,0,0,1,0,25Z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            stroke="black"
            strokeWidth={4}
            className="cls-1"
            d="M384.12,300.08H127.88a13.75,13.75,0,0,1-13.73-13.73V155.59a13.75,13.75,0,0,1,13.73-13.73H384.12a13.75,13.75,0,0,1,13.73,13.73v70.95a2.5,2.5,0,0,1-5,0V155.59a8.74,8.74,0,0,0-8.73-8.73H127.88a8.74,8.74,0,0,0-8.73,8.73V286.35a8.74,8.74,0,0,0,8.73,8.73H384.12a8.74,8.74,0,0,0,8.73-8.73V269.21a2.5,2.5,0,1,1,5,0v17.14A13.75,13.75,0,0,1,384.12,300.08Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconSVG;
