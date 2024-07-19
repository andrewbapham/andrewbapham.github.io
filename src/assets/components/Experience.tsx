import React from "react";
import "./component-styles/Experience.css";
import ExperienceItem from "./ExperienceItem";
import Slideshow from "./Slideshow";

function Experience() {
  return (
    <div className="section-container">
      <div className="experience-card main-content">
        <h1 className="section-header">Experience</h1>
        <Slideshow delay={4000}>
          <ExperienceItem
            jobTitle="IT Software Solutions Developer"
            companyLink="https://www.rcmp-grc.gc.ca/"
            companyName="RCMP"
            workDates="May 2024 - Aug 2024"
            jobDescription={[
              "Architected a FastAPI Python microservice providing a simple interface for categorizing media files using multiple ML models",
              "Implemented multi-threading to run inference on models simultaneously, improving total runtime by over 50%",
            ]}
          />
          <ExperienceItem
            jobTitle="Test Automation Co-op/Intern"
            companyLink="https://nokia.com"
            companyName="Nokia"
            workDates="Jan 2024 - Apr 2024"
            jobDescription={[
              "Developed a program to create, send and receive mock traffic, and collect metrics on Linux devices to test fixed networks, controlled via a REST API built with Python and FastAPI",
              "Added support for traffic generation with 15+ protocols",
              "Improved error handling and messaging for API endpoints, making it easier to use and identify erroneous use",
              "Created a Bash script automating system setup and program installation on Ubuntu, accelerating setup and install time by over 80%",
            ]}
          />
          <ExperienceItem
            jobTitle="Software Developer, Co-op"
            companyLink="https://recollective.com"
            companyName="Recollective Inc."
            workDates="May 2023 - Sep 2023"
            jobDescription={[
              "Created a new internal tool for testing LLM Prompts in Vue.js allowing for rapid prototyping of AI features",
              "Developed API endpoints and DTOs with Java, connecting the main application to an AI microservice",
              "Captured and logged AI request metadata in a FastAPI Python microservice and forwarded results to AWS OpenSearch with Fluent for validation and monitoring",
              "• Implemented validation to the Spring controllers to support a new limited-feature license, leading to a 10% increase in sales",
            ]}
          />
          <ExperienceItem
            jobTitle="Software Developer, Co-op"
            companyLink="https://recollective.com"
            companyName="Recollective Inc."
            workDates="May 2022 - Sep 2022"
            jobDescription={[
              "Implemented new front-end features using JSP, Vue.js, JavaScript, and HTML/CSS",
              "Developed new back-end features and API endpoints using Java, Spring and MySQL",
              "Reported, analyzed, and patched various software defects",
              "Completed various QA tasks including creation of test cases and end-to-end testing",
              "Triaged software defects based on severity",
            ]}
          />
        </Slideshow>
      </div>
    </div>
  );
}

export default Experience;
