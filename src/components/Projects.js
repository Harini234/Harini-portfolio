//src/components/Projects.js

import React from "react";
import "./Projects.css";

function Experience() {
  const experienceText = `
I joined Bank of America in Chennai on July 17th, 2023, and it’s been an incredible year since then.
 The company offers flexible working hours and encourages participation in various activities beyond regular project work. 
 I’ve been involved in employee networks like Women in Technology and Operations, ICUBE, and ESG, among others. 
 Bank of America also supports Hackathons and Ideathons, fostering innovative solutions for a better future. 
 I’ve had the chance to learn new languages like C# and work with platforms such as SQL Server, Autosys, Atlassian Bitbucket, 
 Jenkins, Ansible, Celestial, and RISE.
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