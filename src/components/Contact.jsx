import React from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact-animation.json";

export default function ContactHand() {

  return (
    <div className="w-full py-4 px-2 max-w-7xl mx-auto bg-fuchsia-100 md:h-screen">
      <div className="md:flex md:w-full md:h-full">
        <section className="md:w-[55%] xl:w-3/5">
          <h2 className="text-[27px] font-['Poppins'] font-black pl-7 py-1 lg:pl-14">Contact</h2>
          <Lottie className="mb-12 md:mb-0 md:mt-24 lg:mt-16 xl:mt-10" animationData={contactAnimation} />
        </section>
        <section className="flex flex-col items-center md:justify-center md:w-[45%] xl:w-2/5">
          <div className="w-5/6 sm:flex sm:justify-between md:flex-col md:w-11/12 lg:flex lg:flex-row lg:justify-between">
            <div className="relative w-full mb-6 overflow-hidden border-2 border-gray-600 rounded-xl sm:my-3 sm:w-[47%] md:w-full lg:w-[47%]">
              <input
                className="w-full py-3 px-5 text-base font-medium focus:outline-none peer/contact"
                type="text"
                placeholder="Name"
              />
              <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
            </div>
            <div className="relative w-full my-3 overflow-hidden border-2 border-gray-600 rounded-xl sm:w-1/2 md:w-full lg:w-1/2">
              <input
                className="w-full py-3 px-5 text-base font-medium focus:outline-none peer/contact"
                type="email"
                placeholder="Email Address"
              />
              <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
            </div>
          </div>
          <div className="relative w-5/6 my-3 overflow-hidden border-2 border-gray-600 rounded-xl md:w-11/12">
            <input
              className="w-full py-3 px-5 text-base font-medium focus:outline-none peer/contact"
              type="text"
              placeholder="Subject"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </div>
          <div className="flex flex-col w-5/6 md:w-11/12">
            <div className="relative w-full my-3 overflow-hidden border-2 border-gray-600 rounded-xl">
              <textarea className="w-full p-3 px-5 text-base font-medium focus:outline-none peer/contact" name="Message" placeholder="Message" rows="6" />
              <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
            </div>
            <button className="self-center w-2/5 my-3 py-3 text-base text-gray-600 border-2 border-gray-600 rounded-xl font-semibold md:self-end" type="submit">Send Message</button>
          </div>
        </section>
      </div>
    </div>
  )
}