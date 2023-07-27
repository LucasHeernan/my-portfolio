import React, { useState } from "react";
import test from "../assets/projectsImages/InstaHome.png";

export default function ProjectItem() {

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const handleMouseEnterLeft = () => setLeft(true);
  const handleMouseLeaveLeft = () => setLeft(false);
  const handleMouseEnterRight = () => setRight(true);
  const handleMouseLeaveRight = () => setRight(false);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-yellow-200">
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
        <div className="w-2/5 h-full">
          <div className="relative overflow-hidden flex w-full h-full border-2 border-gray-300 shadow-black shadow-lg">
            <button
              className={`absolute block cursor-pointer w-1/4 h-full z-20 left-0 bg-gradient-to-l from-transparent to-slate-600 transition-opacity duration-700 ease-out opacity-[${left ? 0.7 : 0.3}]`}
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
            >
              <em className={`absolute block h-7 w-7 top-1/2 left-7 transition-transform duration-200 ease-out delay-2
              before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-1 before:bg-black before:opacity-75 before:origin-top-left before:duration-200 before:ease-out
              after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:left-0 after:h-full after:w-1 after:bg-black after:opacity-75 after:origin-top after:duration-200 after:ease-out`}
              />
            </button>
            <button
              className={`absolute block cursor-pointer w-1/4 h-full z-20 right-0 bg-gradient-to-r from-transparent to-slate-700 transition-opacity duration-700 ease-out opacity-[${right ? 0.7 : 0.3}]`}
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
            >
              <em className={`absolute block h-7 w-7 top-1/2 right-7 transition-transform duration-200 ease-out delay-2
              before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-1 before:bottom-[2px] before:bg-black before:origin-top before:duration-200 before:ease-out
              after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:right-0 after:h-full after:w-1 after:bg-black after:origin-top after:duration-200 after:ease-out`}
              />
            </button>
            <img
              src={test}
              alt="probando"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}