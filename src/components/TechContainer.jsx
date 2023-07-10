import React, { useState } from "react";

export default function TechContainer({ children, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      { React.cloneElement(children, { isHovered: isHovered }) }
    </div>
  );
}
