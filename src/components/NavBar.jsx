import React, { useState } from "react";
import { Github, Linkedin, Moon, Sun } from "./Icons";
import { motion } from "framer-motion";
import whatsapp from "../assets/images/whatsapp.svg";

const CustomLink = ({title}) => {
  return (
    <p className="relative cursor-pointer uppercase group">{title}
      <span className="h-[2.5px] inline-block w-0 rounded-full bg-blue-500 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-500">&nbsp;</span>
    </p>
  )
}

export default function NavBar() {

  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed shadow-xl w-full z-50 items-center py-3 px-6 bg-white backdrop-blur-sm">
      <nav className="flex justify-between">

        <div className="hidden font-semibold items-center gap-5 md:flex">
          <CustomLink title="Sobre mi" />
          <CustomLink title="Tecnologías" />
          <CustomLink title="Proyectos" />
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/LucasHeernan"
            target="_blank"
            className="w-8"
            whileHover={{y:-3}}
            whileTap={{scale: 0.8}}
          >
            <Github />
          </motion.a>
          <motion.a
            href="#"
            className="w-8"
            whileHover={{y:-3}}
            whileTap={{scale: 0.8}}
          >
            <Linkedin />
          </motion.a>
          <motion.a
            href="#"
            className="w-8"
            whileHover={{y:-3}}
            whileTap={{scale: 0.8}}
          >
            <img src={whatsapp} className="w-full h-full"/>
          </motion.a>
          <div className="flex items-center justify-center">
            <a href="#" className="relative bg-transparent text-black px-3 py-1 rounded-sm overflow-hidden border-[2px] border-black group hover:text-white duration-700">
              <span className="absolute w-0 group-hover:w-[98%] transition-all ease-out duration-700 h-[95%] bg-black top-[1px] left-[1px]"></span>
              <span className="relative uppercase font-semibold">Contacto</span>
            </a>
          </div>
          <button
            className={`flex rounded-full w-[30px] p-1 ${dark ? "bg-blue-500" : "bg-blue-950"}`}
            onClick={() => setDark(!dark)}
          >
            { dark ? <Moon className={"text-white"} /> : <Sun className={"text-white"} /> }
          </button>
        </div>

        <nav className="flex md:hidden">                {/* MOBILE MENU */}
          <button className="flex flex-col justify-center items-center md:hidden" onClick={() => setMenu(!menu)}>
            <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full -translate-y-0.5 ${menu ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
            <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full my-0.5 ${menu ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`bg-black block transition-all duration-500 ease-out h-0.5 w-6 rounded-full translate-y-0.5 ${menu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
          </button>

          <div className={menu ? "fixed right-0 top-14 w-full h-screen bg-black/50 transition-all duration-500 ease-out" : ""}>
            <div className={menu ? "fixed right-0 top-14 w-3/4 sm:w-2/3 md:w-1/2 h-screen bg-white p-10 ease-in duration-500" : "fixed -right-full top-14 p-10 ease-in duration-500"}>
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://github.com/LucasHeernan" target="_blank"
                >
                  <Github className="w-full h-full"/>
                </a>
                <a href="https://github.com/LucasHeernan" target="_blank"><Linkedin className="cursor-pointer" /></a>
                <a href="https://github.com/LucasHeernan" target="_blank"><img src={whatsapp} className="w-full h-full cursor-pointer"/></a>
              </div>
            </div>
          </div>
        </nav>

      </nav>
    </header>
  )
}