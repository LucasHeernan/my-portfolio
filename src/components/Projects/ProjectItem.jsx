import React, { useState, useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectItemNavBar from "./ProjectItemNavBar";
import ProjectItemFooter from "./ProjectItemFooter";
import { Github } from "../Technologies/Icons";
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
}

export default function ProjectItem() {
  
  const [currentImg, setCurrentImg] = useState(0);
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id.replace(":", "")));

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  
  return (
    <div className="w-full cursor-default font-['Montserrat'] transition-colors duration-75 ease-in-out bg-white dark:bg-[#2a2a2a]">
      <ProjectItemNavBar />
      <div className="max-w-7xl w-full flex flex-col mx-auto py-10 px-5 sm:px-10 md:px-16 lg:px-20 text-[#2a2a2a] dark:text-[#8a8a8a]">
        <section className="relative z-0 w-full flex items-center">
          <h2 className="text-3xl font-bold pt-5 pb-5 tracking-wider uppercase scale-y-110 text-[#2a2a2a] dark:text-[#cacaca] lg:scale-y-100 lg:text-4xl">{project.title}</h2>
          {/* <h2 className="text-3xl font-bold pt-5 pb-5 tracking-wider uppercase scale-y-110 lg:scale-y-100 absolute text-white top-[3px] -z-10 lg:text-4xl">{project.title}</h2> */}
          <a
            href={`${project.repository}`}
            target="_blank"
            className="w-9 h-9 mt-1 rounded-full flex justify-center items-center ml-5 shadow-sm shadow-black/30 bg-gradient-to-tl from-slate-900 to-slate-500 border-b-[3px] border-r-2 border-slate-950"
          >
            <Github fill={"white"} className="w-6 h-6" />
          </a>
        </section>

        <p className="text-base font-medium pb-5 pr-5 md:text-lg md:pr-10 lg:pr-32">{project.description}</p>

        <section className={`flex flex-col items-center ${project.phone ? "lg:h-[600px] lg:flex lg:flex-row lg:items-stretch" : "xl:h-[380px] xl:flex xl:flex-row xl:items-stretch"}`}>

          <div className={`relative w-full mb-12 sm:mb-14 md:mb-20 ${project.phone ? "h-[480px] sm:w-4/6 sm:h-[490px] md:w-[60%] md:h-[510px] lg:w-[45%] lg:h-full" : "h-[315px] sm:w-[90%] sm:h-[380px] md:w-full md:h-[480px] lg:w-4/5 xl:w-1/2 xl:h-full" } before:w-full before:h-full before:absolute before:left-3 before:top-3 before:bg-slate-700 dark:before:bg-slate-950`}>
            <ProjectImage
              images={project.images}
              phone={project.phone}
              currentImg={currentImg}
              setCurrentImg={setCurrentImg}
            />
            <div className="h-10 flex items-end justify-center sm:h-11 md:h-14">
              <div className="flex items-center justify-center gap-4">
                {
                  project.images?.map((_, i) => (
                    <div
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all bg-gray-600 dark:bg-slate-300 ${currentImg === i ? "p-[10px]" : "hover:scale-110 bg-opacity-50 dark:bg-opacity-50"}`}
                      onClick={() => setCurrentImg(i)}
                      key={i}
                    />
                  ))
                }
              </div>
            </div>
          </div>

          <div className={`w-full flex flex-col text-left ${project.phone ? "lg:w-[55%] lg:pl-20 lg:justify-around" : "xl:w-1/2 xl:px-10 xl:justify-evenly"}`}>
            <h3 className="text-3xl font-bold tracking-wide pb-2 text-[#2a2a2a] dark:text-[#cacaca] lg:pb-0">Sobre este proyecto</h3>
            <p className="text-base md:text-lg font-medium">{project.description}</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-bold tracking-wide py-3 lg:py-0 text-[#2a2a2a] dark:text-[#cacaca]">Tecnologías</h4>
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
                          <span className="relative z-20">{el}</span>
                        </motion.div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </section>
        <ProjectItemFooter />
      </div>
    </div>
  )
}

//                                           BOTON HECHO POR MÍ
// <div className="relative z-10 ml-5 group">
//   <a
//     href={`${project.repository}`}
//     target="_blank"
//     className="flex justify-center items-center p-1 rounded-full bg-gradient-to-tl from-indigo-100 to-indigo-200 border-b-2 border-r border-indigo-400 shadow-sm shadow-black transition-all duration-100 ease-out
//     group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:border-b group-active:border-r-0 group-active:to-indigo-300"
//   >
//     <Github className="w-6 h-6" />
//   </a>
//   <span
//     className="absolute flex justify-center items-center p-1 -z-10 top-px left-px w-[calc(100%+1px)] h-[calc(100%+1px)] rounded-full bg-slate-800 dark:bg-slate-950 transform transition-all ease-in-out duration-100
//     group-active:w-full group-active:h-full group-active:scale-90"
//   >
//     <Github className="w-6 h-6" />
//   </span>
// </div>

// <motion.a
//   href={`${project.repository}`}
//   target="_blank"
//   className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer bg-slate-800 border-solid border-t-0 border-r-[3px] border-b-4 border-l-0 border-slate-900
//   hover:bg-gradient-to-br from-black to-slate-500 hover:shadow hover:shadow-gray-500"
//   transition={{ duration: 0.2 }}
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.9 }}
// >
//   <Github
//     fill={"white"}
//     className="w-7 h-w-7 ml-[3px]"
//   />
// </motion.a>

// {/* AWESOME BUTTON */}
// <div className="z-10 float-right mr-2 mb-2 font-bold uppercase font-['Montserrat'] group">
// {/* SOMBRA BOTTOM */}
//   <a
//     href=""
//     className="box-border inline-block align-middle h-[47px] pt-[3px] relative bg-transparent text-xs leading-6 font-semibold tracking-normal text-center bg-orange-500
//     before:left-[3px] before:w-[calc(100%-6px)] before:bg-[rgba(0,0,0,0.3)] before:h-[calc(100%-4px)] before:-bottom-[1px] before:absolute before:rounded-[3px] before:z-10 before:bg-red-600
//     before:transform before:transition-all before:ease-out before:duration-150 group-hover:before:-translate-y-[1px]"
//   >
//     <span className="block h-full bg-white">
//       <span className="relative flex items-stretch w-full h-[calc(100%-3px)] -mt-[3px] bg-yellow-200
//       before:bg-violet-700 before:rounded-[3px] before:top-auto before:bottom-[3px] before:z-50 before:absolute
//       after:bg-green-700 after:rounded-[3px] after:z-50 after:w-0 after:top-[1px] after:absolute"
//       >
//       {/* <span className="relative flex items-stretch w-full h-[calc(100%-3px)] -mt-[3px]
//       before:bg-[rgb(0,109,150)] before:rounded-[3px] before:top-auto before:-bottom-[3px] before:z-10
//       after:bg-[rgba(0,0,0,0.15)] after:rounded-[3px] after:z-30 after:w-0 after:top-[1px]"
//       > */}
//         <span className="bg-[rgb(0,172,237)] relative flex items-center justify-center rounded-[3px] z-30 overflow-hidden py-0 px-4
//         transform transition-all ease-out group-hover:translate-y-0.5">
//           {/* NO IMPORTA ESTE */}
//           <span className="block
//             before:bg-[rgba(0,0,0,0.1)] before:transform before:transition-opacity before:ease-out before:duration-300 before:opacity-0 before:z-10
//             group-hover:before:opacity-100"
//           >
//             <Github className="w-5 h-5 align-middle" fill={"white"} />
//           </span>
//         </span>
//       </span>
//     </span>
//   </a>
// </div>