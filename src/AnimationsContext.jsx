import { createContext, useContext, useState } from "react";

const AnimationList = createContext();
export const AnimationListProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <AnimationList.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationList.Provider>
  );
};
export const useAnimationList = () => useContext(AnimationList);


const AnimationNavBar = createContext();
export const AnimationNavBarProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <AnimationNavBar.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationNavBar.Provider>
  );
};
export const useAnimationNavBar = () => useContext(AnimationNavBar);


const AnimationFooter = createContext();
export const AnimationFooterProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <AnimationFooter.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationFooter.Provider>
  );
};
export const useAnimationFooter = () => useContext(AnimationFooter);


const AnimationText = createContext();
export const AnimationTextProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <AnimationText.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationText.Provider>
  );
};
export const useAnimationText = () => useContext(AnimationText);