import React, { useState } from "react";

export default function TechContainer({ custom, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${custom ? custom : "w-8 h-8"} inline-flex rounded-full items-center justify-center overflow-hidden border-[2px] border-black hover:border-0 group`}
    >
      {/* <span
        className={`absolute w-full h-full transition-all duration-500 ease-out
        ${
          isHovered ? "bg-white" : "bg-transparent"
        } rounded-full group-hover:w-12 group-hover:h-12`}
      ></span> */}
      {
        React.cloneElement(children, {
          isHovered: isHovered,
          fill: isHovered ? "none" : "white"
        })
      }
    </div>
  );
}
