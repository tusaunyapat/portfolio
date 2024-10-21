// import Image from "next/image";
import Banner from "./component/Banner";
import Header from "./component/Header";

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

        <section id="about" className="min-h-screen bg-green-200 p-2 pt-16">
          <h1 className="text-4xl font-bold">About Section</h1>
          <p>This is the about section.</p>
        </section>

        <section id="project" className="min-h-screen bg-yellow-200 p-2 pt-16">
          <h1 className="text-4xl font-bold">Services Section</h1>
          <p>Here are our project.</p>
        </section>

        <section id="contact" className="min-h-screen bg-red-200 p-2 pt-16">
          <h1 className="text-4xl font-bold">Contact Section</h1>
          <p>Get in touch with us!</p>
        </section>
      </div>
    </div>
  );
}
