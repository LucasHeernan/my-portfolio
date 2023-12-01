import React, { useState, useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectNavBar from "./ProjectNavBar";
import ProjectFooter from "./ProjectFooter";
import { Github, Youtube, Android } from "../Technologies/Icons";
import { projectsData } from "../../assets/projects/projectsData";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const techAnimations = {
  initial: {
    opacity: 0,
    y: 25
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.2 * index
    }
  })
};

export default function ProjectItem() {
  
  const [apk, setApk] = useState(false);
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none)").matches;
    isMobile ? setApk(true) : null;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  
  return (
    <div className="w-full cursor-default font-['Montserrat'] transition-colors duration-75 ease-in-out bg-white dark:bg-[#2a2a2a]">
      <ProjectNavBar />
      <div className="max-w-7xl w-full flex flex-col mx-auto py-10 px-5 sm:px-10 md:px-16 lg:px-20 text-[#2a2a2a] dark:text-[#8a8a8a]">
        {/* bg-green-400 xs:bg-orange-400 sm:bg-violet-400 md:bg-green-400 lg:bg-sky-400 xl:bg-red-400 */}
        <section className="flex flex-col md:flex-row">
          <div className="relative z-0 pr-8 mt-5 mb-3">
            <h2 className="text-3xl font-bold tracking-wider uppercase scale-y-110 lg:scale-y-100 lg:text-4xl text-[#2a2a2a] dark:text-[#cacaca]">{project.title}</h2>
            <h2 className="text-3xl font-bold tracking-wider uppercase scale-y-110 lg:scale-y-100 lg:text-4xl absolute text-[rgba(0,0,0,.20)] top-0.5 left-0.5 dark:top-[3px] dark:left-[3px] -z-10">{project.title}</h2>
          </div>
          <div className="flex items-center mb-4 md:mb-0 md:pt-2">
            <div className="relative z-10">
              <a
                href={`${project.repository}`}
                target="_blank"
                className="w-9 h-9 flex justify-center items-center rounded-full bg-gradient-to-tl from-slate-800 to-slate-500 border-b-2 border-r border-slate-900 shadow-sm shadow-black"
              >
                <Github fill={"white"} className="w-6" />
              </a>
              <span className="absolute w-[calc(100%+1px)] h-[calc(100%+1px)] -z-10 top-px left-px rounded-full bg-[rgb(0,0,0,.70)] dark:bg-[#1d1c1c]" />
            </div>

            {
              project.android && apk ?
                <div className="relative z-10 ml-5">
                  <a
                    href={`${project.android}`}
                    target="_blank"
                    className="w-9 h-9 flex justify-center items-center rounded-full bg-[#83c610] border-b-2 border-r border-lime-700 shadow-sm shadow-black"
                  >
                    <Android fill={"white"} className="w-6 mt-px" />
                  </a>
                  <span className="absolute w-[calc(100%+1px)] h-[calc(100%+1px)] -z-10 top-px left-px rounded-full bg-[rgb(0,0,0,.70)] dark:bg-[#1d1c1c]"/>
                </div>
              : project.youtube ?
                <div className="relative z-10 ml-5">
                  <a
                    href={`${project.youtube}`}
                    target="_blank"
                    className="w-9 h-9 flex justify-center items-center rounded-full bg-[#ce1312] border-b-2 border-r border-[rgb(159,18,57)] shadow-sm shadow-black"
                  >
                    <Youtube fill={"white"} className="w-[22px] ml-px mt-px" />
                  </a>
                  <span className="absolute w-[calc(100%+1px)] h-[calc(100%+1px)] -z-10 top-px left-px rounded-full bg-[rgb(0,0,0,.70)] dark:bg-[#1d1c1c]"/>
                </div>
              : null
            }

          </div>
          
        </section>

        <p className="text-base font-medium mb-7 pr-5 md:text-lg md:pr-10 lg:pr-32">{project.subtitle}</p>

        <section className={`flex flex-col items-center ${project.phone ? "lg:h-[600px] lg:flex lg:flex-row lg:items-stretch" : "xl:h-[380px] xl:flex xl:flex-row xl:items-stretch"}`}>

          <ProjectImage images={project.images} phone={project.phone} />

          <div className={`w-full flex flex-col text-left ${project.phone ? "lg:w-[55%] lg:pl-20 lg:justify-around" : "xl:w-1/2 xl:pl-10 xl:justify-evenly"}`}>
            <h3 className="text-3xl font-bold tracking-wide mb-2 xl:mb-0 text-[#2a2a2a] dark:text-[#cacaca]">Sobre este proyecto</h3>
            <div className="text-base md:text-lg font-medium">
              <p>{project.description}</p>
              <p>{project.description2}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold tracking-wide py-3 xl:py-0 xl:pb-3 text-[#2a2a2a] dark:text-[#cacaca]">Tecnologías</h3>
              <div className="relative">
                <div className="absolute">
                  {
                    project.techs.map((el, index) => {
                      return (
                        <motion.div
                          key={index}
                          variants={techAnimations}
                          initial="initial"
                          whileInView="animate"
                          custom={index}
                          viewport={{ once: true }}
                          className="inline-block p-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-sm shadow-sm shadow-[rgba(0,0,0,.25)] mr-3 md:mr-4 relative overflow-hidden box-border
                          before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                          after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                        >
                          <span className="relative z-20 font-poppins">{el}</span>
                        </motion.div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </section>
        <ProjectFooter />
      </div>
    </div>
  )
};
