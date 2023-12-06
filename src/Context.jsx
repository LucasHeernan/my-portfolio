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
















// const AnimationNavBar = createContext();
// export const AnimationNavBarProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationNavBar.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationNavBar.Provider>
//   );
// };
// export const useAnimationNavBar = () => useContext(AnimationNavBar);

// const AnimationTitle = createContext();
// export const AnimationTitleProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationTitle.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationTitle.Provider>
//   );
// };
// export const useAnimationTitle = () => useContext(AnimationTitle);

// const AnimationSubtitle = createContext();
// export const AnimationSubtitleProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationSubtitle.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationSubtitle.Provider>
//   );
// };
// export const useAnimationSubtitle = () => useContext(AnimationSubtitle);

// const AnimationText = createContext();
// export const AnimationTextProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationText.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationText.Provider>
//   );
// };
// export const useAnimationText = () => useContext(AnimationText);

// const AnimationProject = createContext();
// export const AnimationProjectProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationProject.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationProject.Provider>
//   );
// };
// export const useAnimationProject = () => useContext(AnimationProject);

// const AnimationList = createContext();
// export const AnimationListProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationList.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationList.Provider>
//   );
// };
// export const useAnimationList = () => useContext(AnimationList);

// const AnimationFooter = createContext();
// export const AnimationFooterProvider = ({ children }) => {
//   const [animation, setAnimation] = useState(false);
//   return (
//     <AnimationFooter.Provider value={{ animation, setAnimation }}>
//       {children}
//     </AnimationFooter.Provider>
//   );
// };
// export const useAnimationFooter = () => useContext(AnimationFooter);