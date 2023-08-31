import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const techAnimations = {
  initial: {
    opacity: 0,
    y: -5
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
      duration: 0.2
    }
  })
}

export default function Slides({ title, description, techs, image, images, repository, curr }) {

  const carouselRef = useRef(null);
  const [currentWidth, setCurrentWidth] = useState(0);

  const updateCarouselWidth = () => {
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    setCurrentWidth(carouselWidth);
  };

  useEffect(() => {
    updateCarouselWidth();
    window.addEventListener('resize', updateCarouselWidth);
    return () => {
      window.removeEventListener('resize', updateCarouselWidth);
    };
  }, []);
  
  return (
    <article
      className="relative w-full h-full lg:h-[95%] flex shrink-0 transition-transform ease-in-out duration-700"
      ref={carouselRef}
      style={{ transform: `translateX(-${curr * currentWidth}px)` }}
    >
      <div className="absolute flex inset-y-4 pb-4 lg:inset-x-16 lg:inset-y-5 lg:px-3 lg:pb-3">
        <div className="hidden lg:block absolute w-[98%] h-[97%] left-[23px] top-[12px] bg-gray-600 rounded-sm" />
        <div className="w-full h-full flex z-10 shadow-sm lg:shadow-lg shadow-black rounded-sm overflow-hidden">
          <section className="relative w-full h-full overflow-hidden group lg:w-[45%] lg:pl-3 lg:pt-1 bg-gradient-to-l from-indigo-300 via-indigo-400 to-indigo-500">
            <h3 className="absolute top-0 left-0 p-3 z-10 text-xl font-semibold uppercase text-white blur-0 transition-all duration-300 ease-linear group-hover:blur-[1px] lg:hidden">{title}</h3>
            <img src={image} alt="pepe" className="w-full h-full object-contain px-2 blur-0 transition-all duration-300 ease-linear group-hover:blur-[1px] lg:group-hover:blur-0"/>
            <div className="absolute w-full h-full -top-full opacity-100 transition-all duration-200 ease-in-out bg-slate-700 group-hover:opacity-80 group-hover:top-0 lg:group-hover:hidden"/>

            {/* <div className="absolute block top-0 left-0 w-full h-0 bg-violet-400 group-hover:h-full">
              <div className="hidden relative w-4/5 h-full mx-auto group-hover:flex group-hover:items-center"> */}
            <div className="absolute block top-0 left-0 right-0 mx-auto w-4/5 h-0 sm:w-1/2 group-hover:h-full">
              <div className="hidden relative w-full h-full group-hover:flex group-hover:items-center">
                <ul className="block text-center relative">
                  {
                    techs.map((el, index) => {
                      return (
                        <motion.li
                          key={index}
                          variants={techAnimations}
                          initial="initial"
                          whileInView="animate"
                          custom={index}
                          className="inline-block p-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] mx-2 relative overflow-hidden box-border
                          before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                          after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                        >
                          <span className="relative z-20">{el}</span>
                        </motion.li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="hidden absolute bottom-5 left-[calc(50%-45px)] z-10 group-hover:block group-hover:animate-bounceInUp lg:group-hover:hidden">
              <div
                className="inline-block p-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] ml-2 relative overflow-hidden box-border cursor-pointer
                before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
              >
                <span className="relative z-20">ver más</span>
              </div>
            </div>
          </section>
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