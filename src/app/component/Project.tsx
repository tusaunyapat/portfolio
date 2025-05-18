"use client";
import { useRef } from "react";

const projects = [
  {
    title: "Chest X-ray Pneumonia Detection",
    category: "Data Science",
    description:
      "A CNN-based machine learning model for classifying chest X-rays.",
    detail:
      "Built a custom convolutional neural network and applied dataset filtering. Improved performance using transfer learning with pre-trained models.",
    link: "",
    image: "https://source.unsplash.com/400x200/?xray,healthcare,ai",
  },
  {
    title: "Stock Prediction and Forecasting",
    category: "Data Science",
    description: "An LSTM model for time-series stock price forecasting.",
    detail:
      "Used historical data from Yahoo Finance to train an LSTM model for stock price forecasting. Focused on time-series preprocessing and trend evaluation.",
    link: "",
    image: "https://source.unsplash.com/400x200/?stocks,finance,data",
  },
  {
    title: "Loan Approval Prediction",
    category: "Data Science",
    description:
      "A machine learning model to predict loan approval eligibility.",
    detail:
      "Implemented multiple classifiers and optimized a neural network using Keras Tuner. Achieved 94% accuracy by refining hyperparameters.",
    link: "",
    image: "https://source.unsplash.com/400x200/?loan,approval,ai",
  },
  {
    title: "Loan Approval Prediction",
    category: "Data Science",
    description:
      "A machine learning model to predict loan approval eligibility.",
    detail:
      "Implemented multiple classifiers and optimized a neural network using Keras Tuner. Achieved 94% accuracy by refining hyperparameters.",
    link: "",
    image: "https://source.unsplash.com/400x200/?loan,approval,ai",
  },
  {
    title: "Loan Approval Prediction",
    category: "Data Science",
    description:
      "A machine learning model to predict loan approval eligibility.",
    detail:
      "Implemented multiple classifiers and optimized a neural network using Keras Tuner. Achieved 94% accuracy by refining hyperparameters.",
    link: "",
    image: "https://source.unsplash.com/400x200/?loan,approval,ai",
  },
  {
    title: "Java Game Development",
    category: "Web Development",
    description: "An object-oriented game built with Java.",
    detail:
      "Developed a full-featured game applying OOP principles like inheritance, encapsulation, and polymorphism. Demonstrated interactive gameplay and design patterns.",
    link: "",
    image: "https://source.unsplash.com/400x200/?game,java,oop",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative w-full m-2 p-2 perspective transition-all duration-300 lg:opacity-60 hover:opacity-100 hover:z-10 transform h-auto min-h-[22rem] flex flex-col">
      <input
        type="checkbox"
        id={`flip-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
        className="hidden peer"
      />
      <div className="w-full h-full transition-transform duration-500 [transform-style:preserve-3d] peer-checked:[transform:rotateY(180deg)] flex-1 relative">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl shadow-lg flex flex-col justify-between bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <div className="flex flex-col flex-1">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 mb-4 line-clamp-3">
              {project.description}
            </p>
            <label
              htmlFor={`flip-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="mt-auto inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer text-center"
            >
              View Details
            </label>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden bg-slate-800 rounded-xl shadow-lg p-2 flex flex-col [transform:rotateY(180deg)] opacity-100">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 mb-4">{project.detail}</p>
            <div className="flex flex-row gap-2 mt-auto relative">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-slate-700 hover:bg-slate-900 mb-2 w-1/2"
              >
                Github
              </a>
              <label
                htmlFor={`flip-${project.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="btn mb-2 bg-slate-400 hover:bg-slate-500 w-1/2"
              >
                Back
              </label>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

export default function Project() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const dataScienceProjects = projects.filter(
    (p) => p.category === "Data Science"
  );
  const webDevProjects = projects.filter(
    (p) => p.category === "Web Development"
  );

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 h-full overflow-y-hidden">
      <h2 className="text-5xl font-extrabold text-white mb-12">Projects</h2>

      {/* Data Science Carousel */}
      <h3 className="text-3xl font-bold text-white mb-4">Data Science</h3>
      <div
        className="w-full flex gap-6 px-2 overflow-x-auto carousel carousel-center xl:max-w-5xl 2xl:max-w-7xl mb-12"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {dataScienceProjects.map((project, idx) => (
          <div
            className="carousel-item flex-shrink-0 w-full xl:w-1/2 2xl:w-1/3 bg-slate-800 rounded-lg shadow-lg"
            key={`ds-${project.title}-${idx}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Web Dev Carousel */}
      <h3 className="text-3xl font-bold text-white mb-4">Web Development</h3>
      <div
        className="w-full flex gap-6 px-2 overflow-x-auto carousel carousel-center xl:max-w-5xl 2xl:max-w-7xl"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {webDevProjects.map((project, idx) => (
          <div
            className="carousel-item flex-shrink-0 w-full xl:w-1/2 2xl:w-1/3 bg-slate-800 rounded-lg shadow-lg"
            key={`web-${project.title}-${idx}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <p className="mt-6 text-white">Swipe to see more</p>
    </section>
  );
}
