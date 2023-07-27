import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import ProjectsContainer from "./components/ProjectsContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./tailwind.css";

export default function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <Technologies />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </div>
  )
}

/* Home -- AnimatedLetters -- About -- Skills -- Proyects -- ProjectItem -- Contact -- Footer */

// ABOUT
// Hola! Soy Lucas, desarrollador en Javascript, con fluidez tanto en frontend como en backend.
// Uso principalmente React, React Native, Redux, Node, Express y Sequalize. Pero me encanta 
// aprender cosas nuevas!