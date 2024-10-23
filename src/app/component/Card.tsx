// components/Card.tsx

import Image from "next/image";
// import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";
interface CardProps {
  title: string;
  content: string;
  img?: string; // Optional image URL
  company?: string;
  time?: string;
  details?: string; // Optional details to show when expanded
  buttonText?: string; // Optional button text
  tools?: string[];
  repo?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  img,
  company,
  time,
  details,
  buttonText,
  tools,
  repo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full lg:w-[60rem] rounded overflow-hidden shadow-lg bg-white mb-10">
      {" "}
      {/* Set fixed width here */}
      {img && (
        <Image
          className="w-full h-48 md:h-96 object-cover"
          src={img}
          alt={title}
        />
      )}
      <div className="px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="font-bold text-xl mb-2 flex flex-col">
            <p>{title}</p>
            <p className="text-sm font-normal text-slate-500 sm:hidden my-1">
              {time}
            </p>
            <ul className="flex flex-row text-slate-400 flex-wrap">
              {tools?.map((tool, index) => (
                <li
                  key={index}
                  className="text-sm px-2 py-1 my-1 rounded-md border border-slate-400 font-normal mr-2"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="font-bold text-xl mb-2 flex flex-col items-end">
            <p>{company}</p>
            <p className="text-sm font-normal text-slate-500 hidden sm:block">
              {time}
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-base">{content}</p>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? "h-auto" : "h-0"
          }`}
        >
          <div
            className={`mt-4 text-gray-600 text-sm ${
              isExpanded ? "block" : "hidden"
            }`}
          >
            <p>{details}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-6 py-4 justify-end gap-4">
        {repo ? (
          <Link
            href={repo}
            className="bg-slate-400 text-sm text-white font-bold py-2 px-4 rounded hover:bg-slate-700 transition duration-200"
          >
            Repository
          </Link>
        ) : null}
        <button
          onClick={toggleExpand}
          className="bg-slate-500 text-sm text-white font-bold py-2 px-4 rounded hover:bg-slate-700 transition duration-200"
        >
          {isExpanded ? "Show Less" : buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
