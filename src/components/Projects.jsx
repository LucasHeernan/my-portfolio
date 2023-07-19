import React from "react";
import ProjectCard from "./ProjectCard";
// import 12 imagenes from "tarara.tarara";

export default function Projects() {

  // TITULO - BG-IMG - DESCRIPCIÓN - TECHS
  return (
    <section className="w-full bg-amber-200">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <p className="text-xl tracking-widest">PROJECTS</p>
        <h2 className="pt-4">What I've built</h2>
        <div className="grid px-20 py-4 md:grid-cols-2 gap-x-12 gap-y-8 bg-white">
          <ProjectCard
            title={"Instagram clone"}
            // bgImage={}
            description={"Proyecto que replica la interfaz visual de Instagram en la que puedes hacer un recorrido por todas las pantallas y ver lo similar que es al original. La aplicación fue construida completamente con React Native."}
            techs={["React Native", "CSS"]}
          />
          <ProjectCard
            title={"Portfolio"}
            // bgImage={}
            description={""}
            techs={["ReactJS", "TailwindCSS"]}
          />
          <ProjectCard
            title={"Dpower App"}
            // bgImage={}
            description={"Aplicación móvil estilo red social hecha con React Native con funcionalidades de Autentificación, MarketPlace, Pasarela de pago, publicar desde galería, entre otras"}
            techs={["React Native", "Redux", "NodeJS", "Express", "Sequelize", "PostgreSQL"]}
          />
          <ProjectCard
            title={"PokeApp"}
            // bgImage={}
            description={"Diseñar y desarrollar una App de pokemon que incluía: búsquedas, filtrados combinados, ordenamientos y creación"}
            techs={["ReactJS", "Redux", "NodeJS", "Express", "Sequelize", "PostgreSQL"]}
          />
        </div>
      </div>
    </section>
  )
}
