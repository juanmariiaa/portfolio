import plataformas from "@/public/plataformas.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaUnity } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
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
    name: "Inicio",
    hash: "#inicio",
  },
  {
    name: "Sobre mi",
    hash: "#sobre-mi",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Tecnologías",
    hash: "#tecnologias",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const projectsData = [
  {
    title: "Plataformas 2D",
    description:
      "Se trata de un videojuego de plataformas desarrollado en Unity y C#. El juego cuenta con 2 niveles con una dificultad fácil. Este proyecto me permitió aprender y aplicar conceptos clave del desarrollo de videojuegos.",
    tags: [
      { name: "Unity", icon: FaUnity },
      { name: "C#", icon: null },
    ],
    imageUrl: plataformas,
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

export const experiencesData = [
  {
    title: "Asesor comercial",
    company: "Varias empresas",
    location: "Córdoba, España",
    description:
      "Aprendí a adaptarme constantemente para lograr el éxito debido al entorno dinámico y competitivo que caracteriza este sector.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Tesorero y formador",
    company: "CDU Debate",
    location: "Córdoba, España",
    description:
      "Ser parte de la junta directiva de CDU me permitió desarrollar habilidades en la gestión y organización de actividades, como torneos nacionales y escolares, y formaciones de oratoria. Además, liderar equipos y coordinar proyectos fortaleció mis soft skills, que considero una parte imprescindible para progresar profesionalmente.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
] as const;
