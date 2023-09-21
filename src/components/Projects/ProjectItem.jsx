import React from "react";
import ProjectImage from "./ProjectImage";
import { projectsData } from "../../assets/projects/projectsData";
import { useParams } from "react-router-dom";

export default function ProjectItem() {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id.replace(":", "")));

  // if (!project) {
  //   console.log(id);
  //   console.log(project);
  //   return <p>Proyecto no encontrado.</p>
  // }

  return (
    <div className="w-full h-screen cursor-default">
      <div className="max-w-7xl w-full h-full flex flex-col mx-auto px-5 text-[#2a2a2a] dark:text-white lg:px-7 xl:px-10">
      {/* <div className="max-w-7xl w-full h-full flex flex-col mx-auto text-[#2a2a2a] dark:text-white px-5 lg:px-7 xl:px-10"> */}
        <h2 className="text-2xl font-bold pt-10 pb-1 tracking-widest uppercase sm:text-3xl lg:text-4xl">{project.title}</h2>
        <p className="text-base font-normal pr-32 md:pb-5 lg:text-lg lg:font-normal bg-violet-100">{project.description}</p>
        <div className="flex flex-col">
          <div className="w-full flex flex-row">
            <section className="w-2/5 h-96">
              <ProjectImage
                images={project.images}
                phone={project.phone}
              />
            </section>
            <section className="w-3/5 h-96">
              <div className="w-full h-full bg-stone-200">
                <div className="relative font-['Poppins] uppercase z-0">
                  <h3 className="text-4xl font-bold text-black">Mi Título</h3>
                  <h3 className="text-4xl font-bold absolute text-violet-400 top-[3px] -z-10">Mi Título</h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
