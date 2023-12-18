import React, { useEffect, useState } from "react";

export default function AnimatedLetters2({ first, text, time }) {

  const [letras, setLetras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [shown, setShown] = useState(false);

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
      }, 100);
  
      return () => {
        clearInterval(intervalId);
      };
    }, time * 100);
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      setShown(true);
    }, time * 100)
  }, [])

  return (
    <div className="mb-3 md:mb-2 xl:mb-0 transition-all ease-in-out duration-100 scale-y-150 sm:scale-y-125 md:scale-y-110 lg:scale-y-100">
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return (
            <span
              key={idx}
              className={`${first} ${shown ? "inline-block" : "hidden"} transition-all`}
              // className={`${shown ? "inline-block" : "hidden"} min-w-[7px] transition-all ${first} delay-["${(time + idx) * 100}ms"] ${uniqueId === isHovered ? "animate-rubberBand text-blue-500 delay-200" : "animate-bounce delay-300"} sm:min-w-[10px] lg:min-w-[17px]`}
            >
              {letra}
            </span>
          )
        })
      }
    </div>
  );
};