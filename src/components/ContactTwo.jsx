import React from "react";
import IconContainer from "./InconContainer";
import { Github, Linkedin, Whatsapp, Email } from "./Icons";
import { motion } from "framer-motion";

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

export default function ContactTwo () {


  return (
    <div className="w-full h-screen cursor-default bg-[#1B1C32]">
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row bg-white sm:bg-yellow-200 md:bg-orange-500 lg:bg-red-200 xl:bg-fuchsia-400">

        <section className="md:flex md:flex-col md:w-1/2">
          <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Contacto</h2>
          <p className="text-base font-normal md:pt-1 lg:text-lg lg:font-normal lg:pr-20">No dudes en avisarme sobre posibles proyectos, colaboraciones o simplemente para saludar.</p>
          <div className="flex flex-col bg-orange-300">
            <motion.a
              href="#"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-[5px] top-[0.5px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
                <Github className="w-3/4 z-10 mr-[1px]" />
              </IconContainer>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-[5px] mt-[1px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
                <Linkedin className="w-[63%] z-10 ml-[2px] mb-[1px] md:w-3/5" />
              </IconContainer>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-[5px] top-[1px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
                <Whatsapp className="w-4/5 z-10 ml-[1px]" />
              </IconContainer>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-1 mt-[1px] md:mr-0 md:w-9 md:h-9 md:mr-2"}>
                <Email className="w-2/3 z-10 ml-[2px] mt-[2px]" />
              </IconContainer>
            </motion.a>
          </div>
        </section>

        <section className="w-full flex flex-col items-center md:w-1/2 md:justify-end md:h-full md:pb-10">
          
          <motion.div
            variants={pepe(0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
            variants={pepe(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
            variants={pepe(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
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
            variants={pepe(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative w-full my-3 overflow-hidden rounded-sm"
          >
            <textarea className="w-full p-3 px-5 text-base font-normal rounded-sm resize-none bg-slate-600/20 placeholder:text-black focus:outline-none peer/contact" name="mensaje" placeholder="Mensaje" rows="5" />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          <motion.button
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1, transition:{ duration: 0.5 } }}
            viewport={{ once: true }}
            className="self-center w-2/5 my-3 py-3 text-base text-black border-2 border-black rounded-md font-semibold bg-slate-600/20" type="submit">Enviar mensaje
          </motion.button>
          
        </section>
      </div>
    </div>
  )
}