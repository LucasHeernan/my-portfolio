import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { useList, useText } from "../Animations/Animations";


const CustomLink = ({ href, media, username }) => {
  const [hover, setHover] = useState("right-0");
  const handleHover = () => setHover("left-0");
  const handleHoverLeave = () => setHover("right-0");

  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
      className="relative flex flex-row justify-between items-baseline font-poppins my-6 mr-5 pb-2 border-b border-[#9a9a9a] text-base text-[#2a2a2a] dark:text-[#cacaca]
      transition-colors duration-200 ease-in-out lg:mr-10 lg:my-[22px] xl:my-6 xl:mr-20 dark:border-[#8a8a8a] group"
    >
      <span className={`absolute ${hover} -bottom-px w-0 h-0.5 transform transition-[width] ease-in-out duration-300 group-hover:w-full ${media === "Email" ? "bg-black dark:bg-white" : media === "Linkedin" ? "bg-blue-400" : media === "Github" ? "bg-violet-500" : "bg-green-500" }`}>&nbsp;</span>
      <p>{media}</p>
      <p>{username}</p>
    </a>
  )
};

export default function Contact () {

  const [link, setLink] = useState("");
  const scope = useList({ first:"ul", second:"a" });
  const title = useText({ first:"h2", delay: 0.2 });
  const subtitle = useText({ first:"p", delay: 0.3 });

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none)").matches;
    isMobile ? setLink("whatsapp://send?text=Hola! 👋🏼&phone=5491134921341") : setLink("https://web.whatsapp.com/send?phone=5491134921341&text=Hola! 👋🏼");
  }, []);

  return (
    <div name="contact" className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full mx-auto px-[10px] xs:px-5 flex flex-col md:flex-row lg:px-7 xl:px-10">

        <section className="relative z-0 md:flex md:flex-col md:w-1/2">
          <div ref={title}>
            <h2 className="text-2xl font-bold pt-14 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Contacto</h2>
            <h2 className="text-2xl font-bold pt-14 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl absolute text-[rgba(0,0,0,.20)] top-0.5 left-0.5 dark:top-[3px] dark:left-[3px] -z-10">Contacto</h2>
          </div>
          <div ref={subtitle}>
            <p className="text-sm xs:text-base font-medium text-[#2a2a2a] dark:text-[#9a9a9a] md:pt-4 md:pb-5 md:pr-5 md:w-[90%] lg:pb-2 lg:text-lg lg:pr-10">
              Si estas interesado en un proyecto, queres saber más sobre mi trabajo o estás buscando un desarrollador, no dudes en contactarme.
            </p>
          </div>
          <ul ref={scope} className="hidden md:flex flex-col py-2 md:py-4 xl:py-5">
            <CustomLink href={"mailto:lhbenitez2@gmail.com"} media={"Email"} username={"lhbenitez2@gmail.com"} />
            <CustomLink href={"https://www.linkedin.com/in/lucas-h-benitez"} media={"Linkedin"} username={"LucasHeernan"} />
            <CustomLink href={"https://github.com/LucasHeernan"} media={"Github"} username={"LucasHeernan"} />
            <CustomLink href={link} media={"Whatsapp"} username={"+5491134921341"} />
          </ul>
        </section>

        <ContactForm />
        
      </div>
    </div>
  )
};
