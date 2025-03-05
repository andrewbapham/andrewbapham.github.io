import React from "react";
import "./component-styles/Experience.css";
import ExperienceItem from "./ExperienceItem";
import Slideshow from "./Slideshow";

function Experience() {
  return (
    <div className="main-content section-container">
      <div className="experience-card">
        <h1 className="section-header">Experience</h1>
        <div className="experience-slideshow">
          <Slideshow delay={4000}>
            <ExperienceItem
              jobTitle="Software Engineer Intern"
              companyLink="https://www.tesla.com/"
              companyName="Tesla"
              workDates="Jan 2025 - May 2025"
              jobDescription={[
                "Designed a Dockerized Python application to scan social media sites for complaints about Tesla’s infotainment systems, integrating open-source LLMs with Ollama to determine relevance, summarize post content, and generate email reports for engineers, analyzing thousands of posts and reducing manual investigation time by over 20 hours per week",
                "Implemented a telemetry verification system for mobile application commands by correlating application and vehicle logs from multiple sources, streamlining the testing process and reducing the number of cases requiring manual investigation byover 60%",
              ]}
            />
            <ExperienceItem
              jobTitle="Embedded C/C++ Software Developer"
              companyLink="https://nokia.com"
              companyName="Nokia"
              workDates="Sep 2024 - Dec 2024"
              jobDescription={[
                "Designed and implemented an encoding technique leveraging C++ and Protobuf to reduce log size by over 30%, allowing more vital crash data to be preserved in a limited sized log buffer",
                "Developed new features and unit tests for a model-driven router management interface using C++, enabling dependency tracking between config fields, allowing users to apply config changes without needing to follow a strict order of operations",
                "Reduced Python file dependency tracking script runtime by 95% by caching results of recursive function calls and reducing the amount of read/writes to disk, saving developers over 40 seconds per build on average",
                "Generated thousands of lines of C code using C++ based on config files, making the codebase easier to maintain/extend",
              ]}
            />
            <ExperienceItem
              jobTitle="IT Software Solutions Developer"
              companyLink="https://www.rcmp-grc.gc.ca/"
              companyName="RCMP"
              workDates="May 2024 - Aug 2024"
              jobDescription={[
                "Created a new ingestion pipeline for a Flask data visualization service, processing and inserting 5000 rows per second from an excel sheet to a SQLite database, and optimized database insertions by batching updates in transactions, decreasing ingestion time by over 90%",
                "Architected and deployed a Dockerized FastAPI Python microservice providing a simple interface for categorizing media files using multiple Tensorflow ML models",
                "Implemented multi-threaded inference, improving total runtime by 35% over sequential inference",
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
                "Implemented validation to the Spring controllers to support a new limited-feature license, leading to a 10% increase in sales",
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
    </div>
  );
}

export default Experience;
