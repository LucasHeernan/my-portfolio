import React, { useState, useEffect } from "react";
import { Moon, Sun } from "../Technologies/Icons";
import ThemeSwitcher from "../../ThemeSwitcher";
import { Link } from "react-router-dom";

export default function ProjectItemNavBar() {

  const [mode, setMode] = ThemeSwitcher();
  const [navShadow, setNavShadow] = useState(false);
  
  useEffect(() => {
    const handleShadow = () => { window.scrollY >= 50 ? setNavShadow(true) : setNavShadow(false) };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header className={`fixed w-full z-40 items-center py-1 md:py-2 transition-shadow ease-in-out duration-300 ${navShadow ? "shadow-xl backdrop-blur-3xl dark:shadow-lg dark:shadow-neutral-900" : ""}`}>
      <nav className="relative flex max-w-7xl mx-auto justify-between px-5 lg:px-7 xl:px-10">
        <Link
          to=".."
          relative="path"
          preventScrollReset={true}
        >
          <div className="w-8 h-8 rounded-full bg-indigo-400" />
        </Link>
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