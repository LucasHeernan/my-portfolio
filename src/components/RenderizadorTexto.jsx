import React, { useEffect, useState } from "react";
import "animate.css";

export default function RenderizadorTexto({ text, time }) {
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
      setFirts("")
    }, 4800)
  }, [])

  return (
    <div>
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return (
            <span
              key={idx}
              className={`${shown ? "inline-block" : "hidden"} transition ${first} delay-${time + idx} ${uniqueId === isHovered ? "animate-rubberBand text-blue-500 delay-2" : "animate-bounceIn delay-3"}`}
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