import React from "react";
import { Moon, Sun } from "../Technologies/Icons";
import ThemeSwitcher from "../../ThemeSwitcher";
import { useNavigate } from "react-router-dom";

export default function ProjectItemNavBar() {

  const navigate = useNavigate();
  const [mode, setMode] = ThemeSwitcher();

  return (
    <header className="fixed w-full z-50 items-center py-2 shadow-xl backdrop-blur-3xl dark:shadow-lg dark:shadow-neutral-900 md:shadow-none md:backdrop-blur-none md:dark:shadow-none md:dark:backdrop-blur-none lg:pt-5">
      <nav className="relative flex justify-between px-5 lg:px-7 xl:px-10">
        <button onClick={() => { navigate(-1) }}>
          <div className="w-8 h-8 rounded-full md:w-9 md:h-9 bg-indigo-400" />
        </button>
        <button
          className={`flex rounded-full w-8 p-1 md:w-9 ${mode === "dark" ? "bg-gradient-to-tr from-cyan-300 via-blue-400 to-blue-500" : "bg-gradient-to-tr from-blue-950 via-indigo-950 to-slate-950"}`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          { mode === "dark" ? <Sun className={"text-white"} /> : <Moon className={"text-white"} /> }
        </button>
      </nav>
    </header>
  )
}