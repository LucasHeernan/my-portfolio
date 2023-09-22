import React from "react";
import AnimatedContainer from "../Home/AnimatedContainer";

export default function () {

  return (
    <footer className="mt-10 leading-5 text-center font-['Montserrat']">
      <h4 className="text-[#CACACA] text-xl font-bold mb-0.5">Let's talk</h4>
      <p className="text-[#8A8A8A] text-base leading-6">
        Wanna get in touch or talk about a project?
        <br />
        Feel free to contact me via email at <AnimatedContainer words={"lhbenitez2@gmail.com"} a={"lhbenitez2@gmail.com"} />
        <br />
        or drop a line in the form at the <AnimatedContainer words={"contact section"} />
      </p>
    </footer>
  )
}
// Wanna get in touch or talk about a project?
// Feel free to contact me via email at
// rafael@caferati.me
// or drop a line in the form at the
// contact page