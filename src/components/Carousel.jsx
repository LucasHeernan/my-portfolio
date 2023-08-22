import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "./Icons";
import pokemon from "../assets/projectsImages/PokemonHome.png";
import insta from "../assets/projectsImages/InstaHome.png";
import dpower from "../assets/projectsImages/DpowerHome.png";
import portfolio from "../assets/projectsImages/PokemonDetail.png";

const slides = [ pokemon, insta, dpower, portfolio ];

export default function Carousel() {

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
    <div className="w-full h-screen"> {/* ANCHO TOTAL Y ALTO DE PANTALLA */}
      <div className="max-w-7xl w-full h-full mx-auto flex relative overflow-hidden"> {/* ANCHO MAXIMO DE PANTALLA Y TODO EL ALTO */}
        <div className="pt-28 pb-5 px-20 bg-slate-400"> {/* CUADRO PARA LOS PROYECTOS */}
          <div className="w-full h-full flex overflow-hidden"> {/* TOMA "INTERIOR DEL CUADRO" Y HACE LA CADA CUADRO */}
            {
              slides.map((el, index) => (   /* CADA PROYECTO */
                <div
                  className="w-full h-full box-border flex flex-shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform ease-in-out duration-700 font-['Poppins']"
                  style={{ transform: `translateX(-${curr * 1120}px)` }}
                  key={index}
                >
                  <div className="w-[45%] h-full box-border p-5 bg-orange-400/25">
                    <img src={el} key={index} alt="pepe" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-[55%] h-full flex flex-col justify-evenly items-center bg-slate-300">
                    <h3 className="text-4xl font-bold tracking-wide">TITULO DEL PROYECTO</h3>
                    <p className="text-lg font-medium pr-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et ut harum consequatur, quam maiores! Cupiditate maxime quam illum quisquam architecto, dolores veritatis? Asperiores nobis eveniet officia delectus consectetur sequi?</p>
                    <div className="w-full flex justify-evenly items-center bg-white">
                      <div
                        className="inline-block p-1 bg-blue-600 text-black border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-blue-950 rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] relative overflow-hidden box-border
                        before:bg-blue-400 before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                        after:bg-blue-500 after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                      >
                        <span className="relative">tec</span>
                      </div>
                      <div
                        className="inline-block p-1 bg-blue-600 text-black border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-blue-950 rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] relative overflow-hidden box-border
                        before:bg-blue-400 before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                        after:bg-blue-500 after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                      >
                        <span className="relative">no</span>
                      </div>
                      <div
                        className="inline-block p-1 bg-blue-600 text-black border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-blue-950 rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] relative overflow-hidden box-border
                        before:bg-blue-400 before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                        after:bg-blue-500 after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                      >
                        <span className="relative">logias</span>
                      </div>
                      <motion.a
                        href="#"
                        target="_blank"
                        className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer bg-slate-800 border-solid border-t-0 border-r-[3px] border-b-4 border-l-0 border-slate-900
                        hover:bg-gradient-to-br from-black to-slate-500 hover:shadow hover:shadow-gray-500"
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github
                          fill={"white"}
                          className="w-7 h-w-7 ml-[3px]"
                        />
                      </motion.a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            onClick={prev}
            className="h-full w-20 hover:bg-gradient-to-l from-transparent to-slate-600"
            onMouseEnter={() => setLeft(true)}
            onMouseLeave={() => setLeft(false)}
          >
            <em className={`absolute block h-8 w-8 top-1/2 left-5 transition-transform duration-200 ease-out delay-200
            before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-[5px] before:bg-black before:origin-top-left before:duration-200 before:ease-out
            after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:-left-[5px] after:h-full after:w-[5px] after:bg-black after:origin-top-right after:duration-200 after:ease-out
            ${arrowL ? "before:animate-leftDown after:bottom-[5px] after:animate-leftUp" : ""}`}
            />
          </button>
          <button
            onClick={next}
            className="h-full w-20 hover:bg-gradient-to-r from-transparent to-slate-600"
            onMouseEnter={() => setRight(true)}
            onMouseLeave={() => setRight(false)}
          >
            <em className={`absolute block h-8 w-8 top-1/2 right-5 transition-transform duration-200 ease-out delay-200
            before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-[5px] before:bg-black before:origin-top-right before:duration-200 before:ease-out
            after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:-right-[5px] after:h-full after:w-[5px] after:bg-black after:origin-top-left after:duration-200 after:ease-out
            ${arrowR ? "before:animate-rightDown after:bottom-[5px] after:animate-rightUp" : ""}`}
            />
          </button>
        </div>

        <div className="absolute bottom-6 right-0 left-0">
          <div className="flex items-center justify-center gap-6">
            {
              slides.map((_, i) => (
                <div
                  className={`transition-all w-4 h-4 bg-blue-500 rounded-full cursor-pointer ${curr === i ? "p-3" : "bg-opacity-50"}`}
                  onClick={() => goToSlide(i)}
                  key={i}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
