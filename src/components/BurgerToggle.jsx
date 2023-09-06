import React from "react";

export default function BurgerToggle({ isOpen, handleMenu }) {

  return (
    <div className="absolute left-3 -top-[4px] cursor-pointer p-2" onClick={handleMenu}>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black dark:bg-white transition-all ease-linear duration-300 ${isOpen ? "rotate-45 translate-y-[8px] sm:translate-x-3 sm:translate-y-[9px] scale-125" : "-translate-y-0.5"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black dark:bg-white transform transition-[opacity] ease-in-out duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded bg-black dark:bg-white transition-all ease-linear duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px] sm:translate-x-3 scale-125" : "translate-y-0.5"}`}></i>
    </div>
  )
};
