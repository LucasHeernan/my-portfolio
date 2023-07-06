import React from "react";
import TechContainer from "./TechContainer";
import { JS, HTML, CSS, ReactJS, ReactNative, TailwindCSS, NodeJS, ExpressJS, Sequelize, PostgreSQL, Git, Expo } from "./Icons";

export default function Technologies() {

  return (
    <div className="logos flex w-full m-auto">
      <div className="logos-slide flex">
        <div className="flex flex-col items-center">
          <TechContainer>
            <JS className="z-10"/>
          </TechContainer>
          <span className="font-semibold">Javascript</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <HTML className="z-10" />
          </TechContainer>
          <span className="font-semibold">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <CSS className="z-10" />
          </TechContainer>
          <span className="font-semibold">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <ReactJS className="z-10" />
          </TechContainer>
          <span className="font-semibold">ReactJS</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <ReactNative className="z-10" />
          </TechContainer>
          <span className="font-semibold">React Native</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <TailwindCSS className="z-10" />
          </TechContainer>
          <span className="font-semibold">TailwindCSS</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <NodeJS className="z-10" />
          </TechContainer>
          <span className="font-semibold">NodeJS</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <ExpressJS className="z-10" />
          </TechContainer>
          <span className="font-semibold">ExpressJS</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <Sequelize className="z-10" />
          </TechContainer>
          <span className="font-semibold">Sequelize</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <PostgreSQL className="z-10" />
          </TechContainer>
          <span className="font-semibold">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <Git className="z-10" />
          </TechContainer>
          <span className="font-semibold">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <TechContainer>
            <Expo className="z-10" />
          </TechContainer>
          <span className="font-semibold">Expo</span>
        </div>
      </div>
    </div>
  )
}