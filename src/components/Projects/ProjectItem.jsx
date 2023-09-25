import React, { useEffect } from "react";
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
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id.replace(":", "")));

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  
  return (
    <div className="w-full cursor-default font-['Montserrat']">
      <ProjectItemNavBar />
      <div className="max-w-7xl w-full flex flex-col mx-auto px-20 py-10 text-[#2a2a2a] dark:text-white">
        <div className="relative z-0 flex items-center">
          <h2 className="text-2xl font-bold pt-5 pb-5 tracking-wider uppercase sm:text-3xl lg:text-4xl">{project.title}</h2>
          <h2 className="text-2xl font-bold pt-5 pb-5 tracking-wider uppercase absolute text-rose-300 top-[3px] -z-10 sm:text-3xl lg:text-4xl">{project.title}</h2>
          <a
            href={`${project.repository}`}
            target="_blank"
            className="w-9 h-9 mt-1 rounded-full flex justify-center items-center ml-5 shadow-sm shadow-black/30 bg-gradient-to-tl from-slate-900 to-slate-500 border-b-[3px] border-r-2 border-slate-950"
          >
            <Github fill={"white"} className="w-6 h-6" />
          </a>
          <div className="relative z-10 ml-5 group">
            <a
              href={`${project.repository}`}
              target="_blank"
              className="flex justify-center items-center p-1 rounded-full bg-gradient-to-tl from-indigo-100 to-indigo-200 border-b-2 border-r border-indigo-400 shadow-sm shadow-black transition-all duration-100 ease-out
              group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5 group-active:border-b group-active:border-r-0 group-active:to-indigo-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <span
              className="absolute flex justify-center items-center p-1 -z-10 top-px left-px w-[calc(100%+1px)] h-[calc(100%+1px)] rounded-full bg-slate-800 dark:bg-slate-950 transform transition-all ease-in-out duration-100
              group-active:w-full group-active:h-full group-active:scale-90"
            >
              <Github className="w-6 h-6" />
            </span>
          </div>
        </div>
        <p className="text-base font-normal pr-32 pb-5 lg:text-lg lg:font-medium">{project.description}</p>

        <div className={`w-full ${project.phone ? "h-[600px]" : "h-[380px]"} flex`}>
          
          <div className={`${project.phone ? "w-[45%]" : "w-1/2" } relative h-full before:w-full before:h-full before:absolute before:left-3 before:top-3 before:bg-slate-700`}>
            <ProjectImage images={project.images} phone={project.phone} />
          </div>
          <div className={`${project.phone ? "w-[55%] pl-20" : "w-1/2 px-10"} h-full flex flex-col justify-around text-left`}>
            <h3 className="text-4xl font-bold tracking-wide">Sobre este proyecto</h3>
            <p className="text-lg font-medium">{project.description}</p>
            <div className="flex flex-col">
              <h4 className="text-3xl font-bold tracking-wide py-3">Tecnologías</h4>
              <div className="relative">
                <div className="absolute truncate">
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
                          className="inline-block p-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] mr-3 relative overflow-hidden box-border
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
          
        </div>
        <ProjectItemFooter />
      </div>
    </div>
  )
}

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