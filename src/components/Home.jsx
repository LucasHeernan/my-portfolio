import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";

export default function Home() {

  const [start, setStart] = useState("animate-fadeIn");

  const name = "Hi, I'm Lucas Benitez";
  const work = "Full Stack Web Developer.";

  useEffect(() => {
    setTimeout(() => {
      setStart("")
    }, 4500)
  }, [])

  return (
    <div className="w-full h-screen max-w-7xl mx-auto flex flex-col bg-violet-200">
      <div className="mx-auto w-[88%] h-28 mt-40 sm:w-5/6 sm:h-32 md:h-40 lg:h-52 xl:h-64 xl:mt-32 xl:w-[90%] xl:bg-yellow-200">
        {/* <h1 className={`text-[28px] uppercase font-['Alegreya_Sans_SC'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[88px]`}> */}
        {/* <h1 className={`text-[27px] uppercase font-['Poppins'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] uppercase font-['Lexend_Deca'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[72px]`}> */}
        {/* <h1 className={`text-[28px] uppercase font-['EB_Garamond'] font-extrabold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[76px]`}> */}
        <h1 className={`text-[33px] uppercase font-['Sansita'] font-extrabold ${start} sm:text-[44px] md:text-[53px] lg:text-[70px] xl:text-[90px]`}>
          <AnimatedLetters
            text={name}
            time={0}
          />
          <AnimatedLetters
            text={work}
            time={21}
          />
        </h1>
      </div>
      <h2 className="mx-auto w-[88%] text-base text-black font-['Alegreya_SC'] font-medium sm:mt-6 sm:w-5/6 md:w-5/6 md:font-semibold lg:text-xl lg:w-5/6 xl:w-5/6">
        Front End Developer - JavaScript Expert - Youtuber
      </h2>
      <div className="mx-auto w-[88%] h-20 mt-7 bg-[#2f2f2f] flex justify-end items-center">
        <a href="#" className="relative mr-7 bg-transparent text-black px-3 py-1 rounded-md overflow-hidden border-[2px] border-black group hover:text-white duration-700">
          <span className="absolute rounded-[4px] w-0 group-hover:w-[98%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] left-[1px]"></span>
          <span className="relative uppercase font-semibold">Contacto</span>
        </a>
        <div className="mx-4 font-['Poppins'] flex flex-col">
          <button className="px-4 h-10 rounded bg-[#c60202] z-10 border-b-[3px] border-[#800202] transition-all duration-100 ease-out
          hover:translate-y-[1px] active:scale-95">
            <span className="uppercase text-sm font-semibold text-[#ebf1f8]">Inspirado large</span>
          </button>
          <span className="h-[3px] w-[95%] mx-auto rounded-bl rounded-br bg-[#212121]" />
        </div>
        {/* <div className="mx-2 font-bold uppercase font-['Poppins'] inline-block">
          <a
            className="opacity-100 box-border inline-block h-12 pt-1 relative bg-transparent cursor-pointer text-xs text-center transition-all duration-100 ease-out z-30
            before:bg-[#1d1d1d] before:h-[98%] before:-b-[2px] before:absolute before:rounded-[3px] before:z-10"
            href="#"
          >
            <span className="block h-full box-border">
              <span className="relative flex items-stretch w-full h-[97%] -mt-[3px]
              before:bg-[#00796b] before:rounded-[3px] before:top-auto before:-bottom-[3px] before:z-10
              after:bg-black after:rounded-[3px] after:z-30 after:w-0 after:top-[2px]
              ">
                <span className="bg-[#009688] text-[#ebf1f8] relative flex items-center justify-center rounded-[3px] z-30 overflow-hidden py-0 px-4">
                  <span>
                    <span>Visit de website</span>
                  </span>
                </span>
              </span>
            </span>
          </a>
        </div> */}
        <a href="#" className="relative bg-transparent text-black px-3 py-1 rounded-md overflow-hidden border-[2px] border-black group hover:text-white duration-700">
          <span className="absolute w-0 rounded-[4px] group-hover:w-[99%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] right-[1px]"></span>
          <span className="relative uppercase font-semibold">Descargar CV</span>
        </a>
      </div>
    </div>
  )
}