import React from "react";
import Carousel from "./Carousel";
import pokemon from "../assets/projectsImages/PokemonHome.png";
import insta from "../assets/projectsImages/InstaHome.png";
import dpower from "../assets/projectsImages/DpowerHome.png";
import portfolio from "../assets/projectsImages/PokemonDetail.png";

const slides = [ pokemon, insta, dpower, portfolio ];

export default function ProjectsTwo() {

  return (
    <section className="w-full h-screen bg-red-300">
      <div className="max-w-7xl mx-auto">
      <Carousel>
        {
          slides.map((s) => (
            <img src={s} alt="pepe" />
          ))
        }
      </Carousel>
      </div>
    </section>
  )
}