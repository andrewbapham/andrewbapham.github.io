import { useState } from "react";
import Intro from "./assets/components/Intro";
import "./App.css";
import TransitionButton from "./assets/components/TransitionButton";
import SocialSidebar from "./assets/components/SocialSidebar";
import React from "react";
import About from "./assets/components/About";

function App() {
	//const [count, setCount] = useState(0);

	return (
		<div className="App">
			<section id="intro-page">
				<Intro />
				<TransitionButton target={"#about"} />
			</section>
			<section id="about">
				<About />
				<TransitionButton target={"#about"} />
			</section>

			<SocialSidebar />
		</div>
	);
}

export default App;
