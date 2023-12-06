import React from "react";

export default function BurgerToggle({ isOpen, handleMenu }) {

  return (
    <button className="absolute left-1 xs:left-3 -top-[4px] p-2" onClick={handleMenu}>
      <i className={`block w-8 h-[3px] my-1 rounded transition-all ease-linear duration-700 ${isOpen ? "bg-[#ebebeb] dark:bg-[#ebebeb] rotate-[135deg] translate-y-7 translate-x-3 scale-125" : "-translate-y-0.5 bg-[#2a2a2a] dark:bg-[#fff]"}`}></i>
      <i className={`block w-7 h-[3px] my-1 rounded transform transition-[opacity] ease-in-out duration-300 ${isOpen ? "bg-white opacity-0" : "opacity-100 bg-[#44464a] dark:bg-[#cacaca]"}`}></i>
      <i className={`block w-8 h-[3px] my-1 rounded transition-all ease-linear duration-700 ${isOpen ? "bg-[#ebebeb] dark:bg-[#ebebeb] rotate-[225deg] translate-y-[14px] translate-x-3 scale-125" : "translate-y-0.5 bg-[#5b656d] dark:bg-[#9a9a9a]"}`}></i>
      {/* <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded transition-all ease-linear duration-300 ${isOpen ? "bg-[#fff] dark:bg-[#fff] rotate-[135deg] translate-y-[8px] sm:translate-x-3 sm:translate-y-[9px] scale-125" : "-translate-y-0.5 bg-[#2a2a2a] dark:bg-[#fff]"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded transform transition-[opacity] ease-in-out duration-300 ${isOpen ? "bg-white opacity-0" : "opacity-100 bg-[#44464a] dark:bg-[#cacaca]"}`}></i>
      <i className={`block w-7 sm:w-8 h-[2.5px] sm:h-[3px] my-1 rounded transition-all ease-linear duration-300 ${isOpen ? "bg-[#fff] dark:bg-[#fff] rotate-[225deg] -translate-y-[5px] sm:translate-x-3 scale-125" : "translate-y-0.5 bg-[#5b656d] dark:bg-[#9a9a9a]"}`}></i> */}
    </button>
  )
};
