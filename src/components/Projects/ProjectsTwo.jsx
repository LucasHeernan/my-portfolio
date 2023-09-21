import React from "react";
import ProjectsTwoCard from "./ProjectTwoCard";
import { projectsData } from "../../assets/projects/projectsData";

export default function ProjectsTwo() {

  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 py-20 font-['Poppins']">
        <p className="text-4xl font-bold tracking-widest">PROJECTS</p>
        <h2 className="text-xl font-medium pt-4">What I've built</h2>
        <div className="flex flex-col">
          {
            projectsData?.map((project, index) => (
              <ProjectsTwoCard
                key={index}
                title={project.title}
                description={project.description}
                techs={project.techs}
                images={project.images}
                repository={project.repository}
                phone={project.phone}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
