"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { experiencesData } from "@/lib/data";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experiencie() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-screen-md text-justify leading-8 sm:mb-40 scroll-mt-28 mx-5 sm:mx-0"
    >
      <h2 className="text-3xl text-left font-medium">Mi experiencia</h2>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgb(255 255 255 / 0.1)", // Fondo con opacidad // dark:c dark:text-white/80
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: "#e1dfe2",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgb(255 255 255 / 0.1)", // Flecha con opacidad
              }}
              date={item.date}
              dateClassName="sm:text-secondary sm:m-4 sm:mt-0"
              icon={item.icon}
              iconStyle={{
                background: "#27374D",
              }}
            >
              <h3 className="font-semibold capitalize text-secondary">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-secondary">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-secondary">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>{" "}
    </section>
  );
}
