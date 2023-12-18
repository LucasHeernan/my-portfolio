import React from "react";
import NavBar from "./NavBar/NavBar";
import Home3 from "./Home/Home3";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Root() {
  return (
    <div>
      <NavBar />
      <Home3 />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
};
