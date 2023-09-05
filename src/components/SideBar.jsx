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
      [ "a", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05) } ]
    ]) :
    animate([
      [ "a", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }) } ],
      [ "nav", { transform: "translateX(-100%)" } ]
    ])
  }, [isOpen]);

  return scope;
}

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <Menu />
      <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
