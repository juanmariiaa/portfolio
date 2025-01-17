"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <main className="flex sm:flex-row flex-col sm:items-center items-center justify-center text-left h-screen">
      <section className="sm:order-last">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/picture.jpeg"
            alt="Foto de Juan María"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-28 w-28 sm:h-48 sm:w-48 rounded-full object-cover 
          border-[0.25rem] border-white shadow-xl"
          />
        </motion.div>
      </section>

      <section className="sm:mr-20 mb-6 text-center sm:text-left">
        <motion.div
          className="mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl mg">
            <span className="font-bold">Juan María</span>
          </h1>
          <h1 className="mb-10  px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <span className="">Desarrollador de software.</span>
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
              href="#contact"
              className="bg-gray-900 text-white px-7 py-3 mb-1 sm:mb-0 sm:mr-1.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {}}
            >
              Contáctame aquí{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Descarga mi CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </div>

          <div className="flex flex-row">
            <a
              className="bg-white p-4 mr-1.5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/juan-maría-ariza-serrano"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/juanmariiaa"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
