import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import BurgerToggle from "./BurgerToggle";
import SideBar from "./SideBar";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    isOpen ? 
    animate([
      [ "nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 } ],
      // [ "nav", { transform: "translateY(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 } ],
      [ "a", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05) } ]
    ]) :
    animate([
      [ "a", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }) } ],
      [ "nav", { transform: "translateX(-100%)" } ]
      // [ "nav", { transform: "translateY(-100%)" } ]
    ])
  }, [isOpen]);

  return scope;
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <div className={`transform transition-colors ease-in-out duration-500 md:hidden ${isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}`} />
      <SideBar />
      <BurgerToggle isOpen={isOpen} handleMenu={handleMenu} />
    </div>
  );
}
