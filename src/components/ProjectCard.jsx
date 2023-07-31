import React from "react";
import ProjectImage from "./ProjectImage";
import { Github } from "./Icons";
import { motion } from "framer-motion";

export default function ProjectItem({ title, description, techs, images, repository, phone }) {

  return (
    <article className="w-full pt-10 bg-red-200">
      <div className={`max-w-7xl w-full ${phone ? "h-[480px]" : "h-96"} flex justify-between bg-white`}>
        {
          phone ?
          <>
            {/* CUADRO DE TEXTO E ÍCONOS */}
            <div className={`${phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-evenly p-5 bg-blue-300`}>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
              <p className="text-sm text-white">{description}</p>
              <div className="flex mt-1">
                <div className="w-full flex justify-between">
                  <div className="flex items-center">
                    {
                      techs.map(el => {
                        return <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">{el}</span>
                      })
                    }
                  </div>
                  <motion.a
                    href={`${repository}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center mr-5 cursor-pointer bg-white"
                    whileTap={{scale: 0.8}}
                  >
                    <Github className="w-8 h-w-8" />
                  </motion.a>
                </div>
              </div>
            </div>
            {/* CUADRO DE IMÁGENES */}
            <div className={`${phone ? "w-2/5" : "w-[45%]" } h-full`}>
              <ProjectImage images={images} phone={phone} />
            </div>
          </> :
          <>
            {/* CUADRO DE IMÁGENES */}
            <div className={`${phone ? "w-2/5" : "w-[45%]" } h-full`}>
              <ProjectImage images={images} phone={phone} />
            </div>
            {/* CUADRO DE TEXTO E ÍCONOS */}
            <div className={`${phone ? "w-3/5" : "w-[55%]"} h-full flex flex-col justify-evenly p-5 text-right bg-blue-300`}>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
              <p className="text-sm text-white">{description}</p>
              <div className="flex mt-1 justify-end">
                <div className="w-full flex justify-between">
                  <motion.a
                    href={`${repository}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer bg-white"
                    whileTap={{scale: 0.8}}
                  >
                    <Github className="w-8 h-8" />
                  </motion.a>
                  <div className="flex items-center">
                    {
                      techs.map(el => {
                        return <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">{el}</span>
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