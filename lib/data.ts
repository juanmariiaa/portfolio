import picture from "@/public/picture.jpeg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact, FaUnity } from "react-icons/fa";
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
    tags: [
      { name: "Unity", icon: FaUnity },
      { name: "C#", icon: FaUnity },
    ],
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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    company: "Ironhack",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    company: "Ironhack",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    company: "Ironhack",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
