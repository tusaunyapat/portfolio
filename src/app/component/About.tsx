"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
// import { useState } from "react";
import Timeline from "./Timeline";
export default function About() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  // const [replay, setReplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          controls.start({ opacity: 1, y: 0 });
          // setReplay(true); // Trigger replay when visible
        } else {
          controls.start({ opacity: 0, y: 20 });
          // setReplay(false); // Stop replay when not visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

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
    <div className="flex flex-col justify-center gap-10 px-2 w-full  items-center min-h-screen">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-md items-center flex flex-row justify-center w-full  text-base `}
      >
        <p className="text-5xl sm:text-7xl font-bold">About Me</p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-md items-center md:items-start flex flex-row  text-justify md:w-9/12 justify-center`}
      >
        <p className="text-xl">
          Hi! I’m Tus, a Computer Engineering student with a keen interest in{" "}
          <span className="font-bold">web development</span> and{" "}
          <span className="font-bold">software engineering</span>. Currently in
          my third year, I’ve gained experience in data structures, algorithms,
          software and hardware development, as well as{" "}
          <span className="-bold">machine learning</span> . I’m passionate about
          creating innovative web solutions and exploring data engineering. I’m
          actively seeking an <span className="font-bold">internship </span> to
          apply my skills in a real-world setting and contribute to impactful
          projects.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-md items-start flex flex-col  text-base w-full md:w-9/12 justify-center `}
      >
        <p className="text-[2rem] font-bold mb-4">My Education</p>
        <Timeline />
      </motion.div>
    </div>
  );
}
