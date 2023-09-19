import React, { useState } from "react";
import { Github, Linkedin, Whatsapp, Email } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, Icon, name, username }) => {
  const [hover, setHover] = useState("right-0");
  const handleHover = () => setHover("left-0");
  const handleHoverLeave = () => setHover("right-0");

  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      className="relative flex flex-row justify-between items-baseline my-6 mr-5 lg:mr-10 lg:my-[22px] xl:my-6 xl:mr-20 border-b border-slate-600/20 dark:border-slate-400 pb-2 transition-colors duration-200 ease-in-out group"
    >
      <span className={`absolute ${hover} -bottom-px w-0 h-0.5 transform transition-[width] ease-in-out duration-300 group-hover:w-full bg-blue-400`}>&nbsp;</span>
      <div className="flex gap-3 text-[15px] text-black dark:text-white lg:text-lg">
        <Icon className="w-5 h-5 z-10 text-white" />
        <p>{name}</p>
      </div>
      <p className="text-[15px] text-black dark:text-white">{username}</p>
    </a>
  )
}

const container = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.1,
      ease: [0.25, 0.6, 0.3, 0.8]
    }
  }
}

const item = {initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 1, ease: [0.25, 0.25, 0.25, 0.75] } }};

export default function Contact () {

  return (
    <div name="contact" className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row lg:px-7 xl:px-10">
      {/* <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row lg:px-7 xl:px-10 bg-white sm:bg-yellow-200 md:bg-white lg:bg-red-200 xl:bg-white"> */}

        <section className="md:flex md:flex-col md:w-1/2 text-black dark:text-white">
          <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Contacto</h2>
          <p className="text-base font-normal md:pt-4 md:pb-5 md:pr-5 md:w-[90%] lg:pb-2 lg:text-lg lg:font-normal lg:pr-10">No dudes en avisarme sobre posibles proyectos, colaboraciones o simplemente para saludar pepe.</p>
          <ul className="hidden md:flex flex-col py-2 md:py-4 xl:py-5">
            <CustomLink href={"#"} Icon={Email} name={"Email"} username={"lhbenitez2@gmail.com"} />
            <CustomLink href={"#"} Icon={Linkedin} name={"Linkedin"} username={"LucasHeernan"} />
            <CustomLink href={"#"} Icon={Github} name={"Github"} username={"LucasHeernan"} />
            <CustomLink href={"#"} Icon={Whatsapp} name={"WhatsApp"} username={"+5491134921341"} />
          </ul>
        </section>

        <motion.section
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full flex flex-col items-center md:w-1/2 md:justify-end md:pb-8"
        >
          
          <motion.div
            variants={item}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-600/20 placeholder:text-black focus:outline-none dark:bg-indigo-100 peer/contact"
              type="text"
              placeholder="Nombre"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          <motion.div
            variants={item}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-600/20 placeholder:text-black focus:outline-none dark:bg-indigo-100 peer/contact"
              type="email"
              placeholder="Correo electrónico"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          
          <motion.div
            variants={item}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-600/20 placeholder:text-black focus:outline-none dark:bg-indigo-100 peer/contact"
              type="text"
              placeholder="Asunto"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          
          <motion.div
            variants={item}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <textarea className="w-full pt-3 px-5 text-base font-normal rounded-sm resize-none bg-slate-600/20 placeholder:text-black focus:outline-none dark:bg-indigo-100 peer/contact" name="mensaje" placeholder="Mensaje" rows="6" />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          <motion.div
            variants={item}
            className="relative z-10 group
            self-center w-40 mt-2 md:mt-5 md:self-end"
          >
            <button
              type="submit"
              className="px-4 py-2 rounded bg-indigo-100 border-b-[3px] border-r-2 border-indigo-300 shadow-sm shadow-black transition-all duration-100 ease-out
              group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5">
              <span className="uppercase text-sm font-semibold text-black">Enviar mensaje</span>
            </button>
            <span
              className="absolute -z-10 top-1 left-[3px] w-[calc(100%-8px)] h-full rounded-bl-md rounded-br-md rounded-tr-md bg-slate-800 dark:bg-slate-950
              group-hover:w-[calc(100%-9px)] group-active:transform group-active:transition-all group-active:left-1 group-active:w-[calc(100%-12px)]
              uppercase text-sm font-semibold">
            </span>
          </motion.div>
          
        </motion.section>
      </div>
    </div>
  )
}

// const pepe = (delay) => {
//   return {
//     initial: {
//       y: 40,
//       opacity: 0,
//       transition: {
//         delay: delay,
//         duration: 1,
//         ease: [0.25, 0.6, 0.3, 0.8]
//       }
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: delay,
//         duration: 1,
//         ease: [0.25, 0.25, 0.25, 0.75],
//         repeat: 0
//       }
//     }
//   }
// }

// variants={pepe(0.3)}
// initial="initial"
// whileInView="animate"
// viewport={{ once: true }}

// <motion.button
//   variants={item}
//   className="self-center w-2/5 mt-2 py-3 text-base font-medium md:mt-5 text-black border-2 border-slate-600/50 rounded-md bg-slate-600/20 md:self-end" type="submit">Enviar mensaje
// </motion.button>