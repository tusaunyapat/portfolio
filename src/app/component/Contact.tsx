"use client";
import React from "react";
import {
  FiPhone,
  FiMail,
  FiGithub,
  FiMapPin,
  //   FiLinkedin,
} from "react-icons/fi";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  //   const [replay, setReplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          controls.start({ opacity: 1, y: 0 });
          //   setReplay(true); // Trigger replay when visible
        } else {
          controls.start({ opacity: 0, y: 20 });
          //   setReplay(false); // Stop replay when not visible
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`text-md items-center flex flex-row justify-center w-full text-base`}
    >
      <div className="min-h-screen py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            <FiPhone className="text-slate-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +66 95-950-1622
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            <FiMail className="text-slate-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                aunyapat.nit@gmail.com
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            <FiGithub className="text-slate-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                GitHub
              </h3>
              <a
                href="https://github.com/tusaunyapat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:underline dark:text-blue-400"
              >
                github.com/tusaunyapat
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
          <FiLinkedin className="text-blue-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              LinkedIn Profile
            </a>
          </div>
        </div> */}

          {/* Address */}
          <div className=" p-6 rounded-lg shadow-lg flex items-center">
            <FiMapPin className="text-slate-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 ">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Phasi-Charoen, Bangkok, Thailand
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
