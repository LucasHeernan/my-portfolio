import React from "react";
import IconContainer from "./InconContainer";
import { Github, Linkedin, Whatsapp, Email } from "./Icons";
import { motion } from "framer-motion";
import profilePicture from "../assets/profile-picture.jpg";

export default function Footer() {

  return (
    <footer className="w-full pb-7 pt-14 px-2 max-w-7xl mx-auto bg-fuchsia-200 sm:px-3 md:px-4 lg:px-8 lg:pt-28">
      <section className="flex justify-between items-center pl-1 md:pl-8">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full -rotate-[18deg] object-scale-down bg-indigo-300 shadow-sm shadow-black lg:w-14 lg:h-14" src={profilePicture} alt="profile picture" />
          <p className="text-base font-['Poppins'] font-medium uppercase pl-2 lg:font-semibold lg:text-2xl lg:pl-2">Lucas Benitez</p>
        </div>
        <div className="flex items-center opacity-90">
          <motion.a
            href="#"
            target="_blank"
            whileTap={{scale: 0.8}}
          >
            <IconContainer custom={"w-7 h-7 mr-[5px] top-[0.5px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
              <Github className="w-3/4 z-10 mr-[1px]" />
            </IconContainer>
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            whileTap={{scale: 0.8}}
          >
            <IconContainer custom={"w-7 h-7 mr-[5px] mt-[1px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
              <Linkedin className="w-[63%] z-10 ml-[2px] mb-[1px] md:w-3/5" />
            </IconContainer>
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            whileTap={{scale: 0.8}}
          >
            <IconContainer custom={"w-7 h-7 mr-[5px] top-[1px] md:w-9 md:h-9 md:mr-2 lg:mr-3"}>
              <Whatsapp className="w-4/5 z-10 ml-[1px]" />
            </IconContainer>
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            whileTap={{scale: 0.8}}
          >
            <IconContainer custom={"w-7 h-7 mr-1 mt-[1px] md:mr-0 md:w-9 md:h-9 md:mr-2"}>
              <Email className="w-2/3 z-10 ml-[2px] mt-[2px]" />
            </IconContainer>
          </motion.a>
        </div>
      </section>

      <section className="flex justify-between items-center py-1 px-1 text-xs font-medium font-['Poppins'] md:pl-8 lg:text-sm">
        <div>
          <p>Copyright &copy; © 2023 | All rights reserved.</p>
        </div>
        <div className="flex items-center pr-1 lg:pr-2">
          <p className="pr-[3px] lg:pr-[5px]">Contact me</p>
          <p className="relative text-base bottom-[2px] lg:text-lg">☝🏻</p>
        </div>
      </section>
    </footer>
  )
}