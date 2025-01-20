"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { TbSend } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-28 max-w-screen-md text-left leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
    >
      <h2 className="text-3xl text-left font-medium">Contacto</h2>
      <p>
        Contáctame a este email: arizaserranojuanmaria@gmail.com o si prefieres
        rellena este formulario.
      </p>
      <form className="flex flex-col gap-4 mt-4">
        <input
          className="rounded-xl border-gray-300 p-2 bg-white bg-opacity-10"
          type="email"
          required
          maxLength={500}
          placeholder="Escribe tu email aquí"
        />
        <textarea
          className="rounded-xl border-gray-300 p-2 resize-none bg-white bg-opacity-10 h-36 placeholder-margin-left"
          placeholder="Escribe tu mensaje aquí"
          required
          maxLength={500}
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
           text-secondary rounded-full outline-none transition-all focus:scale-110 hover:scale-110
           active:scale-105 bg-gray-950 disabled:scale-100 
            disabled:bg-opacity-65"
        >
          Enviar
          <TbSend />
        </button>
      </form>
    </section>
  );
}
