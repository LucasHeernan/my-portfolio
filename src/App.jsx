import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import ProjectsTwo from "./components/ProjectsTwo";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./tailwind.css";

export default function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <ProjectsTwo />
      {/* <Carousel /> */}
      {/* <Technologies /> */}
      <Contact />
      <Footer />
    </div>
  )
}

/* Home -- AnimatedLetters -- * About * -- Skills -- Proyects -- ProjectItem -- Contact -- Footer */

// ABOUT
// Hola! Soy Lucas, desarrollador en Javascript, con fluidez tanto en frontend como en backend.
// Uso principalmente React, React Native, Redux, Node, Express y Sequalize. Pero me encanta 
// aprender cosas nuevas!