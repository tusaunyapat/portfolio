"use client";
export default function About() {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center p-8 leading-tight">
      {/* <p className=" text-slate-200 text-3xl lg:text-5xl">Who am I?</p> */}
      <section id="about" className="text-slate-300  mx-auto lg:max-w-3xl">
        <h2 className={`text-3xl font-bold mb-6`}>README.md</h2>
        <p className=" text-md sm:text-xl leading-relaxed">
          Hi, I'm <strong>Tus Aunyapat</strong> — a computer engineering student
          who loves solving problems across the stack. Whether it's building web
          apps with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
          <strong>PHP</strong>, or training <strong>Thai NLP models</strong>{" "}
          with <strong>PyTorch Lightning</strong>, I enjoy learning by building.
        </p>
        <p className=" text-md sm:text-xl leading-relaxed mt-4">
          When I’m not debugging something or exploring new tech stacks, I’m
          probably automating workflows, reading about distributed systems, or
          optimizing SQL queries. I'm always looking to learn something new and
          turn ideas into something tangible.
        </p>
      </section>
    </div>
  );
}
