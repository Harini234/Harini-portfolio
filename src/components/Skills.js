// src/components/Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h1>
        <span>M</span>e and <br />
        My Tech Stack
      </h1>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-c-64.png`}
            alt="C++"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-html-48.png`}
            alt="HTML"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-css-64.png`}
            alt="CSS"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-javascript-64.png`}
            alt="JavaScript"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-reactjs-68.png`}
            alt="ReactJS"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-git-64.png`}
            alt="Git"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-python-94.png`}
            alt="Python"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icons8-github-64.png`}
            alt="Github"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/node js.png`}
            alt="Nodejs"
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/MongoDB3.jpg`}
            alt="MongoDB"
          />
        </li>
      </ul>
      <p>
        I am an Enthusiast in Software development and as well as hardware electronics.I daily upskill myself with various
        techstack in Software domain👨‍💻 and as well as learn new technologies in core electronics as well🙂.I am currently learning App development by 
        using Kotlin.I am currently working in a project in HFSS which revolves around designing Antennas📡 and optimising the design.
        Apart from all these I am also an Aviation nerd✈️ and learning some concepts regarding it as well.
        Last but not the least, I am also an avid chess player♟️ and represented my institute at various National level Tournaments.
      </p>
    </section>
  );
}

export default Skills;
