import React, { useState } from "react";
import Slides from "./Slides";
import { projectsData } from "../assets/projects/projectsData";
import insta from "../assets/projectsImages/gimpInsta2.png";
import portfolio from "../assets/projectsImages/gimpPoke3.png";
import dpower from "../assets/projectsImages/gimpDpower.png";
import pokemon from "../assets/projectsImages/gimpPoke3.png";

const slides = [ insta, portfolio, dpower, pokemon ];

export default function ProjectsTwo() {

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
    <section className="w-full h-screen cursor-default font-['Poppins'] bg-orange-400">
      <div className="max-w-7xl w-full h-full flex flex-col mx-auto px-5 lg:px-0 bg-red-400">
        <h2 className="text-2xl font-semibold pt-14 tracking-widest uppercase lg:text-4xl lg:font-bold lg:pt-14">Proyectos</h2>
        <p className="text-base font-normal lg:text-lg lg:font-medium lg:pt-2 lg:pr-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint dolorum dolor. Recusandae, quam! Est alias aliquam labore doloribus, ducimus facere ullam corporis recusandae reprehenderit quaerat consectetur vitae ipsum accusamus!</p>
        <div className="w-full h-full flex relative overflow-hidden bg-orange-300">

          {
            projectsData?.map((project, index) => (
              <Slides
                key={index}
                title={project.title}
                description={project.description}
                techs={project.techs}
                image={slides[index]}
                images={project.images}
                repository={project.repository}
                curr={curr}
              />
            ))
          }

          <button
            onClick={prev}
            className="hidden lg:block absolute h-full w-12 lg:w-[70px]"
            onMouseEnter={() => setLeft(true)}
            onMouseLeave={() => setLeft(false)}
          >
            <em className={`absolute block h-7 w-7 lg:h-8 lg:w-8 top-1/2 left-3 lg:left-5 transition-transform duration-200 ease-out delay-200
            before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-[5px] before:bg-slate-700 before:origin-top-left before:duration-200 before:ease-out
            after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:-left-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:origin-top-right after:duration-200 after:ease-out
            ${arrowL ? "before:animate-leftDown after:bottom-[5px] after:animate-leftUp" : ""}`}
            />
          </button>
          <button
            onClick={next}
            className="hidden lg:block absolute h-full w-12 lg:w-[70px] right-0"
            onMouseEnter={() => setRight(true)}
            onMouseLeave={() => setRight(false)}
          >
            <em className={`absolute block h-7 w-7 lg:h-8 lg:w-8 top-1/2 right-3 lg:right-5 transition-transform duration-200 ease-out delay-200
            before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-[5px] before:bg-slate-700 before:origin-top-right before:duration-200 before:ease-out
            after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:-right-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:origin-top-left after:duration-200 after:ease-out
            ${arrowR ? "before:animate-rightDown after:bottom-[5px] after:animate-rightUp" : ""}`}
            />
          </button>

          <div className="absolute bottom-[5px] lg:bottom-3 right-0 left-0">
            <div className="flex items-center justify-center gap-5 lg:gap-6">
              {
                slides.map((_, i) => (
                  <div
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all bg-gray-600 lg:w-4 lg:h-4 ${curr === i ? "p-[10px] lg:p-3" : "bg-opacity-50"}`}
                    onClick={() => goToSlide(i)}
                    key={i}
                  />
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}