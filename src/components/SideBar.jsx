import React from "react";

export default function SideBar({ handleMenu }) {

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-3/4 h-screen pt-12 transform transition-[width] -translate-x-full will-change-transform bg-stone-900">
    {/* <nav className="fixed top-0 left-0 right-0 w-full h-screen pt-12 transform transition-[height] -translate-y-full will-change-transform bg-sky-900"> */}
      <ul className="flex flex-col gap-1 px-2 pb-10 h-full">
        <a
          href="#home"
          onClick={handleMenu}
          className="text-[#999] flex will-change-transform transform origin-left font-bold text-5xl p-2
          items-center text-center w-[90%] max-w-xl my-0 mx-auto h-1/4 relative bg-[#313131] overflow-hidden
          transition-colors duration-300 ease-in-out delay-150
          before:absolute before:top-0 before:left-0 before:h-[75%] before:w-full before:-z-10 before:-translate-x-full before:transition-all before:duration-300 before:ease-in-out before:hover:translate-x-0 before:bg-[#515151]
          after:absolute after:bottom-0 after:left-0 after:h-[75%] after:w-full after:-z-20 after:translate-x-full after:transition-all after:duration-300 after:ease-in-out after:delay-75 after:hover:translate-x-0 after:bg-[#3f3f3f]"
        >
          <span className="block w-full text-center text-[#cacaca]">Inicio</span>
        </a>
        <a
          href="#"
          onClick={handleMenu}
          className="text-[#999] flex will-change-transform transform origin-left font-bold text-5xl p-2
          items-center text-center w-[90%] max-w-xl my-0 mx-auto h-1/4 relative bg-[#313131] overflow-hidden
          transition-colors duration-300 ease-in-out delay-150
          before:absolute before:top-0 before:left-0 before:h-[75%] before:w-full before:-z-10 before:-translate-x-full before:transition-all before:duration-300 before:ease-in-out before:hover:translate-x-0 before:bg-[#515151]
          after:absolute after:bottom-0 after:left-0 after:h-[75%] after:w-full after:-z-20 after:translate-x-full after:transition-all after:duration-300 after:ease-in-out after:delay-75 after:hover:translate-x-0 after:bg-[#3f3f3f]"
        >
          <span className="block w-full text-center text-[#cacaca]">Sobre mi</span>
        </a>
        <a
          href="#projects"
          onClick={handleMenu}
          className="text-[#999] flex will-change-transform transform origin-left font-bold text-5xl p-2
          items-center text-center w-[90%] max-w-xl my-0 mx-auto h-1/4 relative bg-[#313131] overflow-hidden
          transition-colors duration-300 ease-in-out delay-150
          before:absolute before:top-0 before:left-0 before:h-[75%] before:w-full before:-z-10 before:-translate-x-full before:transition-all before:duration-300 before:ease-in-out before:hover:translate-x-0 before:bg-[#515151]
          after:absolute after:bottom-0 after:left-0 after:h-[75%] after:w-full after:-z-20 after:translate-x-full after:transition-all after:duration-300 after:ease-in-out after:delay-75 after:hover:translate-x-0 after:bg-[#3f3f3f]"
        >
          <span className="block w-full text-center text-[#cacaca]">Proyectos</span>
        </a>
        <a
          href="#contact"
          onClick={handleMenu}
          className="text-[#999] flex will-change-transform transform origin-left font-bold text-5xl p-2
          items-center text-center w-[90%] max-w-xl my-0 mx-auto h-1/4 relative bg-[#313131] overflow-hidden
          transition-colors duration-300 ease-in-out delay-150
          before:absolute before:top-0 before:left-0 before:h-[75%] before:w-full before:-z-10 before:-translate-x-full before:transition-all before:duration-300 before:ease-in-out before:hover:translate-x-0 before:bg-[#515151]
          after:absolute after:bottom-0 after:left-0 after:h-[75%] after:w-full after:-z-20 after:translate-x-full after:transition-all after:duration-300 after:ease-in-out after:delay-75 after:hover:translate-x-0 after:bg-[#3f3f3f]"
        >
          <span className="block w-full text-center text-[#cacaca]">Contacto</span>
        </a>
      </ul>
    </nav>
  );
}
