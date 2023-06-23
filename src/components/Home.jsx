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
      <div className="mx-auto h-1/3 mt-40 md:w-4/5 bg-yellow-200 sm:left-[10%] sm:w-11/12"> {/* text-zone */}
        {/* <h1 className={`text-blue-900 font-['Alegreya'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Alegreya_SC'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-blue-900 font-['Alegreya_Sans_SC'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        {/* <h1 className={`text-black font-['Philosopher'] font-bold ${start} lg:text-8xl md:text-6xl sm:text-5xl`}> */}
        <h1 className={`text-black text-2xl font-['Poppins'] font-extrabold ${start} bg-red-500 lg:text-7xl md:text-6xl sm:text-5xl`}>
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
      <h2 className="mx-auto text-black text-2xl mt-4 font-['Alegreya_SC'] font-medium md:text-lg sm:text-lg">
        Front End Developer / JavaScript Expert / Youtuber
      </h2>
    </div>
  )
}