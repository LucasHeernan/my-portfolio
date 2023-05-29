import React, { useEffect, useState } from "react";

const RenderizadorTexto = ({ texto, start }) => {
  const [letras, setLetras] = useState([]);

  useEffect(() => {
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
  }, [texto]);

  return (
    <div>
      {letras.map((letra, idx) => (
        <span
          key={idx}
          className={`inline-block transition duration-300 animate__animated animate__fadeInDown delay-${start + idx}`}
        >
          {letra}
        </span>
      ))}
    </div>
  );
};

export default RenderizadorTexto;