import React from "react";
import Root from "./components/Root";
import ProjectItem from "./components/Projects/ProjectItem";
import { Routes, Route } from "react-router-dom";
import "./tailwind.css";
import { AnimationListProvider, AnimationFooterProvider, AnimationTextProvider, AnimationTitleProvider, AnimationProjectProvider } from "./AnimationsContext";

export default function App() {
  return (
    <AnimationListProvider>
    <AnimationFooterProvider>
    <AnimationTextProvider>
    <AnimationTitleProvider>
    <AnimationProjectProvider>
      <div className="font-montserrat bg-[#fff] transition-colors duration-500 ease-in-out delay-75 text-[#2a2a2a] dark:text-[#cacaca] dark:bg-[#2a2a2a]">
        <Routes>
          <Route path="/" element={ <Root /> } />
          <Route
            path="/:id"
            element={ <ProjectItem /> }
          />
        </Routes>
      </div>
    </AnimationProjectProvider>
    </AnimationTitleProvider>
    </AnimationTextProvider>
    </AnimationFooterProvider>
    </AnimationListProvider>
  )
};
