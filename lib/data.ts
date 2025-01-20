import picture from "@/public/picture.jpeg";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Plataformas 2D",
    description:
      "Se trata de un videojuego de plataformas desarrollado en Unity y C#. El juego cuenta con 2 niveles con una dificultad fácil. Este proyecto me permitió aprender y aplicar conceptos clave del desarrollo de videojuegos.",
    tags: ["Unity", "C#"],
    imageUrl: picture,
  },
  {
    title: "OTRO",
    description:
      "dsafUnity y C#. El juego cuenta con 2 niveles con una dificultad fácil. Este proyecto me permitió aprender y aplicar conceptos clave del desarrollo de videojuegos.",
    tags: ["ddfdf", "dfdf#"],
    imageUrl: picture,
  },
] as const;

export const skillsData = [
  { name: "JAVA", icon: FaJava },
  { name: "SpringBoot", icon: SiSpringboot },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: GrMysql },
] as const;
