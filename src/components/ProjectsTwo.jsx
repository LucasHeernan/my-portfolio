import React, { useState } from "react";
import test from "../assets/projectsImages/InstaHome.png";
// import test1 from "../assets/projectsImages/Pokemonfilter.png";

export default function ProjectsTwo() {

  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    const isFirstImg = currentImg === 0;
    const newIndex = isFirstImg ? images.length - 1 : currentImg - 1;
    setCurrentImg(newIndex);
  };

  const nextImg = () => {
    const isLastImg = currentImg === images.length - 1;
    const newIndex = isLastImg ? 0 : currentImg + 1;
    setCurrentImg(newIndex);
  }
  
  return (
    <section className="w-full h-screen flex justify-center items-center bg-blue-200">
      <div className="max-w-7xl w-full h-3/4 flex justify-between bg-white">
        <div className="w-3/5 h-full flex flex-col justify-evenly bg-blue-300">
          <h3 className="text-xl font-bold text-white sm:text-2xl">TITULO PROYECTO</h3>
          <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores totam incidunt quidem? Modi aspernatur voluptates aliquid blanditiis repellat. Molestiae maiores ratione aliquam vitae rerum ab natus quia minima? Ipsa!</p>
          <p className="text-sm text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias delectus fuga assumenda inventore blanditiis architecto. Maiores nesciunt voluptates quibusdam magni hic, odio rem molestias labore suscipit? Ea dicta qui officia?</p>
          <div className="flex mt-1">
            <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">tech 1</span>
            <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">tech 2</span>
            <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">tech 3</span>
            <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">tech 4</span>
            <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">tech 5</span>
            <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">tech 6</span>
          </div>
        </div>
        {/* <div className="carousel overflow-hidden py-7 sm:py-9 md:py-10 lg:py-12 whitespace-nowrap relative flex w-full m-auto font-['Poppins']
        before:absolute before:top-0 before:w-12 sm:before:w-20 md:before:w-28 lg:before:w-36 before:h-full before:content-[''] before:z-20
        after:absolute after:top-0 after:w-12 sm:after:w-20 md:after:w-28 lg:after:w-36 after:h-full after:content-[''] after:z-20
        before:left-0 before:bg-gradient-to-l before:from-transparent before:to-white
        after:right-0 after:bg-gradient-to-r after:from-transparent after:to-white"
        /> */}
        <div className="w-2/5 h-full flex justify-center items-center">
          {/* <div
            style={{ backgroundImage: `url(${test1})` }}
            className="w-full h-full bg-center bg-contain bg-no-repeat"
            alt="probando"
          /> */}
          {/* <div className="relative overflow-hidden flex w-[98%] h-[98%] border-2 border-gray-300 shadow-black shadow-lg
            before:absolute before:w-32 before:h-full before:content-[''] before:z-20
            after:absolute after:w-32 after:h-full after:content-[''] after:z-20
            before:left-0 before:bg-gradient-to-l before:from-white before:to-violet-300
            after:right-0 after:bg-gradient-to-r after:from-white after:to-violet-300
            after:hover:from-transparent after:hover:to-violet-400"
          > */}
          <div className="project w-[98%] h-[98%] border-2 border-gray-300 shadow-black shadow-lg">
            <img
              src={test}
              alt="probando"
              className="absolute w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}