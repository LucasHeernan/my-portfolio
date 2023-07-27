import React from "react";
import ProjectItem from "./ProjectsItem";

export default function ProjectsContainer() {

  return (
    <section className="w-full bg-amber-200">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <p className="text-xl tracking-widest">PROJECTS</p>
        <h2 className="pt-4">What I've built</h2>
        <div className="flex flex-col py-4 bg-white">
          <ProjectItem />
        </div>
      </div>
    </section>
  )
}