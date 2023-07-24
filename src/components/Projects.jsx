import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../assets/projects/projectsData";

export default function Projects() {

  return (
    <section className="w-full bg-amber-200">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <p className="text-xl tracking-widest">PROJECTS</p>
        <h2 className="pt-4">What I've built</h2>
        <div className="grid px-20 py-4 md:grid-cols-2 gap-x-12 gap-y-8 bg-white">
          {
            projectsData?.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techs={project.techs}
                images={project.images}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
