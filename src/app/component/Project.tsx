"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

export default function Project() {
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

  const projectData = [
    {
      title: "CoffeeMan",
      content:
        "Developed a complex game project using Java with an object-oriented programming (OOP) approach, incorporating principles such as inheritance and polymorphism.",
      image: "",
      details:
        "During my academic journey, I undertook a game development project using Java, where I applied object-oriented programming (OOP) principles such as inheritance and polymorphism. This experience allowed me to strengthen my understanding of modular design and algorithmic efficiency, as I built a complex, interactive game. It demonstrated my ability to manage multiple interconnected components, optimize performance, and develop maintainable code—a skill set I am eager to bring to new challenges in software development.",
      company: "",
      time: "December 2023",
      tools: ["Java", "OOP"],
    },
    {
      title: "Machine Learning in Healthcare",
      content:
        "Developed a machine learning model to classify chest X-rays as either normal or indicating pneumonia.",
      image: "",
      details:
        "I have developed a machine learning model capable of classifying chest X-rays as either normal or indicating pneumonia. This project involved building a custom model, applying dataset filters, and optimizing the approach using pre-trained models from established libraries, demonstrating my ability to work with complex data-driven tasks.",
      company: "",
      time: "September 2024",
      tools: ["Pytorch", "Kaggle"],
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
        <p className="text-[4rem] font-bold">Projects</p>
      </motion.div>
      <motion.div
        className={`text-md items-center flex flex-col text-base w-full justify-center`}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={replay ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Delay for each card
          >
            <Card
              title={project.title}
              content={project.content}
              details={project.details}
              image={project.image}
              tools={project.tools}
              company={project.company}
              time={project.time}
              buttonText="Show More"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
