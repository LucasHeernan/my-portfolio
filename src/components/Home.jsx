import React from "react";
import "animate.css";
import AnimatedLetters from "./AnimatedLetters";
import RenderizadorTexto from "./RenderizadorTexto";

export default function Home() {

  const name = "Hi, I'm Lucas Benitez";  /* emp 0 hasta 20 */
  const work = "Full Stack Web Developer."  /* emp 21 hasta 45 */

  return (
    <div className="relative w-full h-screen z-10"> {/* container home-page */}
      <div className="absolute left-[15%] top-[30%] w-3/4 md:w-4/5 sm:w-4/5"> {/* text-zone */}
        <h1 className="text-black text-8xl font-bold animate__animated animate__fadeIn md:text-6xl sm:text-5xl">
          {/* <AnimatedLetters
            text={name}
            time={0}
          />
          <br />
          <AnimatedLetters
            text={work}
            time={21}
          /> */}
          <RenderizadorTexto
            texto={name}
            start={0}
          />
          <RenderizadorTexto
            texto={work}
            start={21}
          />
        </h1>
        <h2 className="text-gray-500 text-2xl mt-4 font-semibold md:text-lg sm:text-lg">
          Front End Developer / JavaScript Expert / Youtuber
        </h2>
      </div>
    </div>
  )
}