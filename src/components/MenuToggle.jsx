import React from "react";

export default function MenuToggle({ isOpen, setIsOpen }) {

  return (
    <div className="absolute cursor-pointer w-12 h-11 p-2 bg-[#ff0066]" onClick={() => setIsOpen(!isOpen)}>
      <i className={`block w-8 h-[3px] my-1 rounded bg-black transition-all ease-linear duration-300 ${isOpen ? "rotate-45 translate-y-[8px] scale-125" : "-translate-y-0.5"}`}></i>
      <i className={`block w-8 h-[3px] my-1 rounded bg-black transform transition-[opacity] ease-in-out duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></i>
      <i className={`block w-8 h-[3px] my-1 rounded bg-black transition-all ease-linear duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px] scale-125" : "translate-y-0.5"}`}></i>
    </div>
  )
};
