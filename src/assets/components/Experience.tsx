import React from "react";
import "./component-styles/Experience.css";

function Experience() {
	return (
		<div>
			<div className="experience-card main-content">
				<h1 className="section-header">Experience</h1>
				<h3 className="job-title">
					Software Developer, Co-op
					<span className="company-name">
						{" "}
						@{" "}
						<a href="https://recollective.com/" target={"_blank"}>
							Recollective Inc.
						</a>
					</span>
				</h3>
				<h4 className="work-dates">May 2022 - September 2022</h4>
				<ul>
					<li>
						<span className="list-text">
							Reported, analyzed, and patched various software defects
						</span>
					</li>
					<li>
						<span className="list-text">
							Implemented new front-end features using JSP, Vue.js, JavaScript,
							and HTML/CSS
						</span>
					</li>
					<li>
						<span className="list-text">
							Developed new back-end features and API endpoints using Java,
							Spring and MySQL
						</span>
					</li>
					<li>
						<span className="list-text">
							Tracked and managed work using JIRA and GitHub • Triaged software
							defects based on severity
						</span>
					</li>
					<li>
						<span className="list-text">
							Completed various QA tasks including creation of test cases and
							end-to-end testing
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Experience;
