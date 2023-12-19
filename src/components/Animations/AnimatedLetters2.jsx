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
              className={`inline-block transform transition-all ease-in-out ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-300" : "animate-bounceLetter"} min-w-[7px] sm:min-w-[10px] lg:min-w-[17px] scale-y-110 sm:scale-y-105 md:scale-y-100`}
              onMouseEnter={() => handleHover(uniqueId)}
              onMouseLeave={handleHoverOut}
            >
              {letra}
            </span>
          )
        })
      }
    </div>
  );
};
