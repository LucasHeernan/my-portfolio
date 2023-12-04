import { useEffect, useRef } from "react";
import { useInView, useAnimate, stagger } from "framer-motion";
import { useAnimationList, useAnimationFooter, useAnimationNavBar, useAnimationText } from "../../AnimationsContext";

export function useMenu(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    isOpen ?
    animate([
      [ "nav", { transform: "translateY(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 } ],
      [ "a", { transform: "scaleX(1) scaleY(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05) } ]
    ]) :
    animate([
      [ "a", { transform: "scaleX(0) scaleY(0)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }) } ],
      [ "nav", { transform: "translateY(-100%)" } ]
    ])
  }, [isOpen]);

  return scope;
};

export function useList({ first, second }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { animation, setAnimation } = useAnimationList();

  useEffect(() => {
    isInView && animation ?
    animate([
      [ first, { opacity: 1 } ]
    ]) : !isInView && !animation ?
    animate([
      [ first, { opacity: 0 } ],
      [ second, { transform: "translateY(25px)", opacity: 0 } ]
      ]) :
    (animate([
    [ first, { opacity: 1 }, { ease: [0.17, 0.55, 0.55, 1] } ],
    [ second, { transform: "translateY(0px)", opacity: 1 }, { delay: stagger(0.3), ease: [0.17, 0.55, 0.55, 1], duration: 0.75 } ]
    ]), setAnimation(true));

  }, [isInView, animation]);

  return scope;
};

export function useFooter({ first }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { animation, setAnimation } = useAnimationFooter();

  // Sí isInView && animation ??? opacity: 1 -----> QUIETO
  // Sí !isInView && !animation ??? opacity: 0 ---> INVISIBLE
  // Sí isInView && !animation ??? opacity: 1 ---> ANIMACIÓN

  useEffect(() => {
    isInView && animation ? animate([[ first, { opacity: 1, transform: "translateY(0px)" }, { delay: 0.3, ease: [0.17, 0.55, 0.55, 1], duration: 0.4 } ]]) :
    !isInView && !animation ? animate([[ first, { opacity: 0, transform: "translateY(10px)" } ]]) :
    setAnimation(true);

  }, [isInView, animation]);

  return scope;
};

export function useText({ first }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { animation, setAnimation } = useAnimationText();

  useEffect(() => {
    isInView && animation ? animate([[ first, { opacity: 1, transform: "translateY(0px)" }, { delay: 0.3, ease: [0.17, 0.55, 0.55, 1], duration: 0.7 } ]]) :
    !isInView && !animation ? animate([[ first, { opacity: 0, transform: "translateY(25px)" } ]]) :
    setAnimation(true);

  }, [isInView, animation]);

  return scope;
};

























export function Text({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        {children}
      </div>
    </section>
  )
};
