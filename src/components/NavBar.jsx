import React, { useState, useEffect } from "react";
import IconContainer from "./InconContainer";
import Framer from "./Framer";
import { Github, Linkedin, Whatsapp, Email, Moon, Sun } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({title}) => {
  return (
    <p className="relative cursor-pointer uppercase group">{title}
      <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] inline-block rounded-full bg-blue-500 group-visited:w-full transition-[width] ease-in-out duration-500">&nbsp;</span>
    </p>
  )
}

export default function NavBar() {

  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => { window.scrollY >= 50 ? setNavShadow(true) : setNavShadow(false) };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header className={`fixed w-full h-20 z-40 transition-shadow ease-in-out duration-300 ${navShadow ? "shadow-xl backdrop-blur-3xl" : ""}`}>
    {/* <header className={`fixed w-full z-40 items-center py-2 transition-shadow ease-in-out duration-300 ${navShadow ? "shadow-xl backdrop-blur-3xl" : ""}`}>  ANTES */}
    {/* <header className="fixed w-full z-40 items-center py-2 transition-shadow ease-in-out duration-300"> */}
      <nav className="flex max-w-7xl mx-auto justify-between items-center px-5 lg:px-7 xl:px-10">

        {/* MOBILE MENU */}
        <div className="flex md:hidden">
          <Framer />
        </div>

        <div className="hidden text-base font-medium items-center gap-5 md:flex">
          <CustomLink title="Inicio" />
          <CustomLink title="Sobre mi" />
          <CustomLink title="Tecnologías" />
          <CustomLink title="Proyectos" />
          <CustomLink title="Contacto" />
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/LucasHeernan"
            target="_blank"
            // className="hidden md:inline-block"
            className="hidden"
            whileTap={{scale: 0.8}}
          >
            <IconContainer>
              <Github className="w-2/3 z-10 mb-[0.5px] mr-[1px]" />
            </IconContainer>
          </motion.a>
          <motion.a
            href="#"
            // className="hidden md:inline-block"
            className="hidden"
            whileTap={{scale: 0.8}}
          >
            <IconContainer>
              <Linkedin className="w-7/12 z-10 ml-[2px] mb-[1px]" />
            </IconContainer>
          </motion.a>
          <motion.a
            href="#"
            // className="hidden md:inline-block"
            className="hidden"
            whileTap={{scale: 0.8}}
          >
            <IconContainer>
              <Whatsapp className="w-3/4 z-10 mb-[0.5px] ml-[1px]" />
            </IconContainer>
          </motion.a>
          <motion.a
            href="#"
            // className="hidden md:inline-block"
            className="hidden"
            whileTap={{scale: 0.8}}
          >
            <IconContainer>
              <Email className="w-2/3 z-10 ml-[2px] mt-[1px]" />
            </IconContainer>
          </motion.a>
          {/* <div className="hidden md:flex items-center justify-center">
            <a href="#" className="relative bg-transparent text-black px-3 py-1 rounded-sm overflow-hidden border-[2px] border-black group hover:text-white duration-700">
              <span className="absolute w-0 group-hover:w-[99%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] left-[1px]"></span>
              <span className="relative uppercase font-semibold">Contacto</span>
            </a>
          </div> */}
          <button
            className={`flex rounded-full w-[30px] p-1 ${dark ? "bg-black" : "bg-blue-400"}`}
            onClick={() => setDark(!dark)}
          >
            { dark ? <Moon className={"text-white"} /> : <Sun className={"text-white"} /> }
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden">
          {/* BURGER ICON */}
          <button className="flex flex-col justify-center items-center md:hidden" onClick={() => setMenu(!menu)}>
            <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full -translate-y-0.5 ${menu ? "rotate-45 translate-y-[10px]" : "-translate-y-0.5"}`}></span>
            <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full my-0.5 ${menu ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full translate-y-0.5 ${menu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
          </button>

          {/* LISTA */}
          <div className={menu ? "fixed right-0 top-[55px] w-full h-screen bg-black/50 transition-all duration-500 ease-out" : ""}>
            <div className={menu ? "fixed flex flex-col justify-evenly items-center right-0 top-[54px] w-3/4 h-screen bg-white p-10 ease-in duration-500 sm:w-2/3 md:w-1/2" : "fixed -right-full h-full top-14 p-10 ease-in duration-500"}>
              <ul className="w-full text-lg font-bold text-black uppercase tracking-widest m-4">
                <li className="p-4 border-b border-gray-600">Acerca de mi</li>
                <li className="p-4 border-b border-gray-600">Tecnologías</li>
                <li className="p-4 border-b border-gray-600">Proyectos</li>
                <li className="p-4 border-b border-gray-600">Contacto</li>
              </ul>
              <div className="flex w-full items-center my-8 mx-auto justify-between sm:w-[80%]">
                <a
                  href="https://github.com/LucasHeernan" target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Github className="w-8 h-8"/>
                </a>
                <a href="#" className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Linkedin className="w-8 h-8"/>
                </a>
                <a href="#" className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Whatsapp className="w-8 h-8"/>
                </a>
                <a href="#" className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Email className="w-8 h-8"/>
                </a>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

//  <div className="hidden text-lg font-['Alegreya_Sans_SC'] font-medium items-center gap-5 md:flex">
//  <div className="hidden text-base font-['Philosopher'] font-bold items-center gap-5 md:flex">
//  <div className="hidden text-base font-['Lexend_Deca'] font-normal items-center gap-5 md:flex">
//  <div className="hidden text-xl font-['Sansita'] font-normal items-center gap-5 md:flex">