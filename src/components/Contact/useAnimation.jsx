import { useEffect } from "react";
import { useInView, useAnimate, stagger } from "framer-motion";

export default function useAnimation() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  // const isInView = useInView(scope, { once: true });

  useEffect(() => {
    isInView ?
    animate([
      [ "ul", { opacity: 1 }, { ease: [0.17, 0.55, 0.55, 1], duration: 1 } ],
      [ "a", { transform: "translateY(0)", opacity: 1 }, { delay: stagger(0.3), ease: [0.17, 0.55, 0.55, 1], duration: 1 } ]
    ]) :
    animate([
      [ "ul", { opacity: 0 } ],
      [ "a", { transform: "translateY(25px)", opacity: 0 } ]
    ])
  }, [isInView])

  return scope;
};