import React from "react";

export default function ContactTwo () {


  return (
    <div className="w-full h-screen cursor-default bg-[#1B1C32]">
      <div className="max-w-7xl w-full h-full mx-auto px-5 flex flex-col bg-white">
        <h2 className="text-2xl font-bold pt-14 tracking-widest uppercase sm:text-3xl md:pt-16 lg:text-4xl">Contact</h2>
        <p className="text-base font-normal md:pt-1 lg:text-lg lg:font-normal lg:pr-20">Don't hesitate to give me a shout on potential projects, collaboration, or just to say hi.</p>
        <section className="flex flex-col items-center bg-amber-200">
          
          <div className="relative w-full my-3 overflow-hidden rounded-sm">
            <input
              className="w-full py-3 px-5 text-base font-medium focus:outline-none peer/contact"
              type="text"
              placeholder="Name"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </div>
          <div className="relative w-full my-3 overflow-hidden rounded-sm">
            <input
              className="w-full py-3 px-5 text-base font-medium focus:outline-none peer/contact"
              type="email"
              placeholder="Email Address"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </div>
          
          <div className="w-full relative my-3 overflow-hidden rounded-sm">
            <input
              className="w-full py-3 px-5 text-base font-medium focus:outline-none peer/contact"
              type="text"
              placeholder="Subject"
            />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </div>
          
          <div className="relative w-full my-3 overflow-hidden rounded-sm">
            <textarea className="w-full p-3 px-5 text-base font-medium focus:outline-none peer/contact" name="Message" placeholder="Message" rows="6" />
            <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 peer-focus/contact:w-full" />
          </div>
          <button className="self-center w-2/5 my-3 py-3 text-base text-gray-600 border-2 border-gray-600 rounded-xl font-semibold" type="submit">Send Message</button>
          
        </section>
      </div>
    </div>
  )
}