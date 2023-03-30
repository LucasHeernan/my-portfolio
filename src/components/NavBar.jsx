import React from "react";

export default function NavBar() {

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-blue-100 fixed z-20">
      <div className="flex justify-start items-center w-7 h-7">
        <div className="w-full h-full bg-orange-400 rounded-full"/>
      </div>
      <ul className="flex-1 flex justify-center items-center list-none">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="my-0 mx-4 cursor-pointer" key={`link-${item}`}>
            {/* <div className="w-1 h-1 bg-transparent rounded-3xl mb-1 hover:bg-blue-500"/> */}
            <a className="text-gray-600 flex-col uppercase font-semibold transition-all duration-300 ease-in-out hover:text-blue-400" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div> */}
    </nav>
  )
}