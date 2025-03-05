import React, { useEffect, useState } from "react";
import "./component-styles/NavBar.css";
import resume from "/Andrew_Pham_Resume.pdf";

interface NavProps {
	handleNavClick: Function;
	navExpanded: boolean;
}

function NavBar(props: NavProps) {
	const slideOut = {
		transform: "translateX(0vw)",
	};
	const slideIn = {
		transform: "translateX(100vw)",
	};

	return (
		<nav className="navigation">
			<div className="nav-collapsed">
				<div
					id="hamburger"
					onClick={() => props.handleNavClick()}
					className={props.navExpanded ? "open" : "closed"}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<aside
					className="closed"
					style={props.navExpanded ? slideOut : slideIn}
				>
					<ul>
						<li>
							<a href="#about">About me</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a className="resume" href={resume} target={"_blank"}>
								Resume
							</a>
						</li>
					</ul>
				</aside>
			</div>
			<div className="nav-regular">
				<ul>
					<li>
						<a href="#about">About me</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li className="resume">
						<a href={resume} target={"_blank"}>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
