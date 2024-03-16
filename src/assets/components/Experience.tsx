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
            jobTitle="Test Automation Co-op/Intern"
            companyLink="https://nokia.com"
            companyName="Nokia"
            workDates="Jan 2024 - Apr 2024"
            jobDescription={[
              "Developed a program to create PPPoE servers and clients, generate traffic, and collect metrics on Linux devices, controlled via a REST API built with Python and FastAPI",
              "Coded API endpoints for automated traffic generation with various packet types and protocols in Python, allowing for easy testing of fixed networks",
              "Identified opportunities for better error handling and messaging for API endpoints, and implemented them, improving the API’s UX",
              "Wrote installation scripts for automated program installation on Ubuntu",
            ]}
          />
          <ExperienceItem
            jobTitle="Software Developer, Co-op"
            companyLink="https://recollective.com"
            companyName="Recollective Inc."
            workDates="May 2023 - Sep 2023"
            jobDescription={[
              "Captured and logged LangChain chain steps and in a FastAPI Python microservice and forwarded the results to AWS OpenSearch",
              "Created a new internal tool fortesting LLM Prompts in Vue.js with API endpoints in Java/Spring to make calls to a microservice",
              "Developed new back-end site limit features and API endpoints with Java/Spring to support a new license type",
              "Shadowed DevOps team and learned about their AWS configuration and practices",
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
              "Triaged software defects based on severity",
              "Completed various QA tasks including creation of test cases and end-to-end testing",
            ]}
          />
        </Slideshow>
      </div>
    </div>
  );
}

export default Experience;
