import About from "@/components/about";
import Contact from "@/components/contact";
import Experiencie from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Tecnologies from "@/components/tecnologies";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex-col w-full min-h-full bg-primary flex items-center justify-center text-white">
        <Intro />
      </section>

      <section className="text-white w-full flex bg-secondary flex-col items-center justify-center">
        <About />
      </section>

      <section className="text-white bg-fourth w-full flex flex-col items-center justify-center">
        <Projects />
      </section>

      <section className="text-white w-full flex flex-col items-center justify-center">
        <Tecnologies />
      </section>

      <section className="text-white w-full flex flex-col items-center justify-center">
        <Experiencie />
      </section>

      <section className="text-white w-full flex flex-col items-center justify-center">
        <Contact />
      </section>
    </main>
  );
}