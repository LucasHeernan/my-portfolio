import React, { useState } from "react";
import "animate.css";

export default function AnimatedLetters({ text, time }) {

  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => setIsHovered(index);
  const handleHoverOut = () => setIsHovered(null);

  const words = text.split("");

  // Tengo que lograr tener el indice de cada caracter
  // Y además plasmar los espacios entre palabras
  // Y la independencia de cada letra al renderizarse

  return (
    <div>
      {
        words.map((letra, index) => (
          <span
            key={letra + index}
            className={`inline-block transition delay-${time + index}`}
            // onMouseEnter={() => handleHover(uniqueId)}
            // onMouseLeave={handleHoverOut}
          >
            {letra}
          </span>
        ))
      }
    </div>
    // <div>
    //   {
    //     words.map((word, index) => (
    //       <span key={index}>
    //         {
    //           word.split('').map((letter, letterIndex) => {
    //             const uniqueId = `${index}-${letterIndex}`;
    //             return (
    //               <span
    //                 key={uniqueId}
    //                 className={`inline-block ${uniqueId === isHovered ? "animate__animated animate__rubberBand text-blue-500" : ""}`}
    //                 onMouseEnter={() => handleHover(uniqueId)}
    //                 onMouseLeave={handleHoverOut}
    //               >
    //                 {letter}
    //               </span>
    //             );
    //           })
    //         }
    //         {" "}
    //       </span>
    //     ))
    //   }
    // </div>
  )
}