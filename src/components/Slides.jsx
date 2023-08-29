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
    <article
      className="relative w-full h-full lg:h-[95%] flex shrink-0 transition-transform ease-in-out duration-700"
      style={{ transform: `translateX(-${curr * 1280}px)` }}
    >
      <div className="absolute flex inset-y-4 pb-4 lg:inset-x-16 lg:inset-y-5 lg:px-3 lg:pb-3 bg-white">
        <div className="hidden lg:block absolute w-[98%] h-[97%] left-[23px] top-[12px] bg-gray-600 rounded-sm" />
        <div className="w-full h-full flex z-10 shadow-lg shadow-black rounded-sm overflow-hidden">
          <section className="relative w-full h-full group overflow-hidden lg:w-[45%] lg:pl-3 lg:pt-1 bg-gradient-to-l from-indigo-300 via-indigo-400 to-indigo-500">
            <img src={image} alt="pepe" className="w-full h-full object-contain transition-all duration-75 group-hover:scale-105 lg:group-hover:scale-100" />
            <div className="w-full h-0 grid absolute z-20 -top-1/4 opacity-0 transition-opacity duration-300 ease-in-out items-center text-center bg-slate-900 group-hover:overflow-hidden group-hover:opacity-80 group-hover:h-[150%] lg:group-hover:opacity-0 lg:group-hover:h-0">
              <div className="group-hover:animate-fadeInDown">
                <h3 className="text-lg font-semibold uppercase text-white">{title}</h3>
                <p className="text-emerald-600">CLIENT - JET BLUE</p>
              </div>
            </div>
          </section>
          {/* <section className="w-full h-full pt-1 px-2 lg:w-[45%] lg:pl-3 bg-gradient-to-l from-indigo-300 via-indigo-400 to-indigo-500">
            <img src={image} alt="pepe" className="w-full h-full object-contain" />
          </section> */}
          <section className="hidden lg:flex w-[55%] h-full flex-col justify-evenly pl-8 py-5 bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100">
            <h3 className="text-4xl font-semibold tracking-wide">{title}</h3>
            <p className="text-lg font-normal pr-4">{description}</p>
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
          </section>
        </div>
      </div>
    </article>    
  )
}