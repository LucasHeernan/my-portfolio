import React, { useState } from "react";
import IconContainer from "./InconContainer";
import { Github, Linkedin, Whatsapp, Email } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, Icon, name, nickname }) => {
  const [hover, setHover] = useState("right-0");
  const [fill, setFill] = useState("black");
  const handleHover = () => {
    setHover("left-0");
    setFill("white");
  };
  const handleHoverLeave = () => { setHover("right-0"); setFill("black"); }

  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      className="relative flex flex-row justify-between items-baseline border-b border-blue-950 pb-2 mb-2 transition-colors duration-200 ease-in-out group"
    >
      <span className={`absolute ${hover} bottom-0 w-0 h-0.5 transform transition-[width] ease-in-out duration-300 group-hover:w-full bg-blue-400`}>&nbsp;</span>
      <div className="flex gap-4 font-normal">
        <Icon fill={fill} className="w-5 h-5 z-10" />
        <p>{name}</p>
      </div>
      <p>{nickname}</p>
    </a>
  )
}

const pepe = (delay) => {
  return {
    initial: {
      y: 40,
      opacity: 0,
      transition: {
        delay: delay,
        duration: 1,
        ease: [0.25, 0.6, 0.3, 0.8]
      }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
        repeat: 0
      }
    }
  }
}

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export default function ContactTwo () {


  return (
    <div className="w-full h-screen cursor-default bg-[#1B1C32]">
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row bg-white sm:bg-yellow-200 md:bg-orange-500 lg:bg-red-200 xl:bg-fuchsia-400">

        <section className="md:flex md:flex-col md:w-1/2">
          <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Contacto</h2>
          <p className="text-base font-normal md:pt-1 lg:text-lg lg:font-normal lg:pr-20">No dudes en avisarme sobre posibles proyectos, colaboraciones o simplemente para saludar.</p>
          <ul className="hidden md:flex flex-col bg-orange-300">
            {/* <a href="#"
              className="relative flex flex-row justify-between items-baseline border-b border-blue-950 pb-2 mb-2 transition-colors duration-200 ease-in-out
              before:absolute before:w-0 before:h-1 before:bottom-0 before:left-0 before:bg-red-700 before:transform before:origin-left hover:before:w-full"
            >
              <p>Email</p>
              <p>@pepe</p>
            </a> */}
            <CustomLink href={"#"} Icon={Email} name={"Email"} nickname={"lhbenitez2@gmail.com"} />
            <CustomLink href={"#"} Icon={Linkedin} name={"Linkedin"} nickname={"LucasHeernan"} />
            <CustomLink href={"#"} Icon={Github} name={"Github"} nickname={"@LucasHeernan"} />
            <CustomLink href={"#"} Icon={Whatsapp} name={"WhatsApp"} nickname={"+5491134921341"} />
          </ul>
        </section>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="w-full flex flex-col items-center md:w-1/2 md:justify-end md:h-full md:pb-10"
        >
          
          <motion.div
            variants={item}
            // variants={pepe(0)}
            // initial="initial"
            // whileInView="animate"
            // viewport={{ once: true }}
            className="relative w-full mb-3 mt-4 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-600/20 placeholder:text-black focus:outline-none peer/contact"
              type="text"
              placeholder="Nombre"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          <motion.div
            variants={item}
            // variants={pepe(0.1)}
            // initial="initial"
            // whileInView="animate"
            // viewport={{ once: true }}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-600/20 placeholder:text-black focus:outline-none peer/contact"
              type="email"
              placeholder="Correo electrónico"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          
          <motion.div
            variants={item}
            // variants={pepe(0.2)}
            // initial="initial"
            // whileInView="animate"
            // viewport={{ once: true }}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-600/20 placeholder:text-black focus:outline-none peer/contact"
              type="text"
              placeholder="Asunto"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          
          <motion.div
            variants={item}
            // variants={pepe(0.3)}
            // initial="initial"
            // whileInView="animate"
            // viewport={{ once: true }}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <textarea className="w-full p-3 px-5 text-base font-normal rounded-sm resize-none bg-slate-600/20 placeholder:text-black focus:outline-none peer/contact" name="mensaje" placeholder="Mensaje" rows="5" />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          <motion.button
            variants={item}
            // initial={{ opacity: 0.2 }}
            // whileInView={{ opacity: 1, transition:{ duration: 0.5 } }}
            // viewport={{ once: true }}
            className="self-center w-2/5 my-3 py-3 text-base text-black border-2 border-black rounded-md font-semibold bg-slate-600/20" type="submit">Enviar mensaje
          </motion.button>
          
        </motion.ul>
      </div>
    </div>
  )
}