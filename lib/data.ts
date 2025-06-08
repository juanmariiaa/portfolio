import plataformas from "@/public/plataformas.png";
import chat from "@/public/chat.png";
import cinemareserve from "@/public/image.png";
import cinemareserve1 from "@/public/861shots_so.png";
import cinemareserve2 from "@/public/846shots_so.png";
import cinemareserve3 from "@/public/280shots_so.png";
import cinemareserve4 from "@/public/34shots_so.png";
import openweather from "@/public/Captura de pantalla 2025-06-08 141452.png";
import openweather2 from "@/public/Captura de pantalla 2025-06-08 141416.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaUnity, FaAws, FaStripe, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { MdWork } from "react-icons/md";
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
  SiAngular,
  SiJsonwebtokens,
  SiAuth0,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiSqlalchemy,
  SiSwagger,
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
    title: "CinemaReserve",
    description:
      "Aplicación web completa para la gestión y reserva de entradas de cine. Sistema integral que permite a los usuarios explorar cartelera actualizada automáticamente desde la API de TMDB, seleccionar asientos de forma interactiva en tiempo real y realizar pagos seguros mediante integración con Stripe. Incluye panel de administración completo para gestionar salas, horarios, películas y reservas.",
    tags: [
      { name: "Angular", icon: SiAngular },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Java", icon: FaJava },
      { name: "Stripe", icon: FaStripe },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "OAuth2", icon: SiAuth0 },
      { name: "AWS", icon: FaAws },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    imageUrl: cinemareserve,
    detailImages: [
      cinemareserve,
      cinemareserve1,
      cinemareserve2,
      cinemareserve3,
      cinemareserve4,
    ],
    features: [
      "Integración con API de TMDB para cartelera automática",
      "Selección interactiva de asientos en tiempo real",
      "Pagos seguros integrados con Stripe",
      "Generación de entradas PDF con código QR",
      "Panel de administración completo",
      "Autenticación JWT y login social con Google",
      "Notificaciones por correo electrónico automáticas",
      "Diseño responsive y mobile-first",
    ],
    learnings:
      "Este proyecto me permitió desarrollar una aplicación full-stack completa integrando múltiples servicios externos como Stripe para pagos, TMDB para datos de películas y OAuth2 para autenticación. Aprendí sobre arquitectura de microservicios, despliegue en la nube con AWS, y la importancia de crear una experiencia de usuario fluida en aplicaciones complejas.",
    demoUrl: "https://n9.cl/kuglgr",
    githubBackend: "https://n9.cl/ushj3",
    githubFrontend: "https://n9.cl/wdjyq",
  },
  {
    title: "OpenWeatherProject",
    description:
      "Aplicación web completa para consulta meteorológica que incluye una API proxy desarrollada en Flask y un frontend en Angular. El backend actúa como intermediario con la API de OpenWeatherMap, proporcionando endpoints para obtener información meteorológica actual e histórica de múltiples ciudades con sistema de caché inteligente usando PostgreSQL.",
    tags: [
      { name: "Flask", icon: SiFlask },
      { name: "Angular", icon: SiAngular },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Swagger", icon: SiSwagger },
    ],
    imageUrl: openweather,
    detailImages: [openweather, openweather2],
    features: [
      "API proxy para OpenWeatherMap con múltiples endpoints",
      "Sistema de caché inteligente con PostgreSQL para optimizar rendimiento",
      "Consulta meteorológica actual por ID de ciudad individual o múltiple",
      "Datos históricos meteorológicos de los últimos 5 días",
      "Serialización/deserialización con Marshmallow",
      "Arquitectura limpia con Flask-Smorest",
      "Frontend Angular responsive con interfaz intuitiva",
      "Documentación automática con Swagger",
    ],
    learnings:
      "Este proyecto me permitió profundizar en el desarrollo de APIs RESTful con Flask y la integración de servicios externos. Aprendí sobre optimización de rendimiento mediante sistemas de caché, manejo de bases de datos relacionales con SQLAlchemy, y la importancia de una buena documentación de API. También mejoré mis habilidades en Angular para consumir APIs complejas.",
    demoUrl: "https://angularopenweather.onrender.com/weather",
    githubBackend: "https://github.com/juanmariiaa/FlaskOpenWeatherAPI",
    githubFrontend: "https://github.com/juanmariiaa/AngularOpenWeather",
  },
  {
    title: "Plataformas 2D",
    description:
      "Se trata de un videojuego de plataformas desarrollado en Unity y C#. El juego cuenta con 2 niveles con una dificultad fácil. Este proyecto me permitió aprender y aplicar conceptos clave del desarrollo de videojuegos.",
    tags: [
      { name: "Unity", icon: FaUnity },
      { name: "C#", icon: null },
    ],
    imageUrl: plataformas,
    features: [
      "Mecánicas de salto y movimiento fluidas",
      "Sistema de colisiones precisas",
      "Diseño de niveles progresivo",
      "Interfaz de usuario intuitiva",
    ],
    learnings:
      "Este proyecto me permitió profundizar en el desarrollo de videojuegos, especialmente en la implementación de físicas 2D, game design y la optimización de rendimiento en Unity.",
  },
  {
    title: "Chat XML",
    description:
      "Chat offline desarrollado en Java con interfaz gráfica. Permite a los usuarios comunicarse localmente. Los datos de las conversaciones y usuarios se almacenan en archivos XML. Con este proyecto aprendí sobre todo manejo de datos en XML.",
    tags: [
      { name: "Java", icon: FaJava },
      { name: "XML", icon: null },
    ],
    imageUrl: chat,
    features: [
      "Comunicación en tiempo real offline",
      "Persistencia de datos en XML",
      "Interfaz gráfica user-friendly",
      "Gestión de múltiples usuarios",
    ],
    learnings:
      "A través de este proyecto, desarrollé habilidades sólidas en el manejo de datos XML, arquitectura de software y diseño de interfaces gráficas en Java.",
  },
] as const;

export const skillsData = [
  { name: "JAVA", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "SpringBoot", icon: SiSpringboot },
  { name: "Flask", icon: SiFlask },
  { name: "Django", icon: SiDjango },
  { name: "FastAPI", icon: SiFastapi },
  { name: "SQLAlchemy", icon: SiSqlalchemy },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Angular", icon: SiAngular },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: GrMysql },
  { name: "Swagger", icon: SiSwagger },
] as const;

export const experiencesData = [
  {
    title: "Desarrollador de software",
    company: "Nucleoo",
    location: "Granada, España",
    description:
      "Nucleoo, empresa consultora especializada en soluciones tecnológicas. He trabajado en proyectos de inteligencia artificial utilizando Python y sus frameworks como Flask, Django y FastAPI, además de continuar desarrollando con Angular. La experiencia me ha permitido aprender metodología Scrum y trabajar en un entorno profesional colaborativo, lo cual ha sido muy enriquecedor para mi desarrollo profesional.",
    icon: React.createElement(MdWork),
    date: "Abril 2024 - Junio 2025",
  },
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
