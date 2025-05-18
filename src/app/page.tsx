// import Image from "next/image";
import Banner from "./component/Banner";
import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Project from "./component/Project";
export default function Home() {
  return (
    <div className="w-full grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen bg-slate-950   font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      {/* <Header /> */}

      {/* Main Content */}
      <div className="flex flex-col w-full h-screen text-slate-700 px-4 md:px-10 snap-y snap-mandatory overflow-scroll scrollbar-hide scroll-smooth">
        <section id="home" className="min-h-screen h-full p-2 snap-start">
          <Banner />
        </section>
        <section id="about" className="min-h-screen h-full p-2 snap-start">
          <About />
        </section>
        <section id="project" className="min-h-screen h-full p-2 snap-start">
          <Project />
        </section>
        <section id="experience" className="min-h-screen h-full p-2 snap-start">
          <Experience />
        </section>
        <section id="contact" className="min-h-screen h-full p-2 snap-start">
          <Contact />
        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
