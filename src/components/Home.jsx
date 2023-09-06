import React from "react";
import AnimatedLetters from "./AnimatedLetters";

export default function Home() {

  // const name = "Hi, I'm Lucas Benitez"; 21
  const name = "Hola! Soy Lucas Benitez"; /* 23 */
  // const work = "Full Stack Web Developer."; /* 25 */
  const work = "Desarrollador Full Stack."; /* 25 --> De 24 a 59 */

  return (
    <main className="w-full h-screen cursor-default">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col px-5 pt-36 text-black dark:text-white md:pt-32 lg:px-7 xl:px-10 xl:pt-32">
        <div className="w-full h-24 sm:h-32 md:h-40 lg:h-52 xl:h-60">
        {/* <div className="w-full h-24 sm:h-32 md:h-40 lg:h-52 xl:h-60 bg-green-200 sm:bg-yellow-200 md:bg-orange-300 lg:bg-red-300 xl:bg-fuchsia-400"> */}
          <h1 className="uppercase text-[25px] font-black sm:text-[37px] md:text-[46px] lg:text-[61px] xl:text-[76px]">
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
        <div className="w-full py-2">
        {/* <div className="w-full py-2 bg-green-200 sm:bg-yellow-200 md:bg-orange-400 lg:bg-red-400 xl:bg-fuchsia-400"> */}
          <p className="text-base font-medium sm:w-5/6 md:w-5/6 md:font-semibold lg:text-xl lg:w-5/6 xl:w-5/6">
            Full Stack developer orientado al Front end con experiencia en desarrollo de aplicaciones web y mobile en Javascript con ReactJS, React Native, Redux, NodeJS, Express, PostgreSQL
          </p>
        </div>
        <div className="w-full pt-2">
        {/* <div className="w-full pt-2 bg-green-200 sm:bg-yellow-200 md:bg-orange-400 lg:bg-red-400 xl:bg-fuchsia-400"> */}
          <div className="w-full flex">
            <div
              className="inline-block px-3 py-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-[15px] tracking-wider shadow-md shadow-[rgba(0,0,0,.75)] mr-7 relative overflow-hidden cursor-pointer
              before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
              after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
            >
              <span className="relative z-20">ver más</span>
            </div>
            <div
              className="inline-block px-3 py-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-[15px] tracking-wider shadow-md shadow-[rgba(0,0,0,.50)] relative overflow-hidden cursor-pointer
              before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
              after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
            >
              <span className="relative z-20">repositorio</span>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto w-full h-20 mt-7 flex justify-end items-center bg-violet-400">
          <div className="mx-4 flex flex-col">
            <button className="px-4 h-10 rounded bg-[#c60202] z-10 border-b-[3px] border-[#800202] transition-all duration-100 ease-out
            hover:translate-y-[1px] active:scale-95">
              <span className="uppercase text-sm font-semibold text-[#ebf1f8]">Inspirado large</span>
            </button>
            <span className="h-[3px] w-[95%] mx-auto rounded-bl rounded-br bg-[#212121]" />
          </div>
        </div> */}
      </div>
    </main>
  )
}

// <h1 className={`text-[28px] uppercase font-['Alegreya_Sans_SC'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[88px]`}>
// <h1 className={`text-[28px] uppercase font-['Lexend_Deca'] font-black ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[72px]`}>
// <h1 className={`text-[28px] uppercase font-['EB_Garamond'] font-extrabold ${start} sm:text-[39px] md:text-[46px] lg:text-[61px] xl:text-[76px]`}>
// <h1 className={`text-[33px] uppercase font-['Sansita'] font-bold ${start} sm:text-[44px] md:text-[53px] lg:text-[70px] xl:text-[96px]`}>