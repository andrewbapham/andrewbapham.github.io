import React from "react";

function Projects() {
  return (
    <div className="main-content section-container">
      <h1 className="section-header">Projects</h1>
      <p>Currently a work in progress, come back later to check it out!</p>
      <div className="project-container">
        <div className="project-slide">
          <h2 className="project-title">
            <a
              href="https://github.com/andrewbapham/ehotels-app"
              target={"_blank"}
            >
              E-hotels App
            </a>
          </h2>
          <p className="project-description">
            Web app that lets employees manage a hotel database system and
            allows customers to search and book rooms based on several criteria.
            Built with React.js for frontend, Node.js with Express for the
            backend, and MySQL for DB, as a final project for the course CSI2132
            - Databases I.
          </p>
          <ul>
            <li>
              <span className="list-text">React.js</span>
            </li>
            <li>
              <span className="list-text">Node.js/Express</span>
            </li>
            <li>
              <span className="list-text">MySQL</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
