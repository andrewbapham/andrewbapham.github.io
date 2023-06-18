import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./component-styles/Intro.css";
import RotatingWords from "./RotatingWords";

function Intro() {
  const text =
    "I'm a passionate software engineering student at the University of Ottawa, who loves building interactive and exciting websites.\n\n Click below to see some of my work.";

  return (
    <div className="title">
      <div>
        <h1>Hi, my name is</h1>
        <h1>Andrew Pham.</h1>
      </div>
      <TypeAnimation
        sequence={[
          "I'm a developer",
          800,
          "I'm a designer",
          800,
          "I'm a student",
          400,
          "I'm a ",
          1500,
          text,
        ]}
        wrapper="p"
        cursor={true}
        className="sub-description"
      />
    </div>
  );
}

export default Intro;
