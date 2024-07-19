import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./component-styles/Intro.css";
import RotatingWords from "./RotatingWords";

function Intro() {
  const text =
    "I'm a passionate computer science student at the University of Ottawa, who loves learning about technology and building exciting and scalable applications.\n\n Click below to see some of my work.";

  return (
    <div className="title">
      <div>
        <h1>Hi, my name is</h1>
        <h1>Andrew Pham.</h1>
      </div>
      <TypeAnimation
        speed={50}
        sequence={[text]}
        wrapper="p"
        cursor={true}
        className="sub-description"
      />
    </div>
  );
}

export default Intro;
