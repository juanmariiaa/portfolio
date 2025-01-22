"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Tecnologies() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("Tecnologías");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="tecnologias"
      className="mb-28 max-w-screen-md text-justify leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
    >
      <h2 className="text-3xl text-left font-medium mb-3">Tecnologías</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.li
              className=" borderBlack rounded-xl px-5 py-3 bg-white/10 text-white/80 flex items-center space-x-2"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <IconComponent />
              <span>{skill.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
