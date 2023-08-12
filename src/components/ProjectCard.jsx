import React from "react";
import ProjectImage from "./ProjectImage";
import { Github } from "./Icons";
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

export default function ProjectCard({ title, description, techs, images, repository, phone }) {

  return (
    <motion.div
      initial={{
        opacity: 0.3,
        translateY: 100,
        scale: 0.7
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        scale: 1
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        type: "spring"
      }}
      viewport={{ once: true }}
      className="w-full pb-20"
    >
      <div className={`max-w-7xl w-full ${phone ? "h-[480px]" : "h-96"} flex justify-between px-6 py-4 cursor-default text-black bg-slate-200`}>
        {
          phone ?
          <>
            <div className={`${phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-evenly p-10`}>
              <h3 className="text-4xl font-bold tracking-wide">{title}</h3>
              <p className="text-lg font-medium pr-10">{description}</p>
              <div className="flex">
                <div className="w-full flex justify-between">
                  <div className="flex items-center">
                    {
                      techs.map((el, index) => {
                        return (
                          <motion.div
                            key={index}
                            variants={techAnimations}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            viewport={{ once: true }}
                            className="inline-block p-1 bg-blue-600 text-black border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-blue-950 rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.25)] mr-2 relative overflow-hidden box-border
                            before:bg-blue-400 before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                            after:bg-blue-500 after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-1"
                          >
                            <span className="relative z-20">{el}</span>
                          </motion.div>
                        )
                      })
                    }
                  </div>
                  <motion.a
                    href={`${repository}`}
                    target="_blank"
                    className="w-11 h-11 rounded-full flex justify-center items-center mr-4 cursor-pointer bg-slate-800 border-solid border-t-0 border-r-[3px] border-b-4 border-l-0 border-slate-900
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
                </div>
              </div>
            </div>
            <div className={`${phone ? "w-2/5" : "w-[45%]" } relative h-full before:w-full before:h-full before:absolute before:left-2 before:top-2 before:bg-slate-700`}>
              <ProjectImage images={images} phone={phone} />
            </div>
          </> :
          <>
            <div className={`${phone ? "w-2/5" : "w-[45%]" } relative h-full before:w-full before:h-full before:absolute before:left-2 before:top-2 before:bg-slate-700`}>
              <ProjectImage images={images} phone={phone} />
            </div>
            <div className={`${phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-around p-10 text-right`}>
              <h3 className="text-4xl font-bold tracking-wide">{title}</h3>
              <p className="text-lg font-medium pl-6">{description}</p>
              <div className="flex justify-end">
                <div className="w-full flex justify-between">
                  <motion.a
                    href={`${repository}`}
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
                      techs.map((el, index) => {
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
                            after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-1"
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
          </>
        }
      </div>
    </motion.div>
  );
}


// Let's talk
// Wanna get in touch or talk about a project?
// Feel free to contact me via email at
// rafael@caferati.me
// or drop a line in the form at the
// contact page