import React, { useState } from "react";
import Slides from "./Slides";
import { projectsData } from "../assets/projects/projectsData";
import insta from "../assets/projectsImages/InstaHome.png";
import portfolio from "../assets/projectsImages/PokemonDetail.png";
import dpower from "../assets/projectsImages/DpowerHome.png";
import pokemon from "../assets/projectsImages/PokemonHome.png";
// import laptopWhite from "../assets/projectsImages/laptopWhite.png";
// import laptopBlack from "../assets/projectsImages/laptopBlack.png";

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
    <section className="w-full h-screen">
      <div className="max-w-7xl w-full h-full flex flex-col mx-auto font-['Poppins']">
        <h2 className="text-4xl font-bold tracking-widest pt-20 uppercase">Proyectos</h2>
        <p className="text-lg font-medium pt-3 pb-5 pr-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sint dolorum dolor. Recusandae, quam! Est alias aliquam labore doloribus, ducimus facere ullam corporis recusandae reprehenderit quaerat consectetur vitae ipsum accusamus!</p>
        <div className="w-full h-full relative box-border flex overflow-hidden bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200">

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

          {/* <div className="w-1/2 h-full">
            <img src={laptopBlack} alt="pepe" className="w-full h-full object-cover" />
          </div> */}

          <div className="absolute inset-0 flex items-center justify-between">
            <button
              onClick={prev}
              className="h-full w-20"
              onMouseEnter={() => setLeft(true)}
              onMouseLeave={() => setLeft(false)}
            >
              <em className={`absolute block h-8 w-8 top-1/2 left-5 transition-transform duration-200 ease-out delay-200
              before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-[5px] before:bg-slate-700 before:origin-top-left before:duration-200 before:ease-out
              after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:-left-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:origin-top-right after:duration-200 after:ease-out
              ${arrowL ? "before:animate-leftDown after:bottom-[5px] after:animate-leftUp" : ""}`}
              />
            </button>
            <button
              onClick={next}
              className="h-full w-20"
              onMouseEnter={() => setRight(true)}
              onMouseLeave={() => setRight(false)}
            >
              <em className={`absolute block h-8 w-8 top-1/2 right-5 transition-transform duration-200 ease-out delay-200
              before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-[5px] before:bg-slate-700 before:origin-top-right before:duration-200 before:ease-out
              after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:-right-[5px] after:h-full after:w-[5px] after:bg-slate-700 after:origin-top-left after:duration-200 after:ease-out
              ${arrowR ? "before:animate-rightDown after:bottom-[5px] after:animate-rightUp" : ""}`}
              />
            </button>
          </div>

          <div className="absolute bottom-3 right-0 left-0">
            <div className="flex items-center justify-center gap-6">
              {
                slides.map((_, i) => (
                  <div
                    className={`transition-all w-4 h-4 bg-gray-800 rounded-full cursor-pointer ${curr === i ? "p-3" : "bg-opacity-50"}`}
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