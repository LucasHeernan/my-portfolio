import React from "react";
import ProjectImage from "./ProjectImage";
import insta from "../assets/projectsImages/gimpInsta2.png";
import portfolio from "../assets/projectsImages/gimpPoke3.png";

const slides = [ insta, portfolio ];

export default function ProjectItem() {

  return (
    <div className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row lg:px-7 xl:px-10">
        <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Project Item</h2>
        <p className="text-base font-normal md:pt-4 md:pb-5 md:pr-5 md:w-[90%] lg:pb-2 lg:text-lg lg:font-normal lg:pr-10">Breve introducción</p>
        <div className="w-1/2">
        </div>
      </div>
    </div>
  )
}