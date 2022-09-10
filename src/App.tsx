import { useEffect, useState } from "react";
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
		<div className="App">
			<NavBar handleNavClick={handleNavClick} navExpanded={navExpanded} />
			<main className={navExpanded ? "blur" : ""}>
				<div id="content">
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
						<TransitionButton
							className="bottom-transition"
							target={"#intro-page"}
						/>
					</section>

					<SocialSidebar />
				</div>
			</main>
		</div>
	);
}

export default App;
