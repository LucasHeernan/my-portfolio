import React from "react";
import TechContainer from "./TechContainer";
import { JS, HTML, CSS, ReactJS, ReactNative, TailwindCSS, NodeJS, ExpressJS, Sequelize, PostgreSQL, Git, Expo } from "./Icons";

export default function Technologies() {

  return (
    <div className="w-full m-auto max-w-7xl px-2 sm:px-3 md:px-4 lg:px-8 bg-white sm:bg-orange-200 md:bg-white lg:bg-orange-400 xl:bg-lime-200">
      <div className="carousel overflow-hidden py-4 whitespace-nowrap relative flex w-full m-auto font-['Poppins']
        before:absolute before:top-0 before:w-12 sm:before:w-20 md:before:w-28 lg:before:w-36 before:h-full before:content-[''] before:z-20
        after:absolute after:top-0 after:w-12 sm:after:w-20 md:after:w-28 lg:after:w-36 after:h-full after:content-[''] after:z-20
        before:left-0 before:bg-gradient-to-l before:from-transparent before:to-white
        after:right-0 after:bg-gradient-to-r after:from-transparent after:to-white"
      >
        <div className="carousel-stop animate-slide flex">
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <HTML className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">HTML</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <JS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Javascript</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <CSS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">CSS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <ReactJS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">ReactJS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <TailwindCSS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <ReactNative className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">React Native</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <NodeJS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">NodeJS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <ExpressJS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">ExpressJS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <Sequelize className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Sequelize</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <PostgreSQL className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <Git className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Git</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <Expo className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Expo</span>
          </div>
        </div>

        <div className="carousel-stop animate-slide flex">
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <ReactJS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">ReactJS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <JS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Javascript</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <NodeJS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">NodeJS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <PostgreSQL className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <ReactNative className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">React Native</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <Sequelize className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Sequelize</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <CSS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">CSS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <TailwindCSS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <HTML className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">HTML</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <ExpressJS className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">ExpressJS</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <Git className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Git</span>
          </div>
          <div className="flex flex-col items-center mx-10">
            <TechContainer>
              <Expo className="transition-all z-10" />
            </TechContainer>
            <span className="font-semibold bg-white">Expo</span>
          </div>
        </div>
      </div>
    </div>
  )
}