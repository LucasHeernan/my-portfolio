import React, { useState } from "react";

export default function ProjectImage({ images, phone }) {

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [arrowL, setArrowL] = useState(false);
  const [arrowR, setArrowR] = useState(false);

  const prevImg = () => {
    const isFirstImg = currentImg === 0;
    const newIndex = isFirstImg ? images.length - 1 : currentImg - 1;
    setCurrentImg(newIndex);
    setArrowL(true);
    setTimeout(() => {
      setArrowL(false);
    }, 500);
  }

  const nextImg = () => {
    const isLastImg = currentImg === images.length - 1;
    const newIndex = isLastImg ? 0 : currentImg + 1;
    setCurrentImg(newIndex);
    setArrowR(true);
    setTimeout(() => {
      setArrowR(false)
    }, 500);
  }

  return (
    <div className="relative z-10 overflow-hidden flex w-full h-full shadow-black shadow-md">
      <button
        className={`absolute block cursor-pointer w-1/4 h-full z-20 left-0 bg-gradient-to-l from-transparent to-slate-700 transition-opacity duration-700 ease-out opacity-[${left ? 0.5 : 0.1}]`}
        onClick={prevImg}
        onMouseEnter={() => setLeft(true)}
        onMouseLeave={() => setLeft(false)}
      >
        <em className={`absolute block h-7 w-7 top-1/2 left-7 transition-transform duration-200 ease-out delay-200
        before:-rotate-${left ? "[25deg]" : 45} before:absolute before:left-0 before:h-full before:w-1 before:bottom-[1px] before:bg-black before:opacity-75 before:origin-top before:duration-200 before:ease-out
        after:-rotate-${left ? "[155deg]" : "[135deg]"} after:absolute after:left-0 after:h-full after:w-1 after:bg-black after:opacity-75 after:origin-top after:duration-300 after:ease-out
        ${arrowL ? "before:animate-leftDown before:bottom-0 after:animate-leftUp" : ""}`}
        />
      </button>
      <button
        className={`absolute block cursor-pointer w-1/4 h-full z-20 right-0 bg-gradient-to-r from-transparent to-slate-700 transition-opacity duration-700 ease-out opacity-[${right ? 0.5 : 0.1}]`}
        onClick={nextImg}
        onMouseEnter={() => setRight(true)}
        onMouseLeave={() => setRight(false)}
      >
        <em className={`absolute block h-7 w-7 top-1/2 right-7 transition-transform duration-200 ease-out delay-200
        before:rotate-${right ? "[25deg]" : 45} before:absolute before:right-0 before:h-full before:w-1 before:bottom-[1px] before:bg-black before:origin-top before:duration-200 before:ease-out
        after:rotate-${right ? "[155deg]" : "[135deg]"} after:absolute after:right-0 after:h-full after:w-1 after:bg-black after:origin-top after:duration-300 after:ease-out
        ${arrowR ? "before:animate-rightDown before:bottom-0 after:animate-rightUp" : ""}`}
        />
      </button>
      { phone ?
        <div className="w-full h-full bg-white">
          <img
            src={images[currentImg]}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div> :
        <img
          src={images[currentImg]}
          alt="image"
          className="w-full h-full object-cover"
        />
      }
    </div>
  )
}