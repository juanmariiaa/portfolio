import picture from "@/public/picture.jpeg";
import { FaUnity } from "react-icons/fa";
import React from "react";

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
    tags: [React.createElement(FaUnity), "C#"],
    imageUrl: picture,
  },
] as const;
