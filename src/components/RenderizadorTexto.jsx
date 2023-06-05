import React, { useEffect, useState } from "react";
import "animate.css";

export default function RenderizadorTexto({ texto, start }) {
  const [letras, setLetras] = useState([]);
  const [indice, setIndice] = useState(0);
  const [shown, setShown] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => setIsHovered(index);
  const handleHoverOut = () => setIsHovered(null);

  const getAnimationClasses = (index, isHovered) => {
    const baseClasses = "animate__animated";

    // Clase para la animación de aparición (fadeInDown)
    let animationClasses = `${baseClasses} animate__fadeInDown`;

    // Si el caracter está siendo hovereado, se agrega la clase de la animación de caucho (rubberBand)
    if (isHovered) { animationClasses += ` animate__rubberBand`; }

    // Se agrega el delay para cada caracter
    // animationClasses += ` delay-${start + index}`;

    return animationClasses;
  };


  useEffect(() => {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setLetras((prevLetras) => {
          if (prevLetras.length === texto.length) {
            clearInterval(intervalId);
            return prevLetras;
          }
  
          const nextIndex = prevLetras.length + 1;
          setIndice(nextIndex);
  
          return [...prevLetras, texto[nextIndex - 1]];
        });
      }, 100);
  
      return () => {
        clearInterval(intervalId);
      };
    }, start * 100);
  }, [texto]);

  useEffect(() => {
    setTimeout(() => {
      setShown(true);
    }, start * 100)
  }, [])

  return (
    <div>
      {
        letras.map((letra, idx) => {
          const uniqueId = `${letra}-${idx}`;
          return (
            // <span
            //   key={idx}
            //   // className={`${shown ? "inline-block" : "hidden"} transition duration-300 animate__animated animate__fadeInDown delay-${start + idx}`}
            //   // className={`${shown ? "inline-block" : "hidden"} transition duration-300 ${getAnimationClasses(idx, uniqueId === isHovered)} delay-${start + idx} hover:text-blue-500`}
            //   className={`${ shown ? "inline-block" : "hidden"} transition duration-300 animate__animated animate__fadeInDown delay-${start + idx} ${uniqueId === isHovered ? "animate__animated animate__rubberBand text-blue-500" : ""}`}
            //   onMouseEnter={() => handleHover(uniqueId)}
            //   onMouseLeave={handleHoverOut}
            // >
            <span
              key={idx}
              className={`${shown ? "inline-block" : "hidden"} ${uniqueId === isHovered ? "text-blue-500" : ""}`}
              onAnimationEnd={(e) => {
                if (e.animationName === 'fadeInDown') {
                  e.target.classList.remove('animate__animated', 'animate__fadeInDown');
                } else if (uniqueId === isHovered) {
                  e.target.classList.remove('animate__animated', 'animate__rubberBand');
                }
              }}
              onMouseEnter={() => {
                handleHover(uniqueId);
                document.querySelector(`.${uniqueId}`).classList.add('animate__animated', 'animate__rubberBand');
              }}
              onMouseLeave={() => {
                handleHoverOut();
                document.querySelector(`.${uniqueId}`).classList.remove('animate__animated', 'animate__rubberBand');
              }}
              style={{ animation: `animate__fadeInDown ${start + idx}s` }}
            >
              {letra}
            </span>
          )
        })
      }
    </div>
  );
};

// ${uniqueId === isHovered ? "animate__animated animate__rubberBand text-blue-500" : ""}
// className={`${ shown ? "inline-block" : "hidden"} transition duration-300 animate__animated animate__fadeInDown delay-${start + idx} ${uniqueId === isHovered ? "animate__animated animate__rubberBand text-blue-500" : ""}`}