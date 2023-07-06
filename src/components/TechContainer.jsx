import React, { useState } from "react";

export default function TechContainer({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-20 h-20 inline-flex items-center justify-center overflow-hidden rounded-full bg-green-900`}
    >
      <span className={`absolute w-full h-full opacity-50 ${isHovered ? "bg-white" : "bg-transparent"} rounded-full`} />
      { React.cloneElement(children, { isHovered: isHovered }) }
    </div>
  );
}
