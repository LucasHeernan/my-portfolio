import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";

export default function Home() {

  const [start, setStart] = useState("animate-fadeIn");

  const name = "Hi, I'm Lucas Benitez";
  const work = "Full Stack Web Developer.";

  useEffect(() => {
    setTimeout(() => {
      setStart("")
    }, 4100)
  }, [])

  return (
    <div className="w-full h-screen max-w-7xl mx-auto flex flex-col justify-evenly cursor-default bg-violet-200">
      <div className="mx-auto w-[88%] h-28 sm:w-5/6 sm:h-32 md:h-40 lg:h-52 xl:h-64 xl:mt-20 xl:w-[90%] xl:bg-yellow-200">
      {/* <div className="mx-auto w-[88%] h-28 mt-40 sm:w-5/6 sm:h-32 md:h-40 lg:h-52 xl:h-64 xl:mt-32 xl:w-[90%] xl:bg-yellow-200"> */}
        {/* <h1 className={`text-[28px] uppercase font-['Alegreya_Sans_SC'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[88px]`}> */}
        <h1 className={`text-[27px] uppercase font-['Poppins'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}>
        {/* <h1 className={`text-[28px] uppercase font-['Lexend_Deca'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[72px]`}> */}
        {/* <h1 className={`text-[28px] uppercase font-['EB_Garamond'] font-extrabold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[76px]`}> */}
        {/* <h1 className={`text-[33px] uppercase font-['Sansita'] font-bold ${start} sm:text-[44px] md:text-[53px] lg:text-[70px] xl:text-[96px]`}> */}
          <AnimatedLetters
            text={name}
            time={0}
          />
          <AnimatedLetters
            text={work}
            time={17}
          />
        </h1>
      </div>
      <div className="flex items-center py-5 w-[88%] mx-auto font-['Poppins'] xl:w-[90%] bg-white">
        <h2 className="text-base font-medium sm:w-5/6 md:w-5/6 md:font-semibold lg:text-xl lg:w-5/6 xl:w-5/6">
          Front End Developer - JavaScript Expert - Youtuber
        </h2>
      </div>
      <div className="mx-auto w-[88%] h-20 mt-7 bg-violet-400 flex justify-end items-center xl:w-[90%]">
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
        <a href="#" className="relative bg-transparent text-black px-3 py-1 rounded-md overflow-hidden border-[2px] border-black group hover:text-white duration-700">
          <span className="absolute w-0 rounded-[4px] group-hover:w-[99%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] right-[1px]"></span>
          <span className="relative uppercase font-semibold">Descargar CV</span>
        </a>
      </div>
    </div>
  )
}