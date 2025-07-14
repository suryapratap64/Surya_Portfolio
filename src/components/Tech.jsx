import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-item",
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="flex justify-center text-2xl font-bold mb-2">My  Tech stack</div>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <a
            key={technology.name}
            href={technology.web}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item group relative w-28 h-28 cursor-pointer"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-75"
            />
            {/* Hover label */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded">
              <span className="text-white font-semibold text-center px-2">
                {technology.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
