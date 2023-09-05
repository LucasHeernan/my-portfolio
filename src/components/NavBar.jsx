import React, { useState, useEffect } from "react";
import { Moon, Sun } from "./Icons";
import MobileMenu from "./MobileMenu";

const CustomLink = ({title}) => {
  return (
    <p className="relative cursor-pointer uppercase group">{title}
      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-500 group-hover:w-full bg-blue-500">&nbsp;</span>
    </p>
  )
}

export default function NavBar() {

  const [dark, setDark] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  
  useEffect(() => {
    const handleShadow = () => { window.scrollY >= 50 ? setNavShadow(true) : setNavShadow(false) };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header className={`fixed w-full z-40 items-center py-1 md:py-2 transition-shadow ease-in-out duration-300 ${navShadow ? "shadow-xl backdrop-blur-3xl" : ""}`}>
      <nav className="relative flex max-w-7xl mx-auto justify-between px-5 lg:px-7 xl:px-10">

        <div className="hidden text-base font-medium items-center gap-5 md:flex">
          <CustomLink title="Inicio" />
          <CustomLink title="Sobre mi" />
          <CustomLink title="Tecnologías" />
          <CustomLink title="Proyectos" />
          <CustomLink title="Contacto" />
        </div>

        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        <button
          className={`flex rounded-full w-8 p-1 ${dark ? "bg-black" : "bg-blue-400"}`}
          onClick={() => setDark(!dark)}
        >
          { dark ? <Moon className={"text-white"} /> : <Sun className={"text-white"} /> }
        </button>
      </nav>
    </header>
  )
}