import React, { useEffect, useState } from "react";
import { useAnimationTitle } from "../../AnimationsContext";

export default function AnimatedLetters({ text, time }) {
  const [first, setFirts] = useState("animate-fadeInDown");
  const [letras, setLetras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [shown, setShown] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => setIsHovered(index);
  const handleHoverOut = () => setIsHovered(null);

  const { animation, setAnimation } = useAnimationTitle();

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
      }, 75);
  
      return () => {
        clearInterval(intervalId);
      };
    }, time * 75);
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      setShown(true);
    }, time * 75)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFirts("");
    // }, 4000)
    }, 3500)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    // }, 5000)
    }, 3700)
  }, []);

  return (
    <div className="pb-3 md:pb-2 xl:pb-0 transition-all ease-in-out duration-100 scale-y-125 md:scale-y-110 lg:scale-y-100">
    {/* <div className="pb-3 xs:pb-2 lg:pb-0 transition-all ease-in-out duration-100 scale-y-125 xs:scale-y-110 sm:scale-y-105 md:scale-y-100"> */}
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return animation ?
          <span
            key={idx}
            className={`inline-block min-w-[7px] ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-200" : "animate-bounce delay-300"} sm:min-w-[10px] lg:min-w-[17px]`}
            onMouseEnter={ first === "" ? () => handleHover(uniqueId) : null }
            onMouseLeave={handleHoverOut}
          >
            {letra}
          </span> :
          <span
            key={idx}
            className={`${shown ? "inline-block" : "hidden"} min-w-[7px] transition-all ${first} delay-["${(time + idx) * 100}ms"] ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-200" : "animate-bounce delay-300"} sm:min-w-[10px] lg:min-w-[17px]`}
            onMouseEnter={ first === "" ? () => handleHover(uniqueId) : null }
            onMouseLeave={handleHoverOut}
          >
            {letra}
          </span>
        })
      }
    </div>
  )
};
