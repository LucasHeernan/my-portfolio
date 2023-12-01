import { createContext, useContext, useState } from "react";

// const AnimationsContext = createContext();
// export const AnimationsProvider = ({ children }) => {
//   const [animations, setAnimations] = useState(false);
//   const data = { animations, setAnimations };
//   return <AnimationsContext.Provider value={data}>{children}</AnimationsContext.Provider>;
// };
// export default AnimationsContext;


const AnimationsContext = createContext();

export const AnimationsProvider = ({ children }) => {
  const [animationsCompleted, setAnimationsCompleted] = useState(false);

  return (
    <AnimationsContext.Provider value={{ animationsCompleted, setAnimationsCompleted }}>
      {children}
    </AnimationsContext.Provider>
  );
};

export const useAnimationsContext = () => useContext(AnimationsContext);