import React from "react";
import AnimatedContainer from "../Home/AnimatedContainer";

export default function ProjectFooter () {

  return (
    <footer className="w-full pt-32 text-center cursor-default font-montserrat">
      <h4 className="text-[#2a2a2a] dark:text-[#CACACA] text-xl font-bold mb-0.5">Hablemos</h4>
      <p className="text-[#2a2a2a] dark:text-[#8A8A8A] text-base font-medium">
        ¿Estás buscando un desarrollador?
        <br />
        No dude en escribirme por
        <br />
        correo electrónico a <AnimatedContainer words={"lhbenitez2@gmail.com"} />
        <br />
        o completa el formulario en la <AnimatedContainer words={"sección de contacto"} />.
      </p>
    </footer>
  )
};