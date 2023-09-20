import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
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
  }

  const next = () => {
    setCurr( curr => curr === slides.length - 1 ? 0 : curr + 1 );
    setArrowR(true);
    setTimeout(() => {
      setArrowR(false)
    }, 500);
  }

  const goToSlide = (slideIndex) => setCurr(slideIndex);

  return (
    <div name="projects" className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full flex flex-col mx-auto text-[#2a2a2a] dark:text-white px-5 lg:px-7 xl:px-10">
        <h2 className="text-2xl font-bold pt-14 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Proyectos</h2>
        <p className="text-base font-normal md:pt-1 lg:text-lg lg:font-normal lg:pr-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint dolorum dolor. Recusandae, quam! Est alias aliquam labore doloribus, ducimus facere ullam corporis recusandae reprehenderit quaerat consectetur vitae ipsum accusamus!</p>
        <div className="w-full h-full flex relative overflow-hidden">

          {
            projectsData?.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                techs={project.techs}
                image={slides[index]}
                images={project.images}
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
            before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-[5px] before:bg-slate-700 before:dark:bg-slate-300 before:origin-top-left before:duration-200 before:ease-out
            after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:-left-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:dark:bg-slate-300 after:origin-top-right after:duration-200 after:ease-out
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
            before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-[5px] before:bg-slate-700 before:dark:bg-slate-300 before:origin-top-right before:duration-200 before:ease-out
            after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:-right-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:dark:bg-slate-300 after:origin-top-left after:duration-200 after:ease-out
            ${arrowR ? "before:animate-rightDown after:bottom-[5px] after:animate-rightUp" : ""}`}
            />
          </button>

          <div className="absolute bottom-[10px] sm:bottom-2 md:bottom-3 right-0 left-0">
            <div className="flex items-center justify-center gap-5 lg:gap-6">
              {
                slides.map((_, i) => (
                  <div
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all bg-gray-600 dark:bg-slate-300 md:w-4 md:h-4 ${curr === i ? "p-[10px] md:p-3" : "bg-opacity-50 dark:bg-opacity-50"}`}
                    onClick={() => goToSlide(i)}
                    key={i}
                  />
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}