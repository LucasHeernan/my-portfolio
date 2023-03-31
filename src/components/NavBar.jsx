import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-blue-100 fixed z-10">
      <div className="flex justify-start items-center w-7 h-7">
        <div className="w-full h-full bg-orange-400 rounded-full"/>
      </div>
      <ul className="flex-1 flex justify-center items-center list-none">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="my-0 mx-4 cursor-pointer" key={`link-${item}`}>
            <a className="text-gray-600 flex-col uppercase font-semibold transition-all duration-300 ease-in-out hover:text-blue-400" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="w-8 h-8 relative flex justify-center items-center">
        <HiMenu className="w-3/4 h-3/4 text-purple-500" onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div
              className="fixed top-0 bottom-0 right-0 z-50 p-4 w-4/5 h-screen flex justify-end flex-col bg-white shadow-lg"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX className="w-9 h-9 text-purple-800 my-2 mx-4" onClick={() => setToggle(false)}/>
              <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li className="m-4" key={item}>
                    <a className="text-gray-600 text-base uppercase font-medium transition-all duration-300 ease-in-out hover:text-blue-400" href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}