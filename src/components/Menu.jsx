import React from "react";

export default function Menu({ isOpen }) {
// export default function Menu({ isOpen }) {
  return (
    <nav className={ isOpen ? "fixed z-50 h-screen top-0 left-0 bottom-0 w-[400px] pt-20 transform transition-[width] -translate-x-full bg-yellow-200" : ""}>
    {/* <div className={menu ? "fixed right-0 top-[55px] w-full h-screen bg-black/50 transition-all duration-500 ease-out" : ""}> */}
    {/* <nav className={`fixed top-0 left-0 bottom-0 pt-12 transition-[width] duration-500 ease-in-out ${isOpen ? "w-[400px]" : "w-0"} bg-[#ff0066]`}> */}
      <ul className="flex flex-col gap-3 p-4">
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">Portfolio</li>
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">About</li>
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">Contact</li>
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">Search</li>
      </ul>
    </nav>
  );
}
