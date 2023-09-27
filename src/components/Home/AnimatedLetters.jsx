import React, { useEffect, useState } from "react";

export default function AnimatedLetters({ text, time }) {
  const [first, setFirts] = useState("animate-fadeInDown");
  const [letras, setLetras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [shown, setShown] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setFirts("");
    }, 4000)
  }, [])

  return (
    <div className="pb-3 md:pb-2 xl:pb-0 transition-all ease-in-out duration-100 scale-y-150 sm:scale-y-125 md:scale-y-110 lg:scale-y-100">
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return (
            <span
              key={idx}
              className={`${shown ? "inline-block" : "hidden"} min-w-[7px] transition-all ${first} delay-["${(time + idx) * 100}ms"] ${uniqueId === isHovered ? "animate-rubberBand text-blue-400 delay-200" : "animate-bounce delay-300"} sm:min-w-[10px] lg:min-w-[17px]`}
              onMouseEnter={ first === "" ? () => handleHover(uniqueId) : null }
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
