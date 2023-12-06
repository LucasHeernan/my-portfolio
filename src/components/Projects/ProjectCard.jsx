import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pokemonImg from "../../assets/projectsImages/PokemonHome.png";

const techAnimations = {
  initial: {
    opacity: 0,
    scaleY: 0,
    scaleX: 0,
    y: -5,
    x: -30
  },
  animate: (index) => ({
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.15 * index,
      duration: 0.2
    }
  })
};

export default function ProjectCard({ id, title, description, techs, image, repository, phone, curr }) {

  const [more, setMore] = useState();
  const carouselRef = useRef(null);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none)").matches;
    isMobile ? setMobile(true) : setMobile(false);
  }, []);

  const updateCarouselWidth = () => {
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    setCurrentWidth(carouselWidth);
  };

  useEffect(() => {
    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);
    return () => {
      window.removeEventListener("resize", updateCarouselWidth);
    };
  }, []);

  const handleHover = () => {
    setMore(false);
    setTimeout(() => {
      setMore(true);
    }, 800);
  };

  const handleLeave = () => setMore(false);
  
  return (
    <article
      className="relative w-full h-full md:h-[calc(100%-24px)] flex shrink-0 transition-transform ease-in-out duration-700"
      ref={carouselRef}
      style={{ transform: `translateX(-${curr * currentWidth}px)` }}
    >
      <div className="absolute flex inset-y-4 pb-4 md:inset-y-5 md:px-3 md:pb-3 lg:inset-x-14 xl:inset-x-16">
        <div className="hidden absolute left-6 top-3 w-[calc(100%-24px)] h-[calc(100%-12px)] bg-slate-700 dark:bg-slate-950 md:block"/>
        <div className="w-full h-full flex z-10 overflow-hidden md:shadow-lg md:shadow-black">
          {
            !mobile ? (
              <Link
                to={`/${id}`}
                className="relative w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-sm shadow-md shadow-black group md:w-[45%] md:h-full md:rounded-none md:shadow-none lg:pl-3 lg:pt-1 bg-gradient-to-l from-teal-300 via-teal-400 to-teal-500 dark:from-teal-300 dark:via-teal-200 dark:to-teal-100
                before:absolute before:-z-10 before:top-2 before:left-2 before:w-full before:h-full before:rounded-sm before:bg-slate-700 sm:before:top-3 sm:before:left-3 md:before:hidden"
                // className="relative w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-sm shadow-md shadow-black group md:w-[45%] md:h-full md:rounded-none md:shadow-none lg:pl-3 lg:pt-1 bg-gradient-to-l from-indigo-300 via-indigo-400 to-indigo-500 dark:from-indigo-300 dark:via-indigo-200 dark:to-indigo-100
                // before:absolute before:-z-10 before:top-2 before:left-2 before:w-full before:h-full before:rounded-sm before:bg-slate-700 sm:before:top-3 sm:before:left-3 md:before:hidden"
              >
                <h3 className="absolute top-0 left-1 px-3 py-3 sm:left-4 z-10 text-xl font-semibold uppercase text-black dark:text-indigo-200 sm:text-[22px] sm:font-bold sm:py-6 transition-all duration-300 ease-linear md:hidden">{title}</h3>
                <h3 className="absolute -top-[2px] left-0.5 px-3 py-3 sm:left-4 z-10 text-xl font-semibold uppercase text-indigo-200 dark:text-black sm:text-[22px] sm:font-bold sm:py-6 transition-all duration-300 ease-linear md:hidden">{title}</h3>
                <img src={image} alt="pepe" className={`w-full h-full object-contain ${phone ? "py-4" : "px-2"}`}/>
                {/* <img src={pokemonImg} alt="pepe" className={`w-full h-full invisible object-contain ${phone ? "py-4" : "px-2"}`}/> */}
                {/* <img src={image} alt="pepe" className={`w-full h-full object-contain ${phone ? "py-4" : "px-2"} blur-0 transition-all duration-300 ease-linear group-hover:blur-[1px] md:group-hover:blur-0`}/> */}
              </Link>
            ) : (
              <section
                className="relative w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-sm shadow-md shadow-black group md:w-[45%] md:h-full md:rounded-none md:shadow-none lg:pl-3 lg:pt-1 bg-gradient-to-l from-indigo-300 via-indigo-400 to-indigo-500 dark:from-indigo-300 dark:via-indigo-200 dark:to-indigo-100
                before:absolute before:-z-10 before:top-2 before:left-2 before:w-full before:h-full before:rounded-sm before:bg-slate-700 sm:before:top-3 sm:before:left-3 md:before:hidden"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <h3 className="absolute top-0 left-1 px-3 py-3 sm:left-4 z-10 text-xl font-semibold uppercase text-[#cacaca] sm:text-[22px] sm:font-bold sm:py-6 blur-0 transition-all duration-300 ease-linear group-hover:blur-[1px] group-hover:hidden md:hidden">{title}</h3>
                <h3 className="absolute -top-[2px] left-0.5 px-3 py-3 sm:left-4 z-10 text-xl font-semibold uppercase text-black sm:text-[22px] sm:font-bold sm:py-6 blur-0 transition-all duration-300 ease-linear group-hover:blur-[1px] group-hover:text-[#fff] md:hidden">{title}</h3>
                <Link to={`/${id}`}>
                  <img src={image} alt="pepe" className={`w-full h-full object-contain ${phone ? "py-4" : "px-2"} blur-0 transition-all duration-200 ease-linear group-hover:blur-[1px] md:group-hover:blur-0 group-hover:scale-105`}/>
                </Link>
                <div className="absolute w-full h-full -top-full opacity-100 transition-all duration-200 ease-in-out bg-slate-700/50 group-hover:top-0 md:group-hover:hidden"/>

                <div className="absolute block top-0 left-0 right-0 mx-auto w-4/5 h-0 sm:w-1/2 group-hover:h-full md:group-hover:hidden">
                  <div className="hidden relative w-full h-full group-hover:flex group-hover:items-center">
                    <ul className="block text-center relative font-poppins">
                      {
                        techs.map((el, index) => {
                          return (
                            <motion.li
                              key={index}
                              variants={techAnimations}
                              initial="initial"
                              whileInView="animate"
                              custom={index}
                              className="inline-block p-1 bg-[#313131] text-[#cacaca] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.50)] mx-2 relative overflow-hidden box-border
                              before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                              after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                            >
                              <span className="relative z-20">{el}</span>
                            </motion.li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>

                <div className={`hidden absolute bottom-10 left-[calc(50%-45px)] z-10 ${more ? "group-hover:block" : "" } group-hover:animate-bounceInUp md:group-hover:hidden`}>
                  <Link
                    to={`/${id}`}
                    className="inline-block p-1 bg-[#313131] text-[#cacaca] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded uppercase font-semibold text-sm shadow-md shadow-[rgba(0,0,0,.55)] ml-2 relative overflow-hidden box-border cursor-pointer
                    before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                    after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
                  >
                    <span className="relative z-20 font-poppins">ver más</span>
                  </Link>
                </div>
              </section>
            )
          }

          <section className={`hidden md:flex w-[55%] h-full flex-col justify-evenly py-10 text-[#2a2a2a] ${!phone ? "md:pl-5" : ""} lg:pl-8 lg:py-5 bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100 dark:from-indigo-300 dark:via-indigo-400 dark:to-indigo-500`}>
            <h3 className="uppercase md:text-2xl md:font-semibold lg:text-3xl">{title}</h3>
            <p className="text-base font-normal pr-4 line-clamp-3 lg:pr-10 lg:font-medium xl:text-lg">{description}</p>
            <div className="w-full flex font-poppins">
              <Link
                to={`/${id}`}
                className="inline-block px-3 py-1 bg-[#313131] text-[#cacaca] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-[15px] tracking-wider shadow-md shadow-[rgba(0,0,0,.50)] mr-7 relative overflow-hidden cursor-pointer
                before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
              >
                <span className="relative z-20">ver más</span>
              </Link>
              <a
                href={repository}
                target="_blank"
                className="inline-block px-3 py-1 bg-[#313131] text-[#cacaca] border-solid border-t-[1px] border-r-2 border-b-[3px] border-l-[1px] border-[#222] rounded-sm uppercase font-semibold text-[15px] tracking-wider shadow-md shadow-[rgba(0,0,0,.50)] relative overflow-hidden cursor-pointer
                before:bg-[#515151] before:top-0 before:left-0 before:w-0 before:h-1/2 hover:before:w-full before:block before:absolute before:z-10 before:duration-200 before:ease-in-out
                after:bg-[#3f3f3f] after:bottom-0 after:right-0 after:w-0 after:h-1/2 hover:after:w-full after:block after:absolute after:z-10 after:transition-all after:duration-200 after:ease-in-out after:delay-100"
              >
                <span className="relative z-20">repositorio</span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </article>
  )
};