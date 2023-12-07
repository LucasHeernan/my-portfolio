import React, { useEffect } from "react";
import AnimatedLetters from "../Animations/AnimatedLetters";
import AnimatedContainer from "../Animations/AnimatedContainer";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useAnimations } from "../../Context";

const subtitle = (animation) => {
  return {
    initial: { y: animation ? 0 : 20, opacity: animation ? 1 : 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1,
        ease: [0.17, 0.55, 0.55, 1],
      }
    }
  }
};

const contact = (animation) => {
  return {
    initial: { y: animation ? 0 : 25, opacity: animation ? 1 : 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.7,
        duration: 0.5,
        ease: [0.7, 0.35, 0, 1],
      }
    }
  }
};

export default function Home2() {

  const hi = "Hola !"; /* (0.5 = 3) | (0.75 = 4.5) | (1 = 6) */
  const name = "Soy Lucas Benitez,"; /* ( 0.5 = 12) | (0.75 = 18) | (1 = 24) */
  const work = "Full Stack developer."; /* (0.5 = 22) | (0.75 = 33.75) | (1 = 45) */
  
  const downloadPdf = () => window.open("https://drive.google.com/file/d/1CtxGHdipwQVDOI8Mj18n7PJQSUHew5xC/view?usp=sharing", "_blank");

  const { home, setHome } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      setHome(true);
    }, 3000);
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-yellow-500 cursor-default">
      <div className="w-full h-full bg-yellow-200 max-w-7xl mx-auto flex flex-col px-[10px] xs:px-5 pt-36 text-[#2a2a2a] dark:text-[#ebebeb] sm:pt-32 lg:px-7 xl:px-10 xl:pt-28">
        <div className="w-full h-40 sm:h-48 md:h-52 lg:h-64 xl:h-[270px] bg-green-200 xs:bg-orange-300 sm:bg-violet-300 md:bg-green-400 lg:bg-sky-400 xl:bg-red-400"> {/* MINUSCULA */}
        {/* <div className="w-full h-32 xs:h-36 sm:h-44 md:h-56 lg:h-64 xl:h-[270px] bg-green-300 xs:bg-orange-300 sm:bg-violet-300 md:bg-green-400 lg:bg-sky-400 xl:bg-red-400"> */}
          <h1 className="font-extrabold text-[34px] xs:text-[37px] sm:text-[45px] md:text-[45px] lg:text-[58px] xl:text-[62px]"> {/* MINUSCULA */}
          {/* <h1 className="uppercase font-extrabold text-[21px] xs:text-[28px] sm:text-[38px] md:text-[42px] lg:text-[54px] xl:text-[60px]"> */}
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
          // className="w-full py-10 xs:py-0 xs:pt-10 xs:pb-4 md:py-5 text-[#2a2a2a] dark:text-[#9a9a9a]"
          className="w-full py-5 my-7 text-[#2a2a2a] dark:text-[#9a9a9a] bg-red-200 xs:bg-sky-300 sm:bg-green-300 md:bg-violet-400 lg:bg-orange-300 xl:bg-green-300"
          variants={subtitle(home)}
          initial="initial"
          animate="animate"
          custom={home}
          viewport={{ once: true }}
        >
          <p className="text-[15px] font-medium w-full xs:text-base sm:w-[90%] md:text-lg lg:text-xl lg:leading-[1.95rem] lg:w-[95%]">
            Full Stack developer orientado al <AnimatedContainer words={"Front end"} /> con
            experiencia en el desarrollo de aplicaciones <AnimatedContainer words={"web y móviles."} /> <br/>
            Soy una persona proactiva, siempre dispuesta a colaborar, <AnimatedContainer aplicaciones words={"aprender"} /> cosas
            nuevas y por sobre todo con ganas de trabajar en equipo.
          </p>
        </motion.div>
        
        <div className="w-full py-5 mt-10 xs:mt-5 md:mt-1 lg:mt-0 lg:py-0 xl:py-3 bg-green-200 xs:bg-orange-300 sm:bg-violet-300 md:bg-green-400 lg:bg-sky-400 xl:bg-red-400">
        {/* <div className="w-full mt-5 py-6 sm:mt-0 lg:py-0 xl:py-3"> */}
          <motion.div
            className="w-full flex font-poppins"
            variants={contact(home)}
            initial="initial"
            animate="animate"
            custom={home}
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
                className="w-32 sm:w-40 py-1 xs:py-[6px] sm:py-2 rounded bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-300"
              >
                <span className="uppercase text-sm font-semibold text-[#2a2a2a]">contacto</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-32 xs:h-full sm:w-40 h-[35px] rounded rounded-br-[5px] bg-[rgb(0,0,0,.75)] dark:bg-[#1d1c1c]
                group-hover:w-[127px] group-hover:sm:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[126px] group-active:sm:w-[158px]
                uppercase text-sm font-semibold"
              />
            </Link>
            <div className="relative z-10 mt-2 group md:mt-5">
              <button
                onClick={downloadPdf}
                className="w-36 sm:w-40 py-1 xs:py-[6px] sm:py-2 rounded bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-300"
              >
                <span className="uppercase text-sm font-semibold text-[#2a2a2a]">descargar cv</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-36 sm:w-40 h-full rounded rounded-br-[5px] bg-[rgb(0,0,0,.75)] dark:bg-[#1d1c1c]
                group-hover:w-[143px] group-hover:sm:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[142px] group-active:sm:w-[158px]
                uppercase text-sm font-semibold"
              />
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  )
};


// Como desarrollador orientado al <AnimatedContainer words={"Front end"} /> cuento con
// experiencia en el desarrollo de aplicaciones <AnimatedContainer words={"web y móviles."} /> <br/>
// Soy una persona proactiva, siempre dispuesta a colaborar, <AnimatedContainer aplicaciones words={"aprender"} /> cosas
// nuevas y por sobre todo con ganas de trabajar en equipo.