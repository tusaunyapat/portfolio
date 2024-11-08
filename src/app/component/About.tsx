"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import { useState } from "react";
import Link from "next/link";
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

  return (
    <div className="flex flex-col justify-center gap-10 px-2 w-full  items-center min-h-screen pt-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`text-md items-center flex flex-row justify-center w-full text-base `}
      >
        <p className="text-5xl sm:text-7xl font-bold">About Me</p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-md items-center md:items-end flex flex-col  text-justify md:w-9/12 justify-center`}
      >
        <Link href="/assets/resume28102024.pdf" target="_blank">
          <button className="px-4 py-2 text-white my-0 bg-slate-600 rounded hover:bg-white hover:text-slate-600 hover:border hover:border-slate-600">
            see my resume
          </button>
        </Link>
        <p className="text-xl">
          Hi! I’m Tus, a Computer Engineering student with a keen interest in{" "}
          <span className="font-bold">web development</span> and{" "}
          <span className="font-bold">machine learning</span>. Currently in
          third year, I’ve gained experience in data structures, algorithms,
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
        <p className="text-[2rem] font-bold my-4">My Education</p>
        <Timeline />
        <div className="my-10">
          <p className="text-[2rem] font-bold mt-10">My Certificate</p>
          <Image
            alt="ML cert."
            src="/assets/ml.png"
            width={800}
            height={600}
            className="my-4"
          />
          <p>
            I have learned Supervised Machine learning : Regression and
            Classification on Coursera and graded 99.26% within 7 days.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
