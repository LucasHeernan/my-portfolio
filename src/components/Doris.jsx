import React, { useEffect, useState } from "react";
import 'animate.css';

export default function Doris({ texto, start }) {
  const [letras, setLetras] = useState([]);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setLetras((prevLetras) => {
          if (prevLetras.length === texto.length) {
            clearInterval(intervalId);
            return prevLetras;
          }
  
          const nextIndex = prevLetras.length + 1;
  
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

  useEffect(() => {
    if (letras.length === texto.length) {
      setTimeout(() => {
        const elements = document.querySelectorAll('.letra');
        elements.forEach(element => {
          element.classList.add('hover-rubberBand');
        });
      }, (start + texto.length) * 100);
    }
  }, [letras, start, texto.length]);

  return (
    <div>
      {
        letras.map((letra, idx) => (
          <span
            key={idx}
            className={`letra ${shown ? "inline-block" : "hidden"} animate__animated animate__fadeInDown`}
            style={{ animationDuration: `${start + idx}s` }}
          >
            {letra}
          </span>
        ))
      }
      <style jsx>{`
        .hover-rubberBand:hover {
          animation-name: rubberBand;
          animation-duration: 1s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};