import React from "react";

export default function MenuToggle({ isOpen, setIsOpen }) {

  return (
    <div className="absolute -top-[4px] cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black transition-all ease-linear duration-300 ${isOpen ? "rotate-45 translate-y-[8px] sm:translate-x-1 sm:translate-y-[9px] scale-125" : "-translate-y-0.5"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black transform transition-[opacity] ease-in-out duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black transition-all ease-linear duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px] sm:translate-x-1 scale-125" : "translate-y-0.5"}`}></i>
    </div>
  )
};
