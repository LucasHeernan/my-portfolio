import { createContext, useContext, useState } from "react";

const AnimationsContext = createContext();
const AnimationNavBar = createContext();

export const AnimationsProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <AnimationsContext.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationsContext.Provider>
  );
};
export const useAnimationsContext = () => useContext(AnimationsContext);


export const AnimationNavBarProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <AnimationNavBar.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationNavBar.Provider>
  );
};
export const useAnimationNavBar = () => useContext(AnimationNavBar);