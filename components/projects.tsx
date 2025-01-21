"use client";

import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-screen-md text-left leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
    >

      <h2 className="text-3xl text-left font-medium mb-3">Proyectos</h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section
      className="bg-gray-100 max-w-screen-lg border border-black/5
     rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200
      transition sm:group-even:pl-8 dark:text-white dark:bg-white/10
         dark:hover:bg-white/20 mb-5"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => {
            const IconComponent = tag.icon;
            return (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 flex items-center space-x-2"
                key={index}
              >
                <IconComponent className="mr-1" />
                <span>{tag.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
      />
    </section>
  );
}
