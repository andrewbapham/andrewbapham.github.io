import React from "react";
import Slideshow from "./Slideshow";
import ProjectItem from "./ProjectItem";
import "./component-styles/Project.css";

function Projects() {
  return (
    <div className="main-content section-container">
      <div className="project-content">
        <h1 className="section-header">Projects</h1>
        <div className="project-container">
          <Slideshow delay={4000}>
            <ProjectItem
              projectTitle="Distributed Web Crawler"
              projectTechnologies="Go, Apache Kafka, MongoDB, AWS S3"
              projectDescription={[
                "Architected and built a scalable, distributed web crawler using Go, Apache Kafka, MongoDB, and AWS S3",
                "Developed separate services in Go for fetching site data to store HTML content in Amazon Web Services (AWS) S3 and collecting site metadata, and processing site data to extract text and other linked pages, allowing for independent scaling",
                "Utilized Apache Kafka as a resilient, distributed message queue to coordinate processing between the services",
              ]}
              githubLink="https://github.com/andrewbapham/justvent"
            />
            <ProjectItem
              projectTitle="BoxAR"
              projectTechnologies="Python, OpenCV, MediaPipe, Flask, React.js"
              projectDescription={[
                "Built a boxing training game that utilizes OpenCV and MediaPipe to track user movements and detect punches, blocks and dodges",
                "Developed a Flask backend to serve the generated OpenCV frames to the React front-end",
                "Enabled local multiplayer by enabling cross server communication for sending punches between players",
              ]}
              githubLink="https://github.com/andrewbapham/justvent"
            />
            <ProjectItem
              projectTitle="JustVent - Second in Best Use of Cloud Technology @ Hack the Hill 2"
              projectTechnologies="Python, Go, React, MongoDB, PostgreSQL, AWS"
              projectDescription={[
                "Created an app allowing users to journal and track their emotions over time using an NLP model run with PyTorch",
                "Developed the backend supporting main functionality in Python & FastAPI, with MongoDB as the primary database",
                "Implemented a semantic search microservice with Go on AWS Lambda, storing vector embeddings on PostgreSQL",
                "Designed application architecture and managed deployment on Amazon Web Services",
              ]}
              githubLink="https://github.com/andrewbapham/justvent"
            />
            <ProjectItem
              projectTitle="Sugar Shack Monitor"
              projectTechnologies="C, ESP32, Node.js/Express"
              projectDescription={[
                "Developed a C program for an ESP32 micro controller to detect when a sap barrel filled up using a capacitive moisture sensor, and sending a message to a local server using web sockets",
                "Created a Node.js/Express server to connect to the ESP32 via web sockets, allowing for the threshold to be updated, and notifying the user through text message using a GSM module or REST API calls when the threshold is exceeded",
              ]}
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
    </div>
  );
}

export default Projects;
