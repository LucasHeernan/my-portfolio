import React from "react";
import TechContainer from "./TechContainer";
import { JS, HTML, CSS, ReactJS, ReactNative, TailwindCSS, NodeJS, ExpressJS, Sequelize, PostgreSQL, Git, Expo, Redux } from "./Icons";

export default function Technologies() {

  return (
    <div className="w-full m-auto max-w-7xl px-2 sm:px-3 md:px-4 lg:px-8">
      <div className="carousel overflow-hidden py-7 sm:py-9 md:py-10 lg:py-12 whitespace-nowrap relative flex w-full m-auto font-['Poppins']
        before:absolute before:top-0 before:w-12 sm:before:w-20 md:before:w-28 lg:before:w-36 before:h-full before:content-[''] before:z-20
        after:absolute after:top-0 after:w-12 sm:after:w-20 md:after:w-28 lg:after:w-36 after:h-full after:content-[''] after:z-20
        before:left-0 before:bg-gradient-to-l before:from-transparent before:to-white
        after:right-0 after:bg-gradient-to-r after:from-transparent after:to-white"
      >
        <div className="carousel-stop animate-slide flex">
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <HTML />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">HTML</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <JS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Javascript</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <CSS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">CSS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <ReactJS/>
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">ReactJS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <TailwindCSS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Redux />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Redux</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <ReactNative />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">React Native</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <NodeJS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">NodeJS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <PostgreSQL />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <ExpressJS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">ExpressJS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Sequelize />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Sequelize</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Git />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Git</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Expo/>
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Expo</span>
          </div>
        </div>

        <div className="carousel-stop animate-slide flex bg-white">
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <ReactJS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">ReactJS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <JS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Javascript</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <NodeJS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">NodeJS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Redux />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Redux</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <PostgreSQL />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <ReactNative />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">React Native</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Sequelize />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Sequelize</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <CSS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">CSS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <TailwindCSS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <HTML />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">HTML</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <ExpressJS />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">ExpressJS</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Git />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Git</span>
          </div>
          <div className="flex flex-col items-center mx-3 sm:mx-5 md:mx-7 lg:mx-8">
            <TechContainer className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}>
              <Expo />
            </TechContainer>
            <span className="font-medium text-sm mt-1 sm:text-base md:font-semibold md:mt-2 lg:mt-4">Expo</span>
          </div>
        </div>
      </div>
    </div>
  )
}