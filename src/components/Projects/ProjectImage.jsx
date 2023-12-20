import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: (direction) => {
    return { x: direction > 100 ? 1000 : -1000 }
  },
  animate: { x: 0 },
  exit: (direction) => {
    return { x: direction < -100 ? 1000 : -1000 }
  }
};

// ACTUAL - INITIAL
// transition: transform .15s ease-out,opacity .15s ease-out;
// z-index: 5;

// PROX - EXIT
// animation: 0.85s cubic-bezier(0.65, 0, 0.35, 1) 0.15s 1 normal both running next-out;

export default function ProjectImage({ images, phone, id }) {

  const [arrowL, setArrowL] = useState(false);
  const [arrowR, setArrowR] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection] = useState(null);

  const prev = () => {
    setCurrentImg( currentImg => currentImg === 0 ? images.length - 1 : currentImg - 1 );
    setArrowL(true);
    setDirection(-1000);
    setTimeout(() => {
      setArrowL(false);
    }, 500);
  };

  const next = () => {
    setCurrentImg( currentImg => currentImg === images.length - 1 ? 0 : currentImg + 1 );
    setArrowR(true);
    setDirection(1000);
    setTimeout(() => {
      setArrowR(false)
    }, 500);
  };

  const handleClick = (index) => {
    setDirection( index > currentImg ? 1000 : -1000 );
    setCurrentImg(index);
  };

  return (
    <section className={`relative w-full mb-14 md:mb-20 ${phone ? "h-[480px] sm:w-4/6 sm:h-[490px] md:w-[60%] md:h-[510px] lg:w-[45%] lg:h-full" : "h-[315px] sm:w-[90%] sm:h-[380px] md:w-full md:h-[480px] lg:w-4/5 xl:w-1/2 xl:h-full" } before:w-full before:h-full before:absolute before:left-3 before:top-3 before:bg-slate-700 dark:before:bg-slate-950`}>
      <div className="relative z-10 overflow-hidden flex w-full h-full shadow-black shadow-md">
        <button
          className="absolute group block w-1/4 h-full z-20 left-0"
          onClick={prev}
        >
          <div className="w-full h-full bg-gradient-to-l from-transparent to-slate-700 transition-opacity duration-500 ease-out opacity-10 group-hover:opacity-50">
            <em className={`absolute block h-7 w-7 top-1/2 left-7 transition-transform duration-200 ease-out delay-200
            before:-rotate-45 before:absolute before:left-0 before:h-full before:w-1 before:bottom-[1px] before:bg-black before:origin-top before:duration-200 before:ease-out
            after:-rotate-[135deg] after:absolute after:left-0 after:h-full after:w-1 after:bg-black after:origin-top after:duration-300 after:ease-out
            group-hover:before:-rotate-[25deg] group-hover:after:-rotate-[155deg]
            ${arrowL ? "before:animate-leftDown before:bottom-0 after:animate-leftUp" : ""}`}
            />
          </div>
        </button>
        <button
          className={`absolute group block w-1/4 h-full z-20 right-0`}
          onClick={next}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent to-slate-700 transition-opacity duration-500 ease-out opacity-10 group-hover:opacity-50">
            <em className={`absolute block h-7 w-7 top-1/2 right-7 transition-transform duration-200 ease-out delay-200
            before:rotate-45 before:absolute before:right-0 before:h-full before:w-1 before:bottom-[1px] before:bg-black before:origin-top before:duration-200 before:ease-out
            after:rotate-[135deg] after:absolute after:right-0 after:h-full after:w-1 after:bg-black after:origin-top after:duration-300 after:ease-out
            group-hover:before:rotate-[25deg] group-hover:after:rotate-[155deg]
            ${arrowR ? "before:animate-rightDown before:bottom-0 after:animate-rightUp" : ""}`}
            />
          </div>
        </button>
        <AnimatePresence initial={false} custom={direction}>
          <div className={`w-full h-full ${phone ? "bg-white" : id === 2 ? "bg-sky-50" : "bg-slate-300"}`}>
            <motion.img
              key={currentImg}
              src={images[currentImg]}
              alt="project image"
              title="project image"
              className={`w-full h-full ${phone ? "object-contain" : id === 2 ? "object-contain border border-t border-slate-200" : "object-cover"} active:cursor-grabbing`}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                duration: 1
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(e, {offset}) => {
                offset.x < -125? next() : offset.x > 125 ? prev() : null;
              }}
            />
          </div>
        </AnimatePresence>
      </div>
      <div className="h-10 flex items-end justify-center sm:h-11 md:h-14">
        <div className="flex items-center justify-center gap-4">
          {
            images?.map((_, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all bg-gray-600 dark:bg-slate-300 ${currentImg === i ? "p-[10px]" : "hover:scale-110 bg-opacity-50 dark:bg-opacity-50"}`}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
};


// ¿CÓMO MANEJO EL CASO DE QUE VAYA PARA "ATRAS"?

// const swipe = 500 -----> PUNTO DE REFERENCIA
// DE -500 A 500 EL MISMO + || - de eso === el mismo

// drag -> X
// dragConstraints={{ left: 0, right: 0 }} ???
// dragElastic={0.5}
// onDragEnd={(e, {offset}) =>
// offset < -100 ? prev() : offset < 100 ? next() : null
// }}