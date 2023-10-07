import React from "react";
import AnimatedLetters from "./AnimatedLetters";
import AnimatedContainer from "./AnimatedContainer";
import { Link } from "react-scroll";

export default function Home() {

  // PRIMERO - LETRAS ANIMADAS
  // SEGUNDO - BARRA DESDE ARRIBA
  // TERCERO - SUBTITULO DE ABAJO TRANQUI
  // CUARTO - BOTONES DE ABAJO TRANQUI

  // const name = "Hi, I'm Lucas Benitez"; 21
  const name = "Hola! Soy Lucas Benitez"; /* 23 */
  // const work = "Full Stack Web Developer."; /* 25 */
  const work = "Desarrollador Full Stack."; /* 25 --> De 24 a 59 */

  const downloadPdf = () => window.open("https://drive.google.com/file/d/1CtxGHdipwQVDOI8Mj18n7PJQSUHew5xC/view?usp=sharing", "_blank");

  return (
    <div name="home" className="w-full h-screen cursor-default">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-5 pt-36 text-[#2a2a2a] dark:text-[#fff] md:pt-32 lg:px-7 xl:px-10 xl:pt-32">
      {/* bg-green-200 sm:bg-green-300 md:bg-green-500 lg:bg-sky-300 xl:bg-purple-300 */}
        <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56">
          <h1 className="uppercase text-[20px] font-extrabold sm:text-[34px] md:text-[41px] lg:text-[54px] xl:text-[68px]">
            <AnimatedLetters
              text={name}
              time={0}
            />
            <AnimatedLetters
              text={work}
              time={15}
            />
          </h1>
        </div>
        
        <div className="w-full py-10 lg:py-5 text-[#2a2a2a] dark:text-[#9a9a9a]">
          <p className="text-base font-medium w-[90%] sm:w-5/6 md:text-lg lg:text-xl lg:leading-[1.95rem]">
            Full Stack developer orientado al <AnimatedContainer words={"Front end"} /> con
            experiencia en desarrollo de <AnimatedContainer words={"aplicaciones web"} /> y
            mobile en Javascript con ReactJS, React Native, Redux, NodeJS, Express, <AnimatedContainer words={"PostgreSQL"} />.
          </p>
        </div>
        
        <div className="w-full py-6">
          <div className="w-full flex font-poppins">
            {/* <a
              href="mailto:lhbenitez2@gmail.com"
              target="_blank"
              className="relative z-10 mt-2 mr-5 group md:mt-5"
            >
              <button
                className="w-40 py-2 rounded bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-200">
                <span className="uppercase text-sm font-semibold text-black">contacto</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-40 h-full rounded-bl-md rounded-br-md rounded-tr-md bg-slate-800 dark:bg-slate-950
                group-hover:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[155px]
                uppercase text-sm font-semibold"
              />
            </a> */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="relative z-10 mt-2 mr-5 group md:mt-5 sm:mr-8 lg:mr-10"
            >
              <button
                className="w-40 py-2 rounded bg-gradient-to-b from-[#DB8472] to-[#9E6271] border-b-[3px] border-r-2 border-[#5A4757] shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-200"
              >
                <span className="uppercase text-sm font-semibold text-[#fff]">contacto</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-40 h-full rounded bg-[#2A2A2A] dark:bg-slate-950
                group-hover:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[155px]
                uppercase text-sm font-semibold"
              />
            </Link>
            <div className="relative z-10 mt-2 group md:mt-5">
              <button
                onClick={downloadPdf}
                className="w-40 py-2 rounded bg-gradient-to-b from-[#DB8472] to-[#9E6271] border-b-[3px] border-r-2 border-[#5A4757] shadow-sm shadow-black transition-all duration-100 ease-out
                group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:bg-gradient-to-t group-active:from-indigo-200 group-active:to-indigo-200"
              >
                <span className="uppercase text-sm font-semibold text-[#fff]">descargar cv</span>
              </button>
              <span
                className="absolute -z-10 top-1 left-[3px] w-40 h-full rounded bg-[#2A2A2A] dark:bg-slate-950
                group-hover:w-[159px] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[155px]
                uppercase text-sm font-semibold"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

// <h1 className={`text-[28px] uppercase font-['Alegreya_Sans_SC'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[88px]`}>
// <h1 className={`text-[28px] uppercase font-['Lexend_Deca'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[72px]`}>
// <h1 className={`text-[28px] uppercase font-['EB_Garamond'] font-extrabold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[76px]`}>
// <h1 className="uppercase text-[28px] font-['Sansita'] font-extrabold sm:text-[43px] md:text-[53px] lg:text-[69px] xl:text-[85px]">

// <div
//   className="inline-block px-3 py-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-[15px] tracking-wider shadow-md shadow-[rgba(0,0,0,.75)] mr-7 relative overflow-hidden cursor-pointer
//   before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
//   after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
// >
//   <span className="relative z-20">contacto</span>
// </div>
// <div
//   className="inline-block px-3 py-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-[15px] tracking-wider shadow-md shadow-[rgba(0,0,0,.50)] relative overflow-hidden cursor-pointer
//   before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
//   after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
// >
//   <span className="relative z-20">descargar cv</span>
// </div>
