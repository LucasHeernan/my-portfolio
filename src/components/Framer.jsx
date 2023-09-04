import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    isOpen ? 
    animate([
      [ "nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 } ],
      [ "li", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05) } ]
    ]) :
    animate([
      [ "li", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }) } ],
      [ "nav", { transform: "translateX(-100%)" } ]
    ])
  }, [isOpen]);

  return scope;
}

export default function Framer() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <div className="relative z-50 bg-violet-400" ref={scope}>
    {/* <div className="absolute flex flex-col justify-center items-center z-50 bg-black" ref={scope}> */}
      <Menu isOpen={isOpen} />
      <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    // <div className="text-white relative w-full h-screen max-w-md mx-auto overflow-hidden bg-violet-400">
    //   <div
    //     className="absolute p-20 flex items-center justify-center bg-yellow-200"
    //     ref={scope}
    //   >
    //     <Menu />
    //     <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    //   </div>
    // </div>
  );
}
