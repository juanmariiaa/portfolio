"use client";

import React, { useEffect, useState } from "react";
import { useProjectDetailsContext } from "@/context/project-details-context";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { projectsData } from "@/lib/data";

type ExtendedProject = (typeof projectsData)[number] & {
  features?: string[];
  learnings?: string;
  demoUrl?: string;
  githubBackend?: string;
  githubFrontend?: string;
  detailImages?: StaticImageData[];
};

export default function ProjectDetails() {
  const { selectedProject, isModalOpen, closeProjectDetails } =
    useProjectDetailsContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProjectDetails();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, closeProjectDetails]);

  // Reset image index when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setCurrentImageIndex(0);
    }
  }, [isModalOpen]);

  if (!selectedProject) return null;

  const project = selectedProject as ExtendedProject;
  const hasMultipleImages =
    project.detailImages && project.detailImages.length > 1;
  const imagesToShow = project.detailImages || [project.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagesToShow.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imagesToShow.length) % imagesToShow.length
    );
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeProjectDetails}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg border border-black/5 bg-white/10 backdrop-blur-md text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeProjectDetails}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            >
              <IoCloseSharp className="w-6 h-6" />
            </button>

            <div className="p-8">
              {/* Carrusel de imágenes */}
              <div className="relative mb-6">
                <div className="relative h-64 sm:h-96 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={imagesToShow[currentImageIndex]}
                    alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                    quality={95}
                    fill
                    className="object-cover transition-all duration-300"
                  />

                  {/* Controles de navegación */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        <FiChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        <FiChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Indicadores de imagen */}
                {hasMultipleImages && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {imagesToShow.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Contador de imágenes */}
                {hasMultipleImages && (
                  <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {imagesToShow.length}
                  </div>
                )}
              </div>

              {/* Contenido principal */}
              <div className="space-y-6">
                {/* Título */}
                <h2 className="text-3xl sm:text-4xl font-bold">
                  {project.title}
                </h2>

                {/* Descripción expandida */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white/90">
                    Descripción del Proyecto
                  </h3>
                  <p className="text-lg leading-relaxed text-white/80">
                    {project.description}
                  </p>

                  {/* Características principales */}
                  {project.features && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white/90">
                        Características principales:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Aprendizajes */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-white/90">
                      Aprendizajes clave:
                    </h4>
                    <p className="text-white/80">
                      {project.learnings ||
                        "Este proyecto me ayudó a consolidar conocimientos en desarrollo full-stack y mejores prácticas de programación."}
                    </p>
                  </div>
                </div>

                {/* Tecnologías utilizadas */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white/90">
                    Tecnologías Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => {
                      const IconComponent = tag.icon;
                      return (
                        <span
                          key={index}
                          className="bg-black/50 px-4 py-2 text-sm uppercase tracking-wider text-white rounded-full flex items-center space-x-2 border border-white/20"
                        >
                          {IconComponent && (
                            <IconComponent className="w-4 h-4" />
                          )}
                          <span>{tag.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Backend</span>
                    </a>
                  )}

                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Frontend</span>
                    </a>
                  )}

                  {!project.githubBackend && !project.githubFrontend && (
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20">
                      <FiGithub className="w-5 h-5" />
                      <span>Ver Código</span>
                    </button>
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Demo en Vivo</span>
                    </a>
                  ) : (
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20">
                      <FiExternalLink className="w-5 h-5" />
                      <span>Demo en Vivo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
