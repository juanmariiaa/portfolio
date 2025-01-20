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
      className="mb-28 max-w-screen-md text-justify leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
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
    </section>
  );
}
