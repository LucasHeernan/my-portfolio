import React, { useState, useEffect } from "react";
import { Moon, Sun } from "../Technologies/Icons";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "../../ThemeSwitcher";
import { Link } from "react-scroll";

const CustomLink = ({ to, title }) => {
  const [hover, setHover] = useState("right-0");
  const handleHover = () => setHover("left-0");
  const handleHoverLeave = () => setHover("right-0");

  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      className="relative cursor-pointer text-base font-medium uppercase font-['Poppins'] group">{title}
      <span className={`absolute ${hover} -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-300 group-hover:w-full bg-blue-400`}>&nbsp;</span>
    </Link>
  )
  // <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-300 group-hover:w-full group-hover:right-0 bg-blue-400">&nbsp;</span>
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

        <div className="hidden items-center gap-5 text-[#2a2a2a] dark:text-white md:flex">
          <CustomLink to="home" title="Inicio" />
          <CustomLink to="home" title="Sobre mi" />
          <CustomLink to="home" title="Tecnologías" />
          <CustomLink to="projects" title="Proyectos" />
          <CustomLink to="contact" title="Contacto" />
        </div>

        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        <button
          className={`flex rounded-full w-8 p-1 ${mode === "dark" ? "bg-gradient-to-tr from-cyan-300 via-blue-400 to-blue-500" : "bg-gradient-to-tr from-blue-950 via-indigo-950 to-slate-950"}`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          { mode === "dark" ? <Sun className={"text-white"} /> : <Moon className={"text-white"} /> }
        </button>
      </nav>
    </header>
  )
}