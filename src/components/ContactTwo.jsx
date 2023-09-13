import React from "react";
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
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col bg-white sm:bg-yellow-200 md:bg-orange-300 lg:bg-red-300 xl:bg-fuchsia-400">
        <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Contacto</h2>
        <p className="text-base font-normal md:pt-1 lg:text-lg lg:font-normal lg:pr-20">No dudes en avisarme sobre posibles proyectos, colaboraciones o simplemente para saludar.</p>
        <motion.section
          className="w-full h-full flex flex-col items-center"
        >
          
          <motion.div
            variants={pepe(0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative w-full mb-3 mt-4 overflow-hidden rounded-sm"
          >
            <input
              className="w-full py-3 px-5 text-base font-normal bg-slate-200 placeholder:text-slate-700 focus:outline-none peer/contact"
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
              className="w-full py-3 px-5 text-base font-normal bg-slate-200 placeholder:text-slate-700 focus:outline-none peer/contact"
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
              className="w-full py-3 px-5 text-base font-normal bg-slate-200 placeholder:text-slate-700 focus:outline-none peer/contact"
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
            <textarea className="w-full p-3 px-5 text-base font-normal rounded-sm resize-none bg-slate-200 placeholder:text-slate-700 focus:outline-none peer/contact" name="mensaje" placeholder="Mensaje" rows="5" />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </motion.div>
          <motion.button
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1, transition:{ duration: 0.5 } }}
            viewport={{ once: true }}
            className="self-center w-2/5 my-3 py-3 text-base text-slate-700 border-2 border-zinc-300 rounded-md font-semibold bg-slate-200" type="submit">Enviar mensaje
          </motion.button>
          
        </motion.section>
      </div>
    </div>
  )
}