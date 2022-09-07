import { useState } from "react";
import Intro from "./assets/components/Intro";
import "./App.css";
import TransitionButton from "./assets/components/TransitionButton";
import SocialSidebar from "./assets/components/SocialSidebar";
import React from "react";
import About from "./assets/components/About";
import Experience from "./assets/components/Experience";
import Projects from "./assets/components/Projects";
import NavBar from "./assets/components/NavBar";

function App() {
	//const [count, setCount] = useState(0);

	return (
		<div className="App">
			<NavBar />

			<section id="intro-page">
				<Intro />
				<TransitionButton target={"#about"} />
			</section>
			<section id="about">
				<About />
				<TransitionButton target={"#experience"} />
			</section>
			<section id="experience">
				<Experience />
				<TransitionButton target={"#projects"} />
			</section>
			<section id="projects">
				<Projects />
				<TransitionButton target={"#experience"} />
			</section>

			<SocialSidebar />
		</div>
	);
}

export default App;
