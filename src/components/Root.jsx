import React from "react";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Root() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}