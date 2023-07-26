import React, { useState } from "react";
import test from "../assets/projectsImages/InstaHome.png";

export default function Doris() {

  const [left, setLeft] = useState(0.3);
  const [right, setRight] = useState(0.3);

  const handleMouseEnterLeft = () => setLeft(0.7);
  const handleMouseLeaveLeft = () => setLeft(0.3);
  const handleMouseEnterRight = () => setRight(0.7);
  const handleMouseLeaveRight = () => setRight(0.3);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-yellow-200">
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
        <div className="w-2/5 h-full flex justify-center items-center">
          <div className="relative overflow-hidden flex w-[98%] h-[98%] border-2 border-gray-300 shadow-black shadow-lg">
            <div
              className={`absolute w-1/4 h-full z-20 left-0 bg-gradient-to-l from-transparent to-slate-500 opacity-[${left}]`}
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
            >
              <span className="text-5xl">&lt;</span>
            </div>
            <div
              className={`absolute w-1/4 h-full z-20 right-0 bg-gradient-to-r from-transparent to-slate-600 opacity-[${right}]`}
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
            >
              <span className="text-5xl">&gt;</span>
            </div>
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