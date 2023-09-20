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
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row lg:px-7 xl:px-10">
        <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">{project.title}</h2>
        <p className="text-base font-normal md:pt-4 md:pb-5 md:pr-5 md:w-[90%] lg:pb-2 lg:text-lg lg:font-normal lg:pr-10">{project.description}</p>
        <div className="w-full flex flex-row">
          <section className="w-1/2 h-96">
            <ProjectImage
              images={project.images}
              phone={project.phone}
            />
          </section>
          <section className="w-1/2 h-96"></section>
        </div>
      </div>
    </div>
  )
}
