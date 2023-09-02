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
    <div className="font-['Poppins']">
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

// Full Stack developer orientado al Front end 
// con experiencia en desarrollo de 
// aplicaciones web y mobile en Javascript
// con ReactJS, React Native, Redux, 
// NodeJS, Express, PostgreSQL

// Let's talk
// Wanna get in touch or talk about a project?
// Feel free to contact me via email at
// rafael@caferati.me
// or drop a line in the form at the
// contact page