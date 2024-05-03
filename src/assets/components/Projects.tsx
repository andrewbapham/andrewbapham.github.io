import React from "react";
import Slideshow from "./Slideshow";
import ProjectItem from "./ProjectItem";

function Projects() {
    return (
        <div className="main-content section-container">
            <h1 className="section-header">Projects</h1>
            <div className="project-container">
                <Slideshow delay={4000}>
                    <ProjectItem projectTitle="Sugar Shack Monitor" projectTechnologies="C, ESP32, Node.js/Express"
                        projectDescription={[
                            "Developed a C program for an ESP32 micro controller to detect when a sap barrel filled up using a capacitive moisture sensor, and sending a message to a local server using web sockets", " Created a Node.js/Express server to connect to the ESP32 via web sockets, allowing for the threshold to be updated, and notifying the user through text message using a GSM module or REST API calls when the threshold is exceeded"]}
                        githubLink="https://github.com/andrewbapham/sugar-shack-monitor"
                    />
                    <ProjectItem
                        projectTitle="Globalization Index Analysis"
                        projectTechnologies="React.js, Node.js/Express, MySQL"
                        projectDescription={[
                            "Analyzed the effects of globalization on financial markets using KOF’s globalization index to measure levels of globalization and local stock market indices as proxies for their performance",
                            "Wrote a report on findings, including evaluation of several machine learning models trained with Scikit-Learn",
                            "Achieved an accuracy of 74% on a random forest binary classifier",
                        ]}
                        githubLink="https://github.com/andrewbapham/ehotels-app"
                    />
                    <ProjectItem
                        projectTitle="E-hotels App"
                        projectTechnologies="React.js, Node.js/Express, MySQL"
                        projectDescription={[
                            "Developed a full-stack web app that allows customers to search and book hotel rooms, and employees to create and manage hotel chains",
                            "Built a front-end using React, and a back-end in Node.js/Express using MySQL as a database",
                        ]}
                        githubLink="https://github.com/andrewbapham/ehotels-app"
                    />
                    <ProjectItem
                        projectTitle="Self-Hosted Websites"
                        projectTechnologies="React, HTML/CSS, Nginx, Linux"
                        projectDescription={[
                            "Built websites for family with React and self-hosted them on an Nginx server running on a Raspberry Pi",
                        ]}
                    />
                </Slideshow>
            </div>
        </div>
    );
}

export default Projects;
