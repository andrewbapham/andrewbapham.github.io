import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./component-styles/Intro.css";

function Intro() {
  const text =
    "I'm a passionate computer science student at the University of Ottawa, who loves learning about technology and building exciting and scalable applications.\n\n Click below to see some of my work.";

  return (
    <div className="title">
      <div>
        <h1>Hi, my name is</h1>
        <h1>Andrew Pham.</h1>
      </div>
      <div>
        <p id="intro-text">
          I'm a passionate computer science student at the University of Ottawa,
          who loves learning about technology and building exciting and scalable
          applications. <br />
          Click below to see some of my work.
        </p>
        <span>
          {/* <TypeAnimation
            preRenderFirstString={true}
            speed={50}
            sequence={[text]}
            cursor={true}
            className="sub-description"
          /> */}
        </span>
      </div>
    </div>
  );
}

export default Intro;
