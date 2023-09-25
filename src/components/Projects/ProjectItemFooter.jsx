import React from "react";
import AnimatedContainer from "../Home/AnimatedContainer";

export default function () {

  return (
    <footer className="pt-20 text-center font-['Montserrat']">
      <h4 className="text-[#2a2a2a] dark:text-[#CACACA] text-xl font-bold mb-0.5">Let's talk</h4>
      <p className="text-[#2a2a2a] dark:text-[#8A8A8A] text-base font-medium">
        Wanna get in touch or talk about a project?
        <br />
        Feel free to contact me via email at <AnimatedContainer words={"lhbenitez2@gmail.com"} />
        <br />
        or drop a line in the form at the <AnimatedContainer words={"contact section"} />
      </p>
    </footer>
  )
}
