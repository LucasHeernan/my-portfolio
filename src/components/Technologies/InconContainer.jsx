import React, { useState } from "react";

export default function IconContainer({ custom, children }) {
  const [fill, setFill] = useState("#2a2a2a");

  const handleMouseEnter = () => setFill("white");
  const handleMouseLeave = () => setFill("#2a2a2a");

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${custom ? custom : "w-8 h-8"} flex rounded-full items-center justify-center overflow-hidden border-2 border-[#2a2a2a] dark:border-0 bg-transparent hover:border-0 dark:bg-[#cacaca] dark:hover:bg-transparent group`}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-12 group-hover:h-12"></span>
      {React.cloneElement(children, { fill: fill })}
    </div>
  );
}