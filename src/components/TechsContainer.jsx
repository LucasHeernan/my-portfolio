import React, { useState } from "react";

export default function TechsContainer({ custom }) {

  const [fills, setFills] = useState([]);

  const handleMouseEnter = () => {
    const originalFills = React.Children.map(children, (child) => {
      return child.props.fill || child.props.defaultFill;
    });
    setFills(originalFills);
  };

  const handleMouseLeave = () => setFills(defaultFills);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${custom ? custom : "w-8 h-8"} inline-flex rounded-full items-center justify-center overflow-hidden border-[2px] border-black hover:border-0 group`}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-12 group-hover:h-12"></span>
      {
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { fill: fills[index], defaultFill: defaultFills[index] });
        })
      }
    </div>
  );
}