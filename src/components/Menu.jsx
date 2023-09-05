import React from "react";

export default function Menu() {

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-2/3 h-screen pt-24 transform transition-[width] -translate-x-full will-change-transform bg-[#ff0066]">
      <ul className="flex flex-col gap-3 p-4">
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">Portfolio</li>
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">About</li>
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">Contact</li>
        <li className="text-white block will-change-transform transform transition-all origin-left font-bold text-5xl p-2">Search</li>
      </ul>
    </nav>
  );
}
