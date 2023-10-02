import React, { useState, useEffect } from "react";
import IconContainer from "../Technologies/InconContainer";
import { Github, Linkedin, Whatsapp, Email } from "../Technologies/Icons";
import profilePicture from "../../assets/profile-picture.jpg";
import { motion } from "framer-motion";

export default function Footer() {

  const [link, setLink] = useState("");

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none)").matches;
    isMobile ? setLink("whatsapp://send?text=Hola! 👋🏼&phone=5491134921341") : setLink("https://web.whatsapp.com/send?phone=5491134921341&text=Hola! 👋🏼");
  }, []);

  return (
    <footer className="w-full cursor-default font-montserrat">
      <div className="max-w-7xl w-full mx-auto px-5 pb-7 pt-20 text-[#2a2a2a] dark:text-white lg:px-7 lg:pt-28 xl:px-10">
        <section className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full -rotate-[18deg] object-scale-down bg-gradient-to-bl from-indigo-300 via-purple-400 to-sky-900 shadow-sm shadow-black lg:w-14 lg:h-14" src={profilePicture} alt="profile picture" />
            <p className="text-base font-normal font-poppins uppercase pl-2 lg:text-2xl">Lucas Benitez</p>
          </div>
          <div className="flex items-center opacity-90">
            <motion.a
              href="https://github.com/LucasHeernan"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-[5px] top-[0.5px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
                <Github className="w-[65%] z-10" />
              </IconContainer>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lucas-h-benitez"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-[5px] mt-[1px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
                <Linkedin className="w-1/2 z-10 ml-0.5 mb-px" />
              </IconContainer>
            </motion.a>
            <motion.a
              href="mailto:lhbenitez2@gmail.com"
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 mr-[5px] mt-[1px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
                <Email className="w-[55%] z-10 ml-[2px] mt-[2px]" />
              </IconContainer>
            </motion.a>
            <motion.a
              href={`${link}`}
              target="_blank"
              whileTap={{scale: 0.8}}
            >
              <IconContainer custom={"w-7 h-7 top-[1px] md:w-9 md:h-9"}>
                <Whatsapp className="w-[65%] z-10 ml-0.5 mb-px" />
              </IconContainer>
            </motion.a>
          </div>
        </section>

        <section className="flex justify-between items-center font-poppins py-1">
          {/* <div className="text-xs font-medium lg:text-sm lg:font-light"> */}
          <div className="text-xs font-medium lg:text-sm lg:font-light">
            <p>Copyright &copy; 2023 | All rights reserved.</p>
            {/* © */}
          </div>
          <div className="flex items-center">
            <p className="text-xs font-medium lg:text-sm lg:font-light pr-[3px] lg:pr-[5px]">Contact me</p>
            <p className="relative text-base bottom-[2px] lg:text-lg">☝🏻</p>
          </div>
        </section>
      </div>
    </footer>
  )
}