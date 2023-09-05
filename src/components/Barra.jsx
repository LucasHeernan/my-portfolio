import React, { useState, useEffect } from "react";
import { Moon, Sun } from "./Icons";
import Framer from "./Framer";

export default function Barra() {
  const [dark, setDark] = useState(false);

  const [navShadow, setNavShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => { window.scrollY >= 50 ? setNavShadow(true) : setNavShadow(false) };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header className={`fixed w-full z-40 items-center py-2 transition-shadow ease-in-out duration-300 bg-amber-300 ${navShadow ? "shadow-xl backdrop-blur-3xl" : ""}`}>
      <nav className="relative flex max-w-7xl mx-auto justify-between px-5 lg:px-7 xl:px-10 bg-green-300">

        <Framer />

        <button
          className={`flex rounded-full w-9 p-1 ${dark ? "bg-black" : "bg-blue-400"}`}
          onClick={() => setDark(!dark)}
        >
          { dark ? <Moon className={"text-white"} /> : <Sun className={"text-white"} /> }
        </button>
      </nav>
    </header>
  )
}