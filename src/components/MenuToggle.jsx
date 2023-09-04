import React from "react";

export default function MenuToggle({ isOpen, setIsOpen }) {

  return (
    // <button className="flex flex-col justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
    //   <span className={`block w-7 h-[3px] rounded-full bg-black transition-all ease-in-out duration-300 -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-[12px] scale-125" : "-translate-y-0.5"}`}></span>
    //   <span className={`block w-7 h-[3px] rounded-full bg-black transition-all ease-in-out duration-300 m-1 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
    //   <span className={`block w-7 h-[3px] rounded-full bg-black transition-all ease-in-out duration-300 translate-y-0.5 ${isOpen ? "-rotate-45 -translate-y-[10px] scale-125" : "translate-y-0.5"}`}></span>
    // </button>
    // <div className={`p-1 cursor-pointer ${isOpen ? "" : "group"}`} onClick={() => setIsOpen(!isOpen)}
    <div className={`absolute top-0 left-0 p-1 z-50 cursor-pointer bg-[#ff0066] ${isOpen ? "" : "group"}`} onClick={() => setIsOpen(!isOpen)}>
      <i className={`block w-8 h-[3px] m-1 rounded bg-black transition-all ease-linear duration-300
        ${isOpen ? "rotate-45 translate-y-[8px] scale-125" : "-translate-y-0.5"}`}>
      </i>
      <i className={`block w-8 h-[3px] m-1 rounded bg-black transition-[opacity] ease-in-out duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></i>
      <i className={`block w-8 h-[3px] m-1 rounded bg-black transition-all ease-linear duration-300
        ${isOpen ? "-rotate-45 -translate-y-[6px] scale-125" : "translate-y-0.5"}`}>
      </i>
    </div>
  )
};

// class="transition-transform duration-450 ease-in-out transform transition-background duration-300 ease"
// transform: translate3d(0, -4px, 0)