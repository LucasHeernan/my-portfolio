import React, { useState, useEffect } from "react";
import IconContainer from "../Technologies/InconContainer";
import { Github, Linkedin, Whatsapp, Email } from "../Technologies/Icons";
import profilePicture from "../../assets/profile-picture.jpg";
import { motion } from "framer-motion";
import { useFooter } from "../Animations/Animations";

export default function Footer() {

  const [link, setLink] = useState("");
  const scope = useFooter({ down:"div" });

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none)").matches;
    isMobile ? setLink("whatsapp://send?text=Hola! 👋🏼&phone=5491134921341") : setLink("https://web.whatsapp.com/send?phone=5491134921341&text=Hola! 👋🏼");
  }, []);

  return (
    <footer className="w-full pt-24 pb-10 lg:pt-28 cursor-default">
      <div ref={scope} className="max-w-7xl w-full mx-auto px-[10px] xs:px-5 lg:px-7 xl:px-10">
        <section className="flex justify-between items-center">
          <div className="flex items-center text-[#2a2a2a] dark:text-[#cacaca]">
            <img className="hidden xs:inline-block w-10 h-10 rounded-full -rotate-[18deg] object-scale-down bg-gradient-to-bl from-indigo-300 via-purple-400 to-sky-700 shadow-sm shadow-black lg:w-14 lg:h-14" src={profilePicture} alt="profile picture" />
            <section className="relative z-0">
              <h4 className="text-lg font-medium font-poppins uppercase tracking-wide xs:pl-3 lg:text-2xl">Lucas Benitez</h4>
              <h4 className="text-lg font-medium font-poppins uppercase tracking-wide xs:pl-3 lg:text-2xl absolute text-[rgba(0,0,0,.20)] top-px left-px lg:top-0.5 lg:left-0.5 -z-10 w-full">Lucas Benitez</h4>
            </section>
          </div>
          <div className="flex items-center">
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
                <Whatsapp className="w-[65%] z-10 ml-px lg:ml-0.5" />
              </IconContainer>
            </motion.a>
          </div>
        </section>

        <section className="flex justify-between items-center py-1 text-[#2a2a2a] dark:text-[#9a9a9a]">
          <div className="text-xs font-medium lg:text-sm lg:font-medium">
          <span className="hidden xs:inline-block">Copyright</span><span> &copy; 2023 | All rights reserved.</span>
          {/* © */}
          </div>
          <div className="flex items-center">
            <p className="text-xs font-medium lg:text-sm pr-[3px] lg:pr-[5px]">Contact me</p>
            <p className="hidden xs:inline-block relative text-base bottom-[2px] lg:text-lg">☝🏻</p>
          </div>
        </section>
      </div>
    </footer>
  )
};
