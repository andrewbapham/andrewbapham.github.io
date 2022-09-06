import { motion } from "framer-motion";
import React from "react";
import "./component-styles/About.css";
import Experience from "./Experience";

function About() {
	return (
		<div className="about-section">
			<div className="about about-content">
				<h1 className="section-header">About me</h1>
				<div className="about-inner">
					<div>
						<p>
							Hey! My name is Andrew and I'm a software engineering student at
							the University of Ottawa who enjoys designing, creating and
							maintaining websites! I've always had an interest in computers and
							technology, but my coding journey began back in 2016, when I first
							discovered Python. I followed some tutorials in preparation for my
							high school computer science classes and really enjoyed the
							challenges that coding gave, and the ability to express my
							creativity!
						</p>
						<p>
							Since then, I've played around with game development with C# and
							Unity, building physical projects using Arduino and am now focused
							on full-stack web development. I believe the possibilities are
							endless with the internet and I enjoy creating value for producers
							and consumers through websites.
						</p>
						<p>Recenntly, I've been working with: </p>
						<ul>
							<li>
								<span className="list-text">JavaScript</span>
							</li>
							<li>
								<span className="list-text">React.js</span>
							</li>
							<li>
								<span className="list-text">TypeScript</span>
							</li>
							<li>
								<span className="list-text">Python</span>
							</li>
							<li>
								<span className="list-text">Vue.js</span>
							</li>
							<li>
								<span className="list-text">Java/Spring</span>
							</li>
						</ul>
					</div>
					<div className="img-wrapper">
						<motion.img
							src="src\assets\images\portrait.jpg"
							whileHover={{ scale: 1.1 }}
						/>
					</div>
				</div>
			</div>
			<div className="experience about-content">
				<h1 className="section-header">Experience</h1>
				<Experience />
			</div>
		</div>
	);
}

export default About;
