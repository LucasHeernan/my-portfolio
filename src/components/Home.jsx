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
    <div className="w-full h-screen z-10 flex flex-col bg-violet-300"> {/* container home-page */}
      <div className="mx-auto w-[85%] h-32 mt-40 bg-violet-700 sm:w-[95%] sm:h-36 sm:text-white md:w-4/5"> {/* text-zone */}
        {/* <h1 className={`text-blue-900 font-['Alegreya'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Alegreya_SC'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Alegreya_Sans_SC'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Philosopher'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        <h1 className={`text-[31px] font-['Poppins'] font-black ${start} bg-rose-500 sm:text-[44px] md:text-6xl lg:text-7xl`}>
        {/* <h1 className={`text-black font-['Lexend_Deca'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Besley'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Libre_Bodoni'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Bodoni_Moda'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['EB_Garamond'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Cormorant_Garamond'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 text-3xl font-['Sansita'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
          <AnimatedLetters
            text={name}
            time={0}
          />
        {/* </h1> */}
        {/* <h1 className={`text-black font-['Alegreya'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Alegreya_SC'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Alegreya_Sans_SC'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Philosopher'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Poppins'] font-extrabold ${start} lg:text-7xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Lexend_Deca'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Besley'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Libre_Bodoni'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Bodoni_Moda'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['EB_Garamond'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Cormorant_Garamond'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black text-3xl font-['Sansita'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
          <AnimatedLetters
            text={work}
            time={21}
          />
        </h1>
      </div>
      <h2 className="mx-auto w-[85%] text-lg text-black mt-2 font-['Alegreya_SC'] font-semibold bg-white sm:mt-6 sm:text-orange-500 md:text-lg">
        Front End Developer / JavaScript Expert / Youtuber
      </h2>
    </div>
  )
}