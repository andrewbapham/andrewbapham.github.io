import React from "react";
import "./component-styles/TransitionButton.css";
import { motion } from "framer-motion";

function TransitionButton(props: { target: string; className: string }) {
  const target: string = props.target;
  const className: string = props.className;

  return (
    <div className={className + " transition-button"}>
      <a href={target}>
        <motion.button
          initial={{
            backgroundColor: "#2a2d3d",
          }}
          whileHover={{
            scale: 1.3,
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="arrow-svg"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
          </svg>
        </motion.button>
      </a>
    </div>
  );
}

TransitionButton.defaultProps = {
  target: "",
  className: "",
};

export default TransitionButton;
