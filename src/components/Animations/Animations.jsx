import { useEffect } from "react";
import { useInView, useAnimate, stagger } from "framer-motion";
import { useAnimations } from "../../Context";

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

export function useText({ first, delay }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { text, setText } = useAnimations();

  useEffect(() => {
    isInView && text ? animate([[ first, { opacity: 1, transform: "translateY(0px)" }, { delay: delay, ease: [0.17, 0.55, 0.55, 1], duration: 0.7 } ]]) :
    !isInView && !text ? animate([[ first, { opacity: 0, transform: "translateY(25px)" } ]]) :
    setText(true);

  }, [isInView, text]);

  return scope;
};

export function useProject({ work }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { card, setCard } = useAnimations();

  useEffect(() => {
    isInView && card ? animate([[ work, { transform: "translateY(0px)", opacity: 1 }, { delay: 0.2, ease: [0.17, 0.55, 0.55, 1], duration: 0.5 } ]]) :
    !isInView && !card ? animate([[ work, { transform: "translateY(15px)", opacity: 0 } ]]) :
    setCard(true);

  }, [isInView, card]);

  return scope;
};

export function useList({ first, second }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { list, setList } = useAnimations();

  useEffect(() => {
    isInView && list ?
    animate([
      [ first, { opacity: 1 } ]
    ]) : !isInView && !list ?
    animate([
      [ first, { opacity: 0 } ],
      [ second, { transform: "translateY(25px)", opacity: 0 } ]
      ]) :
    (animate([
    [ first, { opacity: 1 }, { ease: [0.17, 0.55, 0.55, 1] } ],
    [ second, { transform: "translateY(0px)", opacity: 1 }, { delay: stagger(0.3), ease: [0.17, 0.55, 0.55, 1], duration: 0.75 } ]
    ]), setList(true));

  }, [isInView, list]);

  return scope;
};

export function useFooter({ down }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { footer, setFooter } = useAnimations();

  useEffect(() => {
    isInView && footer ? animate([[ down, { opacity: 1, transform: "translateY(0px)" }, { delay: 0.3, ease: [0.17, 0.55, 0.55, 1], duration: 0.4 } ]]) :
    !isInView && !footer ? animate([[ down, { opacity: 0, transform: "translateY(10px)" } ]]) :
    setFooter(true);

  }, [isInView, footer]);

  return scope;
};


export function useHome({ top }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const { title, setTitle } = useAnimations();

  useEffect(() => {
    isInView ? animate([ top, { opacity: 1 } ]) : setTitle(true);
    // isInView && title ? animate([ top, { opacity: 1 } ]) :
    // !isInView && !title ? animate([ top, { opacity: 0 } ]) :
    // setTitle(true);

  }, [isInView, title]);

  return scope;
};
