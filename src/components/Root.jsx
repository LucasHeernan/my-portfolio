import React from "react";
import NavBar from "./NavBar/NavBar";
import Home2 from "./Home/Home2";
import Projects2 from "./Projects/Projects2";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Root() {
  return (
    <div>
      <NavBar />
      <Home2 />
      <Projects2 />
      <Contact />
      <Footer />
    </div>
  )
};
