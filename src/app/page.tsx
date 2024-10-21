// import Image from "next/image";
import Banner from "./component/Banner";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Project from "./component/Project";
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen  pb-20 gap-16 px-4 md:px-10 font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <section id="home" className="min-h-screen p-2 pt-16">
          <Banner />
        </section>

        <section id="about" className="min-h-screen p-2">
          <About />
        </section>

        <section id="project" className="min-h-screen  p-2 pt-24">
          <Project />
        </section>

        <section id="experience" className="min-h-screen p-2 pt-24">
          <Experience />
        </section>

        <section id="contact" className="min-h-screen  p-2 pt-24">
          <Contact />
        </section>
      </div>
    </div>
  );
}
