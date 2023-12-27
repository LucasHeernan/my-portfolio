import { createContext, useContext, useState, useEffect } from "react";
import { projectsData } from "./assets/projects/projectsData";


const Animations = createContext();

export const AnimationsProvider = ({ children }) => {

  const [navBar, setNavBar] = useState(false);
  const [home, setHome] = useState(false);
  const [text, setText] = useState(false);
  const [card, setCard] = useState(false);
  const [list, setList] = useState(false);
  const [footer, setFooter] = useState(false);
  const [projectsInfo, setProjectsInfo] = useState(projectsData);

  return (
    <Animations.Provider value={{ navBar, setNavBar, home, setHome, text, setText, card, setCard, list, setList, footer, setFooter, projectsInfo }}>
      {children}
    </Animations.Provider>
  );
};

export const useAnimations = () => useContext(Animations);
