import React from "react";
import { Moon, Sun } from "../Technologies/Icons";
import ThemeSwitcher from "../../ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "../Technologies/Icons";

export default function ProjectItemNavBar() {

  const navigate = useNavigate();
  const [mode, setMode] = ThemeSwitcher();

  return (
    <header className="fixed w-full z-50 items-center py-2 shadow-xl backdrop-blur-3xl dark:shadow-lg dark:shadow-neutral-900 md:shadow-none md:backdrop-blur-none md:dark:shadow-none md:dark:backdrop-blur-none lg:pt-5">
      <nav className="relative flex justify-between px-5 lg:px-7 xl:px-10">
        <button
          onClick={() => { navigate(-1) }}
          className="w-8 h-8 rounded-full flex justify-center items-center md:w-9 md:h-9"
        >
          <ArrowBack className={"w-8 h-8 p-1 rounded-full bg-violet-300 active:bg-violet-400 md:w-9 md:h-9 dark:bg-black"} arrow={"#fff"} />
          {/* <ArrowBack className={"w-8 h-8 p-1 rounded-full bg-violet-300 active:bg-violet-400 md:w-9 md:h-9 dark:bg-black"} arrow={"#2a2a2a"} /> */}
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