import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Text } from "../Contact/useAnimation";
import { projectsData } from "../../assets/projects/projectsData";
import insta from "../../assets/projectsImages/gimpInsta2.png";
import portfolio from "../../assets/projectsImages/gimpPoke3.png";
import dpower from "../../assets/projectsImages/gimpDpower.png";
import pokemon from "../../assets/projectsImages/gimpPoke3.png";

const slides = [ insta, portfolio, dpower, pokemon ];

export default function Projects() {

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [arrowL, setArrowL] = useState(false);
  const [arrowR, setArrowR] = useState(false);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr( curr => curr === 0 ? slides.length - 1 : curr - 1 );
    setArrowL(true);
    setTimeout(() => {
      setArrowL(false);
    }, 500);
  };

  const next = () => {
    setCurr( curr => curr === slides.length - 1 ? 0 : curr + 1 );
    setArrowR(true);
    setTimeout(() => {
      setArrowR(false)
    }, 500);
  };

  const goToSlide = (slideIndex) => setCurr(slideIndex);

  const cardAnimation = {
    initial: {
      opacity: 0,
      scaleY: 0.7,
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        ease: [0.17, 0.55, 0.55, 1],
        duration: 1
      }
    }
  };

  return (
    <div name="projects" className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full flex flex-col mx-auto px-[10px] xs:px-5 lg:px-7 xl:px-10">
        <section className="relative z-0">
          <Text>
            <h2 className="text-2xl font-bold pt-14 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Proyectos</h2>
            <h2 className="text-2xl font-bold pt-14 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl absolute text-[rgba(0,0,0,.20)] top-0.5 left-0.5 dark:top-[3px] dark:left-[3px] -z-10">Proyectos</h2>
          </Text>
          <Text>
            <p className="text-base font-medium text-[#2a2a2a] dark:text-[#9a9a9a] sm:w-[90%] md:pt-1 md:w-[85%] lg:text-lg lg:w-[75%]">
              Estos son algunos de los proyectos web y móviles en los que he trabajado, cada uno diseñado para adaptarse a diferentes dispositivos y necesidades.
            </p>
          </Text>
        </section>
        <motion.div
          className="w-full h-full flex relative overflow-hidden"
          variants={cardAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >

          {
            projectsData?.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                techs={project.techs}
                image={slides[index]}
                repository={project.repository}
                phone={project.phone}
                curr={curr}
              />
            ))
          }

          <button
            onClick={prev}
            className="hidden absolute h-full w-[70px] lg:block"
            onMouseEnter={() => setLeft(true)}
            onMouseLeave={() => setLeft(false)}
          >
            <em className={`absolute block h-8 w-8 top-1/2 left-3 transition-transform duration-200 ease-out delay-200 xl:left-5 xl:h-9 xl:w-9
            before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-[5px] before:bg-slate-700 before:dark:bg-[#dfdfdf] before:origin-top-left before:duration-200 before:ease-out
            after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:-left-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:dark:bg-[#dfdfdf] after:origin-top-right after:duration-200 after:ease-out
            ${arrowL ? "before:animate-leftDown after:bottom-[5px] after:animate-leftUp" : ""}`}
            />
          </button>
          <button
            onClick={next}
            className="hidden absolute right-0 h-full w-[70px] lg:block"
            onMouseEnter={() => setRight(true)}
            onMouseLeave={() => setRight(false)}
          >
            <em className={`absolute block h-8 w-8 top-1/2 right-3 transition-transform duration-200 ease-out delay-200 xl:right-5 xl:h-9 xl:w-9
            before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-[5px] before:bg-slate-700 before:dark:bg-[#dfdfdf] before:origin-top-right before:duration-200 before:ease-out
            after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:-right-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:dark:bg-[#dfdfdf] after:origin-top-left after:duration-200 after:ease-out
            ${arrowR ? "before:animate-rightDown after:bottom-[5px] after:animate-rightUp" : ""}`}
            />
          </button>

          <div className="absolute bottom-[10px] sm:bottom-2 md:bottom-3 right-0 left-0">
            <div className="flex items-center justify-center gap-5 lg:gap-6">
              {
                slides.map((_, i) => (
                  <div
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all bg-gray-600 dark:bg-slate-300 ${curr === i ? "p-[10px]" : "hover:scale-110 bg-opacity-50 dark:bg-opacity-50"}`}
                    onClick={() => goToSlide(i)}
                    key={i}
                  />
                ))
              }
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
};
