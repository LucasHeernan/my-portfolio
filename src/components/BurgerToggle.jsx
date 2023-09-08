import React from "react";

export default function BurgerToggle({ isOpen, handleMenu }) {

  return (
    <button className="absolute left-3 -top-[4px] p-2" onClick={handleMenu}>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black transition-all ease-linear duration-300 ${isOpen ? "bg-white rotate-45 translate-y-[8px] sm:translate-x-3 sm:translate-y-[9px] scale-125" : "-translate-y-0.5"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black transform transition-[opacity] ease-in-out duration-300 ${isOpen ? "bg-white opacity-0" : "opacity-100"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black transition-all ease-linear duration-300 ${isOpen ? "bg-white -rotate-45 -translate-y-[5px] sm:translate-x-3 scale-125" : "translate-y-0.5"}`}></i>
    </button>
  )
};
