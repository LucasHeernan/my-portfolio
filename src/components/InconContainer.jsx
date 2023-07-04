import React, { useState } from "react";

export default function IconContainer({ custom, children }) {
  const [fill, setFill] = useState("black");

  const handleMouseEnter = () => setFill("white");
  const handleMouseLeave = () => setFill("black");

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${custom ? custom : "w-8 h-8"} inline-flex rounded-full items-center justify-center overflow-hidden border-[2px] border-black hover:border-0 group`}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-12 group-hover:h-12"></span>
      {React.cloneElement(children, { fill: fill })}
    </div>
  );
}