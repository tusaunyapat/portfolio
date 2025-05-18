"use client";
export default function Experience() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 h-full overflow-y-hidden ">
      <h2 className="text-5xl font-extrabold text-white mb-12">Experience</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-5xl text-white">
        {/* Education */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2022 - Present</time>
            <div className="text-lg font-black">Chulalongkorn University</div>
            Bachelor of Engineering in Computer Engineering
            <br />
            GPA: 3.76
            <br />
            Studying core topics in software development, machine learning, and
            systems engineering.
          </div>
          <hr />
        </li>

        {/* Internship: Frontend Developer */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">June - Aug 2024</time>
            <div className="text-lg font-black">
              Frontend Developer Intern, Mycourseville Co., Ltd.
            </div>
            Developed web pages for a reporting system with complex UI and UX
            using PHP, AJAX, jQuery, and TailwindCSS.
            <br />
            Built dynamic input fields with CRUD operations integrated with
            MySQL.
            <br />
            Contributed to other projects using Next.js, TypeScript, and API
            integrations.
          </div>
          <hr />
        </li>

        {/* Internship: UX/UI Designer */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">June - Aug 2024</time>
            <div className="text-lg font-black">
              UX/UI Designer Intern, Mycourseville Co., Ltd.
            </div>
            Conducted user research and stakeholder interviews to define
            requirements.
            <br />
            Designed wireframes and interactive prototypes using Figma.
            <br />
            Collaborated closely with developers to align design and
            functionality.
          </div>
        </li>
      </ul>
    </div>
  );
}
