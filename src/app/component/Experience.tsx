"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

export default function Experience() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [replay, setReplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          controls.start({ opacity: 1, y: 0 });
          setReplay(true); // Trigger replay when visible
        } else {
          controls.start({ opacity: 0, y: 20 });
          setReplay(false); // Stop replay when not visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const experienceData = [
    {
      title: "Frontend Development",
      content:
        "Developed web pages for a comprehensive reporting system, incorporating intricate UI designs and UX functionalities.",
      image: "",
      details:
        "In my role as a Frontend Developer at Mycourseville Co., Ltd., I contributed to developing a comprehensive reporting system, creating dynamic web pages that incorporated intricate UI designs and UX functionalities. I employed technologies such as HTML, CSS, PHP, AJAX, and jQuery, alongside TailwindCSS for responsive design. Additionally, I assisted in developing dynamic websites using Next.js with TypeScript, showcasing my adaptability and willingness to learn new frameworks.",
      company: "MyCourseville Co.,Ltd.",
      time: "June - July 2024",
      tools: ["PHP", "jQuery", "AJAX", "MySQL"],
    },
    {
      title: "UX/UI Designer",
      content:
        "Created wireframes and prototypes using Figma to visualize design concepts and enhance user experience. Presented design iterations to team members, incorporating feedback to refine designs.",
      image: "",
      details:
        "As a UX/UI designer, I conducted user research and developed wireframes and prototypes using Figma, enhancing user experience and effectively collaborating with cross-functional teams. This experience has honed my communication skills and reinforced my understanding of the importance of user-centered design.",
      company: "MyCourseville Co.,Ltd.",
      time: "June 2024",
      tools: ["Figma"],
    },

    // Add more experience objects as needed...
  ];

  return (
    <div className="flex flex-col justify-center gap-10 px-2 w-full items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-md items-center flex flex-row justify-center w-full text-base`}
      >
        <p className="text-5xl sm:text-7xl font-bold">Experience</p>
      </motion.div>
      <motion.div
        className={`text-md items-center flex flex-col text-base w-full justify-center`}
      >
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={replay ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Delay for each card
          >
            <Card
              title={experience.title}
              content={experience.content}
              details={experience.details}
              tools={experience.tools}
              company={experience.company}
              time={experience.time}
              buttonText="Show More"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
