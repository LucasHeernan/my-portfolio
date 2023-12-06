import React, { useState } from "react";
import { useMenu } from "../Animations/Animations";
import BurgerToggle from "./BurgerToggle";
import SideBar from "./SideBar";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);

  const scope = useMenu(isOpen);

  return (
    <div ref={scope}>
      <div className={`transform transition-colors ease-in-out duration-500 md:hidden ${isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}`} />
      <SideBar handleMenu={handleMenu} />
      <BurgerToggle isOpen={isOpen} handleMenu={handleMenu} />
    </div>
  )
};
