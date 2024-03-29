import React from "react";
import Root from "./components/Root";
import ProjectItem from "./components/Projects/ProjectItem";
import { Routes, Route } from "react-router-dom";
import { AnimationsProvider } from "./Context";
import "./tailwind.css";

export default function App() {
  return (
    <AnimationsProvider>
      <div className="font-montserrat bg-[#fff] transition-colors duration-500 ease-in-out delay-75 text-[#2a2a2a] dark:text-[#cacaca] dark:bg-[#2a2a2a]">
        <Routes>
          <Route path="/" element={ <Root /> } />
          <Route
            path="/:id"
            element={ <ProjectItem /> }
          />
        </Routes>
      </div>
    </AnimationsProvider>
  )
};
