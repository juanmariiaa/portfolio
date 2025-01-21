"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="about"
      className="max-w-screen-md text-justify leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
    >
      <h2 className="text-3xl text-left font-medium">Sobre mí</h2>
      <p className="mt-4">
        Soy Juan María Ariza Serrano, desarrollador de software en formación. Me
        destaco por mi capacidad para el trabajo en equipo, liderazgo y
        comunicación. Considero las soft-skills vitales para progresar.{" "}
      </p>
      <p className="mt-4">
        Soy proactivo, comprometido y siempre en busca de nuevas oportunidades
        para aprender y superar desafíos. Mi experiencia como miembro de la
        junta directiva de un club de debate me ha permitido desarrollar
        habilidades valiosas como la resolución de problemas, gestión del tiempo
        y formación de alumnos.{" "}
      </p>
      <div className="w-screen absolute  left-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 Q 60 10 120 40 T 240 40 T 360 40 T 480 40 T 600 40 T 720 40 T 840 40 T 960 40 T 1080 40 T 1200 40 V 120 H 0 Z"
            fill="#35374B"
          />
        </svg>
      </div>
    </section>
  );
}
