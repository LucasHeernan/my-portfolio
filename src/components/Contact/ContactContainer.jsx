import React, { useState } from "react";
import ThemeSwitcher from "../../ThemeSwitcher";

export default function ContactContainer({ children }) {

  const [mode, setMode] = ThemeSwitcher();
  const [fill, setFill] = useState("black");

  return (
    <>
      { mode === "dark" ?
        (
          setFill("white"),
          React.cloneElement(children, { fill: fill })
        )
        :
        (
          setFill("black"),
          React.cloneElement(children, { fill: fill })
        )
      }
    </>
  );
}
// { mode === "dark" ? <Sun className={"text-white"} /> : <Moon className={"text-white"} /> }