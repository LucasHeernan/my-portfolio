import React from "react";
import ProjectImage from "./ProjectImage";
import { projectsData } from "../../assets/projects/projectsData";
import { useParams } from "react-router-dom";
// import insta from "../../assets/projectsImages/gimpInsta2.png";
// import portfolio from "../../assets/projectsImages/gimpPoke3.png";
// const slides = [ insta, portfolio ];

export default function ProjectItem() {
  const { id } = useParams();

  const project = projectsData.find((project) => project.id === id);

  return (
    <div className="w-full h-screen cursor-default">
      {
        !project ? (
          <div>Proyecto no encontrado</div>
        ) : (
          <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row lg:px-7 xl:px-10">
            <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">{project.title}</h2>
            <p className="text-base font-normal md:pt-4 md:pb-5 md:pr-5 md:w-[90%] lg:pb-2 lg:text-lg lg:font-normal lg:pr-10">{project.description}</p>
            <div className="w-full flex">
              <section className="w-1/2 h-96">
                <ProjectImage
                  images={project.images}
                  phone={project.phone}
                />
              </section>
              <section className="w-1/2 h-96"></section>
            </div>
          </div>        
        )
      }
    </div>
  )
}
// <div className="w-full h-screen cursor-default">
//   <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col md:flex-row lg:px-7 xl:px-10">
//     <h2 className="text-2xl font-bold pt-14 pb-1 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">TITULO DEL PROYECTO</h2>
//     <p className="text-base font-normal md:pt-4 md:pb-5 md:pr-5 md:w-[90%] lg:pb-2 lg:text-lg lg:font-normal lg:pr-10">Breve description del proyecto</p>
//     <div className="w-full flex">
//       <section className="w-1/2 h-96">
//         <ProjectImage
//           images={project.images}
//           phone={project.phone}
//         />
//       </section>
//       <section className="w-1/2 h-96"></section>
//     </div>
//   </div>
// </div>