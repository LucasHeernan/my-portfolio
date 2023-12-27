import pokemon1 from "../projectsImages/PokemonHome.png";
import pokemon2 from "../projectsImages/PokemonFilter.png";
import pokemon3 from "../projectsImages/PokemonDetail.png";
import portfolio1 from "../projectsImages/portfolio1.png";
import portfolio2 from "../projectsImages/portfolio2.png";
import portfolio3 from "../projectsImages/portfolio3.png";
import insta1 from "../projectsImages/InstaHome.png";
import insta2 from "../projectsImages/InstaNotification.png";
import insta3 from "../projectsImages/InstaContact.png";
import insta4 from "../projectsImages/InstaSearch.png";
import insta5 from "../projectsImages/InstaReel.png";
import insta6 from "../projectsImages/InstaProfile.png";
import instaVideo from "../instaVideo.mp4";
import dpower1 from "../projectsImages/DpowerHome.png";
import dpower2 from "../projectsImages/DpowerPost.png";
import dpower3 from "../projectsImages/DpowerMarket1.png";
import dpower4 from "../projectsImages/DpowerMarket2.png";
import dpower5 from "../projectsImages/DpowerMarket3.png";
import dpower6 from "../projectsImages/DpowerMarket4.png";
import dpower7 from "../projectsImages/DpowerMarket5.png";
import dpower8 from "../projectsImages/DpowerProfile.png";
import dpowerVideo from "../dpwVideo.mp4";

export const projectsData = [
  {
    id: 1,
    title: "Instagram clone",
    subtitle: "Explora la autenticidad visual de Instagram en este proyecto construido por completo con React Native.",
    description: "Esta aplicación es una réplica meticulosa, construida desde cero con React Native, estilos en CSS puro y compatible tanto con dispositivos Android como Apple, te llevará en un recorrido visual que te transportará instantáneamente a Instagram. Desde la pantalla de inicio con sus historias y notificaciones, pasando por las pantallas de busqueda y perfil de úsuario, hasta los reels.",
    description2: "Cada detalle recreado con precisión para ofrecer una experiencia auténtica con un toque original.",
    techs: ["Javascript", "React Native", "CSS"],
    images: [insta1, insta2, insta3, insta4, insta5, insta6, instaVideo],
    repository: "https://github.com/LucasHeernan/my-instagram",
    expo: "xp://exp.host/@lucasheernan/my-instagram?release-channel=default",
    android: "https://expo.dev/artifacts/eas/cJ1aEV64ifHJHNEhwdqpbA.apk",
    phone: true,
  },
  {
    id: 2,
    title: "Portfolio",
    subtitle: "Un portafolio web interactivo y responsivo construido con amor en React y estilizado con Tailwind.",
    description: "La idea detrás de este proyecto fue crear un sitio web que muestre en lo que he estado trabajando últimamente como desarrollador web Full-Stack, centrado en la experiencia del usuario.",
    description2: "Intenté mantener el diseño lo más simple posible, cuidando cada detalle para garantizar una navegación sencilla y agradable.",
    techs: ["Javascript", "React", "TailwindCSS", "Framer motion"],
    images: [portfolio1, portfolio2, portfolio3],
    repository: "https://github.com/LucasHeernan/my-portfolio",
    phone: false,
  },
  {
    id: 3,
    title: "Dpower App",
    subtitle: "Este proyecto adopta la forma de una red social sofisticada, desarrollada utilizando la tecnología móvil de React Native.",
    description: "Aplicación móvil estilo red social desarrollada con React Native que cuenta con: Autenticación de usuario proporcionada por Auth0. Pantalla de inicio donde se interactúa con publicaciones, expresando tus opiniones mediante comentarios y me gusta. Compartir imágenes directamente desde tu galería. Marketplace y pasarela de pago integrada a través de la plataforma Stripe.",
    description2: "El proyecto fue hecho en equipo bajo la metodología Scrum permitiéndonos planificar de manera efectiva, colaborar dinámicamente y responder rápidamente a los cambios y mejoras sugeridos, gestionando las tareas con Trello.",
    techs: ["React Native", "Redux", "Node", "Express", "Sequelize", "PostgreSQL"],
    images: [dpower1, dpower2, dpower3, dpower4, dpower5, dpower6, dpower7, dpower8, dpowerVideo],
    repository: "https://github.com/LucasHeernan/dpowerFront",
    youtube: "https://youtu.be/qzWMiKoslQw",
    phone: true,
  },
  {
    id: 4,
    title: "Pokedex",
    subtitle: "Desarrollo integral desde la estructura de bases de datos y la planificación de rutas hasta el diseño, gestionando el estado con Redux.",
    description: "Pokedex completa que te permite explorar el mundo de los Pokémon de manera eficiente y sin complicaciones. En este proyecto, me encargué tanto del front-end como del back-end, desde las rutas y la base de datos hasta el diseño, desarrollando código optimizado para garantizar un funcionamiento sin problemas, obteniendo los datos de la API de Pokémon.",
    description2: "Con esta Pokedex, puedes buscar, filtrar, ordenar y crear nuevos pokemones fácilmente.",
    techs: ["React", "Redux", "Node", "Express", "Sequelize", "PostgreSQL"],
    images: [pokemon1, pokemon2, pokemon3],
    repository: "https://github.com/LucasHeernan/PI-Pokemon",
    phone: false
  }
];
