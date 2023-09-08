import React, { useState, useEffect } from "react";
import { Moon, Sun } from "./Icons";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "../ThemeSwitcher";

const CustomLink = ({ href, title }) => {
  const [hover, setHover] = useState("right-0");
  const handleHover = () => setHover("left-0");
  const handleHoverLeave = () => setHover("right-0");

  return (
    <a href={href} className="relative cursor-pointer uppercase group" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>{title}
      <span className={`absolute ${hover} -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-300 group-hover:w-full bg-blue-400`}>&nbsp;</span>
      {/* <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-300 group-hover:w-full group-hover:right-0 bg-blue-400">&nbsp;</span> */}
    </a>
  )
}

export default function NavBar() {

  const [mode, setMode] = ThemeSwitcher();
  const [navShadow, setNavShadow] = useState(false);
  
  useEffect(() => {
    const handleShadow = () => { window.scrollY >= 50 ? setNavShadow(true) : setNavShadow(false) };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header className={`fixed w-full z-40 items-center py-1 md:py-2 transition-shadow ease-in-out duration-300 ${navShadow ? "shadow-xl backdrop-blur-3xl dark:shadow-lg dark:shadow-neutral-900" : ""}`}>
      <nav className="relative flex max-w-7xl mx-auto justify-between px-5 lg:px-7 xl:px-10">

        <div className="hidden text-base font-medium items-center gap-5 text-black dark:text-white md:flex">
          <CustomLink href="#" title="Inicio" />
          <CustomLink href="#" title="Sobre mi" />
          <CustomLink href="#" title="Tecnologías" />
          <CustomLink href="#projects" title="Proyectos" />
          <CustomLink href="#contact" title="Contacto" />
        </div>

        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        <button
          className={`flex rounded-full w-8 p-1 ${mode === "dark" ? "bg-white" : "bg-blue-400"}`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          { mode === "dark" ? <Sun className={"text-black"} /> : <Moon className={"text-white"} /> }
        </button>
      </nav>
    </header>
  )
}