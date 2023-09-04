import React, { useState, useEffect } from "react";

export default function Barra() {
  const [nav, setNav] = useState(false);

  const handleNav = () => { setNav(!nav) };

  return (
    <header className="relative w-full">
      <div className="fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="z-50" onClick={handleNav}>
            <button className="flex flex-col justify-center items-center" onClick={() => setNav(!nav)}>
              <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full -translate-y-0.5 ${nav ? "rotate-45 translate-y-[10px]" : "-translate-y-0.5"}`}></span>
              <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full my-0.5 ${nav ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full translate-y-0.5 ${nav ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>
          </div>
          <div className="w-10 h-10 rounded-full bg-black"/>
        </div>
        <div className={ nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#587388] p-10 ease-in duration-500"
                : "fixed -left-full top-0 p-10 ease-in duration-500"
            }
          >

          </div>
        </div>
      </div>
    </header>
  )
}