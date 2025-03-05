import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import "./App.css";
import TransitionButton from "./components/TransitionButton";
import SocialSidebar from "./components/SocialSidebar";
import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  const blur = {
    filter: "blur(5px) brightness(0.7);",
  };
  const [navExpanded, setNavExpanded] = useState(false);
  function handleNavClick(): void {
    let val: boolean = !navExpanded;
    setNavExpanded(val);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        console.log("close menu");
        setNavExpanded(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavBar handleNavClick={handleNavClick} navExpanded={navExpanded} />
      <div className="App">
        <main className={navExpanded ? "blur" : ""}>
          <div id="content">
            <section id="intro-page">
              <Intro />
              <TransitionButton target={"#about"} />
            </section>
            <section id="about">
              <About />
              {/* <TransitionButton target={"#experience"} /> */}
            </section>
            <section id="experience">
              <Experience />
              {/* <TransitionButton target={"#projects"} /> */}
            </section>
            <section id="projects">
              <Projects />
              {/* <TransitionButton
                className="bottom-transition"
                target={"#intro-page"}
              /> */}
            </section>

            <SocialSidebar />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
