import React from "react";
import ProjectImage from "./ProjectImage";
import { Github } from "./Icons";
import { motion } from "framer-motion";

export default function ProjectItem({ title, description, techs, images, repository, phone }) {

  return (
    <article className="w-full pb-20">
      <div className={`max-w-7xl w-full ${phone ? "h-[480px]" : "h-96"} flex justify-between cursor-default text-black bg-white`}>
        {
          phone ?
          <>
            {/* CUADRO DE TEXTO E ÍCONOS */}
            <div className={`${phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-evenly p-10`}>
              <h3 className="text-4xl font-bold tracking-wide">{title}</h3>
              <p className="text-lg font-medium pr-10">{description}</p>
              <div className="flex">
                <div className="w-full flex justify-between">
                  <div className="flex items-center">
                    {
                      techs.map(el => {
                        return <div className="inline-block p-1 bg-blue-600 text-black border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-blue-950 rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] ml-2 relative overflow-hidden box-border
                        before:bg-blue-400 before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                        after:bg-blue-500 after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-1
                        ">
                          <span className="relative z-20">{el}</span>
                        </div>
                      })
                    }
                  </div>
                  <motion.a
                    href={`${repository}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center mr-5 cursor-pointer bg-black"
                    whileTap={{scale: 0.8}}
                  >
                    <Github
                      fill={"white"}
                      className="w-7 h-w-7"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
            {/* CUADRO DE IMÁGENES */}
            <div className={`${phone ? "w-2/5" : "w-[45%]" } relative h-full before:w-full before:h-full before:absolute before:left-2 before:top-2 before:bg-slate-700`}>
              <ProjectImage images={images} phone={phone} />
            </div>
          </> :
          <>
            {/* CUADRO DE IMÁGENES */}
            <div className={`${phone ? "w-2/5" : "w-[45%]" } relative h-full before:w-full before:h-full before:absolute before:left-2 before:top-2 before:bg-slate-700`}>
              <ProjectImage images={images} phone={phone} />
            </div>
            {/* CUADRO DE TEXTO E ÍCONOS */}
            <div className={`${phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-around p-10 text-right`}>
              <h3 className="text-4xl font-bold tracking-wide">{title}</h3>
              <p className="text-lg font-medium pl-6">{description}</p>
              <div className="flex justify-end">
                <div className="w-full flex justify-between">
                  <motion.a
                    href={`${repository}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black"
                    whileTap={{scale: 0.8}}
                  >
                    <Github
                      fill={"white"}
                      className="w-7 h-w-7"
                    />
                  </motion.a>
                  <div className="flex items-center">
                    {
                      techs.map(el => {
                        return <div className="inline-block p-1 bg-[#313131] text-[#999] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] ml-2 relative overflow-hidden box-border
                        before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                        after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-1
                        ">
                          <span className="relative z-20">{el}</span>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </article>
  );
}


// Let's talk
// Wanna get in touch or talk about a project?
// Feel free to contact me via email at
// rafael@caferati.me
// or drop a line in the form at the
// contact page