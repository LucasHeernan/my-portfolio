import React, { useState, useEffect } from "react";
import AnimatedLetters2 from "../Animations/AnimatedLetters2";

export default function Home3() {

  const hi = "Hola!"; /* (0.5 = 3) | (0.75 = 4.5) | (1 = 6) */
  const name = "Soy Lucas Benitez,"; /* ( 0.5 = 12) | (0.75 = 18) | (1 = 24) */
  const work = "Full Stack developer."; /* (0.5 = 22) | (0.75 = 33.75) | (1 = 45) */
  
  const [first, setFirts] = useState("animado");

  useEffect(() => {
    setTimeout(() => {
      setFirts("animado-hover");
    }, 4000)
  }, [])

  return (
    <div className="w-full h-full absolute">    {/* PAGE */}
      {/* <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-[10px] xs:px-5 pt-36 text-[#2a2a2a] dark:text-[#ebebeb] sm:pt-32 md:pt-28 lg:px-7 xl:px-10 xl:pt-28"> CONTAINER - HOME PAGE */}
      <div className="home"> {/* CONTAINER - HOME PAGE */}

        {/* <div className="w-full h-40 sm:h-52 md:h-56 lg:h-64 xl:h-[270px]"> TEXT ZONE */}
        <div className="absolute left-[10%] top-1/2 w-2/5 max-w-[90%]"> {/* TEXT ZONE */}

          <h1 className="text-pink-600 text-[56px] leading-[53px] m-0 font-poppins font-bold">
            <AnimatedLetters2 first={first} text={hi} time={0} />
            <AnimatedLetters2 first={first} text={name} time={5} />
            <AnimatedLetters2 first={first} text={work} time={20} />
          </h1>
        </div>
        
      </div>
    </div>
  )
};
