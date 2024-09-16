//src/components/Projects.js

import React from "react";
import "./Projects.css";

function Experience() {
  const experienceText = `
    As a dedicated Software Engineer at Bank Of America, I have been actively involved in designing,
    developing, and deploying a wide range of software solutions that meet both client and internal business requirements.
    I specialize in front-end development, with expertise in technologies such as JavaScript, React.
    My experience extends to creating complex REST APIs, integrating various databases, and implementing efficient
    backend systems that ensure scalability and performance.

    Throughout my professional journey, I have worked closely with cross-functional teams, applying Agile methodologies
    to deliver high-quality products within deadlines. My strong problem-solving skills and a passion for learning new
    technologies have enabled me to contribute significantly to a variety of challenging projects, from web development
    and cloud-based solutions to optimizing machine learning models.

    In addition to my technical capabilities, I am passionate about mentoring junior developers, enhancing collaboration
    within teams, and continuously improving software development processes. I thrive in dynamic environments, where my
    curiosity and drive to innovate enable me to deliver robust, scalable, and user-centric solutions.
  `;

  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="experience-content">
        <p>{experienceText}</p>
      </div>
    </section>
  );
}

export default Experience;