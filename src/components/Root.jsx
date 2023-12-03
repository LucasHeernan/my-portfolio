import React from "react";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer2 from "./Footer/Footer2";
import { AnimationNavBarProvider } from "../AnimationsContext";

export default function Root() {
  return (
    <div>
      <AnimationNavBarProvider>
        <NavBar />
      </AnimationNavBarProvider>
      <Home />
      <Projects />
      <Contact />
      <Footer2 />
    </div>
  )
};
