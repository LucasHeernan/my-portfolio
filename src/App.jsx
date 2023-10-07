import React from "react";
import Root from "./components/Root";
import ProjectItem from "./components/Projects/ProjectItem";
import { Routes, Route } from "react-router-dom";
import "./tailwind.css";

export default function App() {
  return (
    <div className="font-montserrat bg-[#fff] transition-colors duration-500 ease-in-out delay-75 text-[#2a2a2a] dark:text-[#cacaca] dark:bg-[#2a2a2a]">
      <Routes>
        <Route path="/" element={ <Root /> } />
        <Route
          path="/:id"
          element={ <ProjectItem /> }
        />
      </Routes>
    </div>
  )
}

/* Home { AnimatedLetters } -- ¿ About/Skills ? -- Proyects { ProjectItem } -- Contact -- Footer */

// ABOUT
// Hola! Soy Lucas, desarrollador en Javascript, con fluidez tanto en frontend como en backend.
// Uso principalmente React, React Native, Redux, Node, Express y Sequalize. Pero me encanta 
// aprender cosas nuevas!

// Full Stack developer orientado al Front end 
// con experiencia en desarrollo de 
// aplicaciones web y mobile en Javascript
// con ReactJS, React Native, Redux, 
// NodeJS, Express, PostgreSQL