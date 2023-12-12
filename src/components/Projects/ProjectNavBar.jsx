import React from "react";
import { Moon, Sun, ArrowBack } from "../Technologies/Icons";
import ThemeSwitcher from "../../ThemeSwitcher";
import { useNavigate } from "react-router-dom";

export default function ProjectNavBar() {

  const navigate = useNavigate();
  const [mode, setMode] = ThemeSwitcher();

  return (
    <header className="fixed w-full z-50 items-center py-2 pt-2 sm:pt-5">
      <nav className="relative flex justify-between px-5 md:px-7 lg:px-10">
        <button
          onClick={() => { navigate(-1) }}
          className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-slate-200/60 border border-[rgb(222,227,237)] dark:bg-slate-500/60 dark:border-slate-400 active:bg-slate-100 dark:active:bg-slate-400"
        >
          <ArrowBack className={"w-8 h-8 p-1 ml-0.5 sm:ml-px rounded-full"} arrow={ mode === "dark" ? "white" : "#2a2a2a"} />
        </button>
        <button
          className={`invisible sm:visible rounded-full w-9 h-9 p-1 ${mode === "dark" ? "bg-gradient-to-tr from-cyan-300 via-blue-400 to-blue-500" : "bg-gradient-to-tr from-blue-950 via-indigo-950 to-slate-950"}`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          { mode === "dark" ? <Sun className={"text-white"} /> : <Moon className={"text-white"} /> }
        </button>
      </nav>
    </header>
  )
};