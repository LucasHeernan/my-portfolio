import React from "react";
import { motion } from "framer-motion";

const techAnimations = {
  initial: {
    opacity: 0,
    y: 15
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.2 * index
    }
  })
}

export default function Slides({ title, description, techs, image, images, repository, curr }) {

  return (
    <div
      className="w-full h-full box-border flex shrink-0 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 transition-transform ease-in-out duration-700"
      style={{ transform: `translateX(-${curr * 1280}px)` }}
    >
      <div className="w-[45%] h-full box-border p-5">
        <img src={image} alt="pepe" className="w-full h-full object-contain" />
      </div>
      <div className="w-[55%] h-full flex flex-col justify-evenly px-16 py-5">
        <h3 className="text-4xl font-semibold tracking-wide">{title}</h3>
        <p className="text-lg font-normal">{description}</p>
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            {
              techs.map((el, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={techAnimations}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    viewport={{ once: true }}
                    className="inline-block p-1 bg-blue-600 text-black border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-blue-950 rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] mr-3 relative overflow-hidden box-border
                    before:bg-blue-400 before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                    after:bg-blue-500 after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                  >
                    <span className="relative z-20">{el}</span>
                  </motion.div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}