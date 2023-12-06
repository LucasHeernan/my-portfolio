import { createContext, useContext, useState } from "react";


const Animations = createContext();

export const AnimationsProvider = ({ children }) => {

  const [navBar, setNavBar] = useState(false);
  const [title, setTitle] = useState(false);
  const [home, setHome] = useState(false);
  const [text, setText] = useState(false);
  const [card, setCard] = useState(false);
  const [list, setList] = useState(false);
  const [footer, setFooter] = useState(false);

  return (
    <Animations.Provider value={{ navBar, setNavBar, title, setTitle, home, setHome, text, setText, card, setCard, list, setList, footer, setFooter }}>
      {children}
    </Animations.Provider>
  );
};

export const useAnimations = () => useContext(Animations);
