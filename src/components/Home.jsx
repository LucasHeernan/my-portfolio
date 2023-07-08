import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";

export default function Home() {

  const [start, setStart] = useState("animate-fadeIn")

  const name = "Hi, I'm Lucas Benitez";
  const work = "Full Stack Web Developer.";

  useEffect(() => {
    setTimeout(() => {
      setStart("")
    }, 4500)
  }, [])

  return (
    <div className="w-full h-screen max-w-7xl mx-auto flex flex-col bg-violet-200"> {/* container home-page */}
      <div className="mx-auto w-[88%] h-28 mt-40 sm:w-5/6 sm:h-32 md:h-40 lg:h-52 xl:h-64 xl:mt-32"> {/* text-zone */}
      {/* <div className="mx-auto w-[88%] h-28 sm:w-5/6 sm:h-32 md:h-40 lg:h-52 xl:h-64"> text-zone */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Alegreya'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Alegreya_SC'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Alegreya_Sans_SC'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        <h1 className={`text-[27px] font-['Poppins'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}>
        {/* <h1 className={`text-[28px] text-black font-['Lexend_Deca'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Besley'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Libre_Bodoni'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Bodoni_Moda'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-black font-['EB_Garamond'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[28px] text-blue-900 font-['Cormorant_Garamond'] font-bold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[77px]`}> */}
        {/* <h1 className={`text-[33px] font-['Sansita'] font-extrabold ${start} sm:text-[44px] md:text-[53px] lg:text-[70px] xl:text-[89px]`}> */}
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
      <div className="mx-auto w-[88%] mt-7 bg-white">
        <a href="#" className="relative mr-7 bg-transparent text-black px-3 py-1 rounded-md overflow-hidden border-[2px] border-black group hover:text-white duration-700">
          <span className="absolute rounded-[4px] w-0 group-hover:w-[98%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] left-[1px]"></span>
          <span className="relative uppercase font-semibold">Contacto</span>
        </a>
        <a href="#" className="relative bg-transparent text-black px-3 py-1 rounded-md overflow-hidden border-[2px] border-black group hover:text-white duration-700">
          <span className="absolute w-0 rounded-[4px] group-hover:w-[99%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] right-[1px]"></span>
          <span className="relative uppercase font-semibold">Descargar CV</span>
        </a>
      </div>
    </div>
  )
}