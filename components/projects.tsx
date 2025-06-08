"use client";

import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useProjectDetailsContext } from "@/context/project-details-context";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("Proyectos");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="proyectos"
      className="mb-28 max-w-screen-md text-left leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
    >
      <h2 className="text-3xl text-left font-medium mb-12">Proyectos</h2>
      <div className="grid gap-8 sm:gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project(project: ProjectProps) {
  const { openProjectDetails } = useProjectDetailsContext();

  const handleProjectClick = () => {
    openProjectDetails(project);
  };

  const { title, description, tags, imageUrl } = project;

  return (
    <motion.section
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black/20"
      onClick={handleProjectClick}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Imagen de fondo con overlay */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Proyecto ${title}`}
          fill
          quality={95}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Tags flotantes en la imagen */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
          {tags.slice(0, 3).map((tag, index) => {
            const IconComponent = tag.icon;
            return (
              <motion.span
                key={index}
                className="bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white rounded-full flex items-center space-x-1.5 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {IconComponent && <IconComponent className="w-3 h-3" />}
                <span>{tag.name}</span>
              </motion.span>
            );
          })}
          {tags.length > 3 && (
            <span className="bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white rounded-full border border-white/20">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          <motion.div
            className="ml-4 p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.div>
        </div>

        <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-6 line-clamp-4">
          {description}
        </p>

        {/* Indicador de más contenido */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/60 font-medium">
            Ver detalles completos
          </span>
          <motion.div
            className="flex space-x-1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/80 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.section>
  );
}
