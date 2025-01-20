import About from "@/components/about";
import Contact from "@/components/contact";
import Experiencie from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Tecnologies from "@/components/tecnologies";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Tecnologies />
      <Experiencie />
      <Contact />
    </main>
  );
}
