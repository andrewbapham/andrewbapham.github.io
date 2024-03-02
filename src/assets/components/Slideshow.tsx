import React from "react";
import { useState, useEffect } from "react";
import "./component-styles/Slideshow.css";
import { motion } from "framer-motion";

const Slideshow = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [index, setIndex] = useState(0);
  const changeIndex = (change: number) => () => {
    let newIndex = index + change;
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => clearInterval(interval);
  }, []);*/

  //use children as slides
  return (
    <div className="slideshow">
      <div
        className="slider"
        style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
      >
        {React.Children.map(children, (child, i) => {
          return (
            <div className="slide-element" key={i}>
              {child}
            </div>
          );
        })}
      </div>
      <div className="slide-dots">
        <motion.button
          initial={{
            backgroundColor: "#2a2d3d",
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={changeIndex(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="arrow-svg arrow-svg-left"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
          </svg>
        </motion.button>
        {React.Children.map(children, (child, i) => {
          return (
            <div
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
              key={`button${i}`}
            ></div>
          );
        })}
        <motion.button
          initial={{
            backgroundColor: "#2a2d3d",
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={changeIndex(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="arrow-svg arrow-svg-right"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Slideshow;
