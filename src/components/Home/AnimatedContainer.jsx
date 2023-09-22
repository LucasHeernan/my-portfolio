import React from "react";

export default function AnimatedContainer({ words, a }) {

  return (
    <span className="inline-block relative box-border
      before:bg-[#515151] before:absolute before:left-0 before:top-0 before:h-1/2 before:w-0 before:transition-all before:duration-300 before:ease-in-out before:z-10 hover:before:w-full
      after:bg-[#3f3f3f] after:absolute after:right-0 after:bottom-0 after:h-1/2 after:w-0 after:transition-all after:duration-300 after:ease-in-out after:delay-100 after:z-10 hover:after:w-full"
    >
      {
        a ? <a href="mailto:lhbenitez2@gmail.com" target="_blank" className="relative block z-20 text-[#9A9A9A] font-bold">{words}</a> :
        <span className="relative block z-20 text-[#9A9A9A] font-bold">{words}</span>
      }
    </span>
  )
}
