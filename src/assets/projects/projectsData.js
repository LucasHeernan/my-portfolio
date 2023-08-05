import pokemon1 from "../projectsImages/PokemonHome.png";
import pokemon2 from "../projectsImages/PokemonFilter.png";
import pokemon3 from "../projectsImages/PokemonDetail.png";
import insta1 from "../projectsImages/InstaHome.png";
import insta2 from "../projectsImages/InstaNotification.png";
import insta3 from "../projectsImages/InstaContact.png";
import insta4 from "../projectsImages/InstaSearch.png";
import insta5 from "../projectsImages/InstaReel.png";
import insta6 from "../projectsImages/InstaProfile.png";
import dpower1 from "../projectsImages/DpowerHome.png";
import dpower2 from "../projectsImages/DpowerPost.png";
import dpower3 from "../projectsImages/DpowerMarket1.png";
import dpower4 from "../projectsImages/DpowerMarket2.png";
import dpower5 from "../projectsImages/DpowerMarket3.png";
import dpower6 from "../projectsImages/DpowerMarket4.png";
import dpower7 from "../projectsImages/DpowerMarket5.png";
import dpower8 from "../projectsImages/DpowerProfile.png";

export const projectsData = [
  {
    title: "Instagram clone",
    description: "Proyecto que replica la interfaz visual de Instagram en la se puede hacer un recorrido por todas las pantallas y ver lo similar que es al original. La aplicación fue construida completamente con React Native.",
    techs: ["React Native", "CSS"],
    images: [insta1, insta2, insta3, insta4, insta5, insta6],
    repository: "https://github.com/LucasHeernan/my-instagram",
    phone: true,
  },
  {
    title: "Portfolio",
    description: "",
    techs: ["ReactJS", "TailwindCSS"],
    images: [pokemon1, pokemon2, pokemon3],
    repository: "https://github.com/LucasHeernan/my-portfolio",
    phone: false,
  },
  {
    title: "Dpower App",
    description: "Aplicación móvil estilo red social hecha con React Native con funcionalidades de Autentificación, MarketPlace, Pasarela de pago, publicar desde galería, entre otras",
    techs: ["React Native", "Redux", "NodeJS", "Express", "Sequelize", "PostgreSQL"],
    images: [dpower1, dpower2, dpower3, dpower4, dpower5, dpower6, dpower7, dpower8],
    repository: "https://github.com/LucasHeernan/dpowerFront",
    phone: true,
  },
  {
    title: "Poke App",
    description: "Diseñar y desarrollar una App de pokemon que incluía: búsquedas, filtrados combinados, ordenamientos y creación",
    techs: ["ReactJS", "Redux", "NodeJS", "Express", "Sequelize", "PostgreSQL"],
    images: [pokemon1, pokemon2, pokemon3],
    repository: "https://github.com/LucasHeernan/PI-Pokemon",
    phone: false
  }
]