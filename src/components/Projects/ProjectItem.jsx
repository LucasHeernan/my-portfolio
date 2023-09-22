import React, { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectItemNavBar from "./ProjectItemNavBar";
import ProjectItemFooter from "./ProjectItemFooter";
import { projectsData } from "../../assets/projects/projectsData";
import { Github } from "../Technologies/Icons";
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
      <div className="max-w-7xl w-full flex flex-col mx-auto px-10 text-[#2a2a2a] dark:text-white">
        <div className="relative z-0">
          <h2 className="text-2xl font-bold pt-10 pb-1 tracking-wider uppercase sm:text-3xl lg:text-4xl">{project.title}</h2>
          <h2 className="text-2xl font-bold pt-10 pb-1 tracking-wider uppercase absolute text-rose-300 top-[3px] -z-10 sm:text-3xl lg:text-4xl">{project.title}</h2>
        </div>
        <p className="text-base font-normal pr-32 md:pb-5 lg:text-lg lg:font-normal">{project.description}</p>
        <div className={`w-full ${project.phone ? "h-[580px]" : "h-96"} flex py-5`}>
            
          <div className={`${project.phone ? "w-2/5" : "w-[45%]" } relative h-full before:w-full before:h-full before:absolute before:left-2 before:top-2 before:bg-slate-700`}>
            <ProjectImage images={project.images} phone={project.phone} />
          </div>
          <div className={`${project.phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-around p-10 text-right`}>
            <h3 className="text-4xl font-bold tracking-wide">{project.title}</h3>
            <p className="text-lg font-medium pl-6">{project.description}</p>
            <div className="flex justify-end">
              <div className="w-full flex justify-between">
                <motion.a
                  href={`${project.repository}`}
                  target="_blank"
                  className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer bg-slate-800 border-solid border-t-0 border-r-[3px] border-b-4 border-l-0 border-slate-900
                  hover:bg-gradient-to-br from-black to-slate-500 hover:shadow hover:shadow-gray-500"
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github
                    fill={"white"}
                    className="w-7 h-w-7 ml-[3px]"
                  />
                </motion.a>
                <div className="flex items-center">
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
                          className="inline-block p-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] ml-2 relative overflow-hidden box-border
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
      </div>
      <ProjectItemFooter />
    </div>
  )
}
