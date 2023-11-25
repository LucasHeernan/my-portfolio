import React from "react";
import AnimatedLetters from "./AnimatedLetters";
import AnimatedContainer from "./AnimatedContainer";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const animation = (delay) => {
  return {
    initial: {
      y: 15,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: [0.17, 0.55, 0.55, 1],
      }
    }
  }
};

export default function Home() {

  // PRIMERO - LETRAS ANIMADAS
  // SEGUNDO - BARRA DESDE ARRIBA
  // TERCERO - SUBTITULO DE ABAJO TRANQUI
  // CUARTO - BOTONES DE ABAJO TRANQUI

  const hi = "Hola !"; /* (0.5 = 3) | (0.75 = 4.5) | (1 = 6) */
  const name = "Soy Lucas Benitez,"; /* (0.75 = 12) | (0.5 = 18) | (1 = 24) */
  const work = "desarrollador Full Stack."; /* (0.5 = 24) | (0.75 = 36.75) | (1 = 49) */
  
  const downloadPdf = () => window.open("https://drive.google.com/file/d/1CtxGHdipwQVDOI8Mj18n7PJQSUHew5xC/view?usp=sharing", "_blank");

  return (
    <div name="home" className="w-full h-screen cursor-default">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-[10px] xs:px-5 pt-36 text-[#2a2a2a] dark:text-[#ebebeb] md:pt-32 lg:px-7 xl:px-10 xl:pt-28">
        <div className="w-full h-[120px] xs:h-36 sm:h-44 md:h-56 lg:h-64 xl:h-[270px]">
          <h1 className="uppercase font-extrabold text-[18px] xs:text-[25px] sm:text-[34px] md:text-[41px] lg:text-[54px] xl:text-[60px]">
            <AnimatedLetters
              text={hi}
              time={0}
            />
            <AnimatedLetters
              text={name}
              time={5}
            />
            <AnimatedLetters
              text={work}
              time={20}
            />
          </h1>
        </div>
        
        <motion.div
          className="w-full py-10 md:py-5 text-[#2a2a2a] dark:text-[#9a9a9a]"
          variants={animation(2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-base font-medium w-full sm:w-[90%] md:text-lg lg:text-xl lg:leading-[1.95rem] lg:w-[95%]">
          {/* bg-green-300 xs:bg-orange-300 sm:bg-violet-300 md:bg-green-400 lg:bg-sky-400 xl:bg-red-400 */}
            Full Stack developer orientado al <AnimatedContainer words={"Front end"} /> con
            experiencia en el desarrollo de aplicaciones <AnimatedContainer words={"web y móviles."} /> <br/>
            Soy una persona proactiva, siempre dispuesta a colaborar, <AnimatedContainer aplicaciones words={"aprender"} /> cosas
            nuevas y por sobre todo con ganas de trabajar en equipo.
          </p>
        </motion.div>
        
        <div className="w-full mt-5 py-6 sm:mt-0 lg:py-0 xl:py-3">
          <motion.div
            className="w-full flex font-poppins"
            variants={animation(3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* <a
              href="mailto:lhbenitez2@gmail.com"
              target="_blank"
              className="relative z-10 mt-2 mr-5 group md:mt-5 sm:mr-8 lg:mr-10"
            >
              <button
                className="w-28 xs:w-32 sm:w-40 py-1 xs:py-[6px] sm:py-2 rounded bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-300"
              >
                <span className="uppercase text-sm font-semibold text-[#2a2a2a]">contacto</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-40 h-full rounded rounded-br-[5px] bg-[rgb(0,0,0,.75)] dark:bg-[#1d1c1c]
                group-hover:w-[111px] group-hover:xs:w-[127px] group-hover:sm:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[110px] group-active:xs:w-[126px] group-active:sm:w-[158px]
                uppercase text-sm font-semibold"
              />
            </a> */}
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="relative z-10 mt-2 mr-5 group md:mt-5 sm:mr-8 lg:mr-10"
            >
              <button
                className="w-28 xs:w-32 sm:w-40 py-1 xs:py-[6px] sm:py-2 rounded bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-300"
              >
                <span className="uppercase text-sm font-semibold text-[#2a2a2a]">contacto</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-28 xs:w-32 sm:w-40 h-[35px] xs:h-full rounded rounded-br-[5px] bg-[rgb(0,0,0,.75)] dark:bg-[#1d1c1c]
                group-hover:w-[111px] group-hover:xs:w-[127px] group-hover:sm:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[110px] group-active:xs:w-[126px] group-active:sm:w-[158px]
                uppercase text-sm font-semibold"
              />
            </Link>
            <div className="relative z-10 mt-2 group md:mt-5">
              <button
                onClick={downloadPdf}
                className="w-32 sm:w-40 py-1 xs:py-[6px] sm:py-2 rounded bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-300"
              >
                <span className="uppercase text-sm font-semibold text-[#2a2a2a]">descargar cv</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-32 sm:w-40 h-full rounded rounded-br-[5px] bg-[rgb(0,0,0,.75)] dark:bg-[#1d1c1c]
                group-hover:w-[127px] group-hover:sm:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[126px] group-active:sm:w-[158px]
                uppercase text-sm font-semibold"
              />
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  )
};

// Hola! Soy Lucas, desarrollador en Javascript, con fluidez tanto en frontend como en backend.
// Uso principalmente React, React Native, Redux, Node, Express y PostgreSQL. Pero me encanta 
// aprender cosas nuevas!

// Busco oportunidades que ayuden a mi desarrollo personal. Soy una persona proactiva,
// siempre dispuesta a aprender cosas nuevas, y por sobre todo con ganas de trabajar en equipo.

// colaborar, aprender cosas nuevas!

// Full Stack developer orientado al Front-end con experiencia en el desarrollo de
// aplicaciones web y móviles. Soy una persona proactiva, siempre dispuesta a colaborar,
// aprender cosas nuevas y por sobre todo con ganas de trabajar en equipo.
