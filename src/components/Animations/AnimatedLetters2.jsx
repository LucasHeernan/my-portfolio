import React, { useEffect, useState } from "react";

export default function AnimatedLetters2({ text, time }) {

  const [letras, setLetras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => setIsHovered(index);
  const handleHoverOut = () => setIsHovered(null);

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
    }, time * 100);
  }, [text]);

  return (
    <div>
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return (
            <span
              key={idx}
              className={`inline-block ${uniqueId === isHovered ? "animate__animated animate__rubberBand text-blue-500" : "animate-bounceLetter"} min-w-[7px] sm:min-w-[10px] lg:min-w-[17px] animate`}
              // className={`${first} ${shown ? "inline-block" : "hidden"} transition-all ${uniqueId === isHovered ? "animate__animated animate__rubberBand delay-200" : ""}`}
              // className={`${shown ? "inline-block" : "hidden"} min-w-[7px] transition-all ${first} delay-["${(time + idx) * 100}ms"] ${uniqueId === isHovered ? "animate-rubberBand text-blue-500 delay-200" : "animate-bounce delay-300"} sm:min-w-[10px] lg:min-w-[17px]`}
              onMouseEnter={() => handleHover(uniqueId)}
              onMouseLeave={handleHoverOut}
              onTouchMove={() => handleHover(uniqueId)}
              onTouchEnd={handleHoverOut}
            >
              {letra}
            </span>
          )
        })
      }
    </div>
  );
};