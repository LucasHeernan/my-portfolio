import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import insta from "../../assets/projectsImages/gimpInsta.png";
import portfolio from "../../assets/projectsImages/portfolio2.png";
import dpower from "../../assets/projectsImages/gimpDpower.png";
import pokemon from "../../assets/projectsImages/gimpPoke.png";
import { useText, useProject } from "../Animations/Animations";

const slides = [ insta, portfolio, dpower, pokemon ];

export default function Projects() {

  const [arrowL, setArrowL] = useState(false);
  const [arrowR, setArrowR] = useState(false);
  const [curr, setCurr] = useState(0);
  const [direction, setDirection] = useState(null);

  const work = useProject({ work:"div" });
  const title = useText({ first:"h2", delay: 0.3 });
  const subtitle = useText({ first:"p", delay: 0.2 });

  const prev = () => {
    setCurr( curr => curr === 0 ? slides.length - 1 : curr - 1 );
    setArrowL(true);
    setDirection(-1000);
    setTimeout(() => {
      setArrowL(false);
    }, 500);
  };

  const next = () => {
    setCurr( curr => curr === slides.length - 1 ? 0 : curr + 1 );
    setArrowR(true);
    setDirection(1000);
    setTimeout(() => {
      setArrowR(false)
    }, 500);
  };

  const goToSlide = (slideIndex) => {
    setDirection( slideIndex > curr ? 1000 : -1000 );
    setCurr(slideIndex)
  };

  return (
    <div name="projects" className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full flex flex-col mx-auto px-[10px] xs:px-5 lg:px-7 xl:px-10">
        <section className="relative z-0">
          <div ref={title}>
            <h2 className="text-2xl font-bold pt-10 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Proyectos</h2>
            <h2 className="text-2xl font-bold pt-10 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl absolute text-[rgba(0,0,0,.20)] top-0.5 left-0.5 dark:top-[3px] dark:left-[3px] -z-10">Proyectos</h2>
          </div>
          <div ref={subtitle}>
            <p className="text-[15px] xs:text-base font-medium pt-1 text-[#2a2a2a] dark:text-[#9a9a9a] sm:w-[90%] md:pt-2 md:w-[85%] lg:text-lg lg:w-[75%]">
              Estos son algunos de los proyectos web y móviles en los que he trabajado, cada uno diseñado para adaptarse a diferentes dispositivos y necesidades.
            </p>
          </div>
        </section>

        <div ref={work} className="w-full h-full flex relative overflow-hidden">

          <ProjectCard
            curr={curr}
            image={slides[curr]}
            prev={prev}
            next={next}
            direction={direction}
          />

          <button
            onClick={prev}
            className="hidden absolute h-full w-[70px] group lg:block"
          >
            <em className={`absolute block h-8 w-8 top-1/2 left-3 transition-transform duration-200 ease-out delay-200 xl:left-5 xl:h-9 xl:w-9
            before:-rotate-45 before:absolute before:left-0 before:h-full before:w-[5px] before:bg-slate-700 before:dark:bg-[#dfdfdf] before:origin-top-left before:duration-200 before:ease-out
            after:-rotate-[135deg] after:absolute after:-left-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:dark:bg-[#dfdfdf] after:origin-top-right after:duration-200 after:ease-out
            group-hover:before:-rotate-[25deg] group-hover:after:-rotate-[155deg]
            ${arrowL ? "before:animate-leftDown after:bottom-[5px] after:animate-leftUp" : ""}`}
            />
          </button>
          <button
            onClick={next}
            className="hidden absolute right-0 h-full w-[70px] group lg:block"
          >
            <em className={`absolute block h-8 w-8 top-1/2 right-3 transition-transform duration-200 ease-out delay-200 xl:right-5 xl:h-9 xl:w-9
            before:rotate-45 before:absolute before:right-0 before:h-full before:w-[5px] before:bg-slate-700 before:dark:bg-[#dfdfdf] before:origin-top-right before:duration-200 before:ease-out
            after:rotate-[135deg] after:absolute after:-right-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:dark:bg-[#dfdfdf] after:origin-top-left after:duration-200 after:ease-out
            group-hover:before:rotate-[25deg] group-hover:after:rotate-[155deg]
            ${arrowR ? "before:animate-rightDown after:bottom-[5px] after:animate-rightUp" : ""}`}
            />
          </button>

          <section className="absolute bottom-[10px] sm:bottom-2 md:bottom-3 right-0 left-0">
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
          </section>

        </div>
      </div>
    </div>
  )
};
