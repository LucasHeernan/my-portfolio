import React, { useState, useEffect } from "react";
import { Moon, Sun } from "../Technologies/Icons";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "../../ThemeSwitcher";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useAnimations } from "../../Context";

const navAnimation = (animation) => {
  return {
    initial: { opacity: animation ? 1 : 0, y: animation ? 0 : -25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.3,
        ease: [0.17, 0.55, 0.55, 1],
        duration: 0.3
      }
    }
  }
};

const CustomLink = ({ to, title }) => {
  const [hover, setHover] = useState("right-0");
  const handleHover = () => setHover("left-0");
  const handleHoverLeave = () => setHover("right-0");

  return (
    <Link
      to={to}
      smooth={true}
      duration={200}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      className="relative cursor-pointer text-base font-medium uppercase font-poppins group">{title}
      <span className={`absolute ${hover} -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-300 group-hover:w-full bg-blue-400`}>&nbsp;</span>
    </Link>
  )
  // <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 inline-block rounded-full transform transition-[width] ease-in-out duration-300 group-hover:w-full group-hover:right-0 bg-blue-400">&nbsp;</span>
};

export default function NavBar() {

  const [mode, setMode] = ThemeSwitcher();
  const [navShadow, setNavShadow] = useState(false);
  const { navBar, setNavBar } = useAnimations();
  
  useEffect(() => {
    const handleShadow = () => { window.scrollY >= 40 ? setNavShadow(true) : setNavShadow(false) };
    window.addEventListener("scroll", handleShadow);
    setTimeout(() => {
      setNavBar(true);
    }, 4000);
  }, []);

  return (
    <header className={`fixed w-full z-40 items-center py-1 md:py-2 transition-shadow ease-in-out duration-300 ${navShadow ? "shadow-xl backdrop-blur-3xl dark:shadow-lg dark:shadow-neutral-900" : ""}`}>
      <motion.nav
        className="relative flex max-w-7xl mx-auto justify-between px-[10px] xs:px-5 lg:px-7 xl:px-10"
        variants={navAnimation(navBar)}
        initial="initial"
        animate="animate"
        custom={navBar}
        viewport={{ once: true }}
      >

        <div className={`hidden items-center gap-5 text-[#2a2a2a] ${navShadow ? "dark:text-[#ebebeb]" : "dark:text-[#cacaca]"} md:flex`}>
          <CustomLink to="home" title="Inicio" />
          <CustomLink to="projects" title="Proyectos" />
          <CustomLink to="contact" title="Contacto" />
        </div>

        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        <button
          style={{ touchAction: "none" }}
          className={`flex rounded-full w-8 p-1 ${mode === "dark" ? "bg-gradient-to-tr from-cyan-300 via-blue-400 to-blue-500" : "bg-gradient-to-tr from-blue-950 via-indigo-950 to-slate-950"}`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          { mode === "dark" ? <Sun className={"text-white"} /> : <Moon className={"text-white"} /> }
        </button>
      </motion.nav>
    </header>
  )
};