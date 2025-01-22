"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("Inicio");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <main
      ref={ref}
      id="inicio"
      className="flex flex-col sm:items-center
    items-center justify-center text-left h-screen sm:max-w-screen-lg"
    >
      <div
        className="flex sm:flex-row flex-col sm:items-center
    items-center justify-center text-left h-screen sm:max-w-screen-lg scroll-mt-96"
      >
        <section className="sm:order-last ">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="w-40 h-40 sm:w-80 sm:h-80 flex items-center justify-center shadow-xl rounded-lg">
              <Image
                src="/picture.jpeg"
                alt="Foto de Juan María"
                fill={true} // {true} | {false}
                quality="100"
                priority={true}
                className="h-2 w-2 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </section>

        <section className="sm:mr-20 mb-6 text-center sm:text-left">
          <motion.div
            className="mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className=" mt-4 px-4 text-4xl xs:text- font-medium !leading-[1.5] sm:text-4xl mg">
              <span className="font-bold">Juan María</span>
            </h1>
            <h1 className="mb-10  px-4 font-normal text-medium  !leading-[1.5] sm:text-4xl">
              <span className="">Desarrollador de software</span>
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <div className="sm:flex sm:flex-row">
              <Link
                href="#contacto"
                className="bg-gray-900 text-white px-7 py-3 mb-1 sm:mb-0 sm:mr-1.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => { }}
              >
                Contáctame aquí{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack bg-white/10"
                href="/CV.pdf"
                download
              >
                Descarga mi CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
            </div>

            <div className="flex flex-row">
              <a
                className="p-4 mr-1.5 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                href="https://www.linkedin.com/in/juan-maría-ariza-serrano"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                href="https://github.com/juanmariiaa"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
      <svg
        className="w-screen relative left-0"
        id="curveUpColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#35374B" />
      </svg>
    </main>
  );
}
