import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

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