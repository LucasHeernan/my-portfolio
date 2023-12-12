import React, { useEffect, useState } from "react";
import { useAnimations } from "../../Context";

export default function AnimatedLetters({ text, time }) {
  const [first, setFirts] = useState(false);
  const [letras, setLetras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [shown, setShown] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => setIsHovered(index);
  const handleHoverOut = () => setIsHovered(null);

  const { title, setTitle } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setLetras((prevLetras) => {
          if (prevLetras.length === text.length) {
            clearInterval(intervalId);
            return prevLetras;
          }
  
          const nextIndex = prevLetras.length + 1;
          setIndice(nextIndex);
  
          return [...prevLetras, text[nextIndex - 1]];
        });
      }, 70);
  
      return () => {
        clearInterval(intervalId);
      };
    }, time * 70);
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      setShown(true);
    }, time * 70)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFirts(true);
    }, 3500)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTitle(true);
    }, 3700)
  }, []);

  return (
    <div> {/* MINUSCULA */}
    {/* <div className="pb-3 xs:pb-2 lg:pb-0 transition-all ease-in-out duration-100 scale-y-125 xs:scale-y-110 sm:scale-y-105 md:scale-y-100"> */} {/* MAYUSCULA */}
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return title ?
          <span
            key={idx}
            className={`inline-block min-w-[7px] transition-all duration-700 ease-in-out ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-100" : "animate-bounce delay-200"} sm:min-w-[10px] lg:min-w-[15px]`}
            onMouseEnter={ first ? () => handleHover(uniqueId) : null }
            onMouseLeave={handleHoverOut}
            onTouchStart={ first ? () => handleHover(uniqueId) : null }
            onTouchEnd={handleHoverOut}
          >
            {letra}
          </span> :
          <span
            key={idx}
            // className={`${shown ? "inline-block" : "hidden"} min-w-[7px] transition-all ${first} delay-["${(time + idx) * 100}ms"] ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-200" : "animate-bounce delay-300"} sm:min-w-[10px] lg:min-w-[17px]`}
            className={`${shown ? "inline-block" : "hidden"} min-w-[7px] transition-all duration-700 ease-in-out delay-["${(time + idx) * 70}ms"] ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-100" : "animate-bounce delay-200"} sm:min-w-[10px] lg:min-w-[17px]`}
            onMouseEnter={ first ? () => handleHover(uniqueId) : null }
            onMouseLeave={handleHoverOut}
            onTouchStart={ first ? () => handleHover(uniqueId) : null }
            onTouchEnd={handleHoverOut}
          >
            {letra}
          </span>
        })
      }
    </div>
  )
};
