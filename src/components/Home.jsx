import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import RenderizadorTexto from "./RenderizadorTexto";
import "animate.css";

export default function Home() {

  const [start, setStart] = useState("animate-fadeIn")

  const name = "Hi, I'm Lucas Benitez";  /* emp 0 hasta 20 */
  const work = "Full Stack Web Developer.";  /* emp 21 hasta 45 */

  useEffect(() => {
    setTimeout(() => {
      setStart("")
    }, 4500)
  }, [])

  return (
    <div className="relative w-full h-screen z-10"> {/* container home-page */}
      <div className="absolute left-[15%] top-[30%] w-3/4 md:w-4/5 sm:w-4/5"> {/* text-zone */}
        {/* <h1 className={`text-blue-900 text-9xl font-['Alegreya'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-blue-900 text-9xl font-['Alegreya_SC'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Alegreya_Sans_SC'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Philosopher'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Poppins'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Lexend_Deca'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-blue-900 text-9xl font-['Besley'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-blue-900 text-9xl font-['Libre_Bodoni'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-blue-900 text-9xl font-['Bodoni_Moda'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        <h1 className={`text-black text-9xl font-['EB_Garamond'] font-bold ${start} md:text-6xl sm:text-6xl`}>
        {/* <h1 className={`text-black text-9xl font-['Cormorant_Garamond'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-blue-900 text-9xl font-['Sansita'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
          <AnimatedLetters
            text={name}
            time={0}
            />
        </h1>
        {/* <h1 className={`text-black text-9xl font-['Alegreya'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Alegreya_SC'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Alegreya_Sans_SC'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Philosopher'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Poppins'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Lexend_Deca'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Besley'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Libre_Bodoni'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['Bodoni_Moda'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        {/* <h1 className={`text-black text-9xl font-['EB_Garamond'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
        <h1 className={`text-black text-9xl font-['Cormorant_Garamond'] font-bold ${start} md:text-6xl sm:text-6xl`}>
        {/* <h1 className={`text-black text-9xl font-['Sansita'] font-bold ${start} md:text-6xl sm:text-6xl`}> */}
          <br />
          <AnimatedLetters
            text={work}
            time={21}
          />
        </h1>
        <h2 className="text-gray-500 text-2xl mt-4 font-['Alegreya_SC'] font-medium md:text-lg sm:text-lg">
          Front End Developer / JavaScript Expert / Youtuber
        </h2>
      </div>
    </div>
  )
}