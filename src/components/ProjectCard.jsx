import React, { useState } from "react";

export default function ProjectCard({ title, description, techs, images }) {

  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    const isFirstImg = currentImg === 0;
    const newIndex = isFirstImg ? images.length - 1 : currentImg - 1;
    setCurrentImg(newIndex);
  };

  const nextImg = () => {
    const isLastImg = currentImg === images.length - 1;
    const newIndex = isLastImg ? 0 : currentImg + 1;
    setCurrentImg(newIndex);
  }

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-black">
      {/* <div
        style={{ backgroundImage: `url(${images[currentImg]})` }}
        alt="image"
        // className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        className="absolute w-full h-full bg-center bg-contain bg-no-repeat duration-500 opacity-75 transition-opacity group-hover:opacity-20"
      /> */}
      <img
        src={images[currentImg]}
        alt="image"
        className="absolute w-full h-full object-contain duration-500 opacity-75 transition-opacity group-hover:opacity-20"
      />
      <button className="hidden group-hover:block group-hover:z-50 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <span onClick={prevImg} className="text-xl">&lt;</span>
      </button>
      <button className="hidden group-hover:block group-hover:z-50 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <span onClick={nextImg} className="text-xl">&gt;</span>
      </button>
      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p> */}
        <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-4 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
            <div className="flex mt-1">
              {
                techs.map(el => {
                  return <span className="bg-teal-900 p-2 rounded-md mr-2 text-white text-sm font-semibold">{el}</span>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}