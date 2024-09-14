// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Luminosity Drone",
      description:
        "Engineered and Simulated a virtual Luminosity Drone using Gazebo. The drone is simulated by ROS,Python and OpenCv is used here to detect light source in Gazebo environment where the drone will detect the source and hover over there being stable by help of implemented control system.",
      link: "https://github.com/Mcpigeons04/Drone-Simulation-Gazebo",
      image: `${process.env.PUBLIC_URL}/images/Drone.jpg`,
    },
    {
      title: "User Registration Form",
      description:
        "A user friendly registration and login form, where we test the data in Postman. During registration the data is sent to MongoDB databse with help of POST request and while login procedure the credentials is checked using JWT tokens.",
      link: "https://github.com/Mcpigeons04/Backend-web-development",
      image: `${process.env.PUBLIC_URL}/images/Postman.png`,
    },
    {
      title: "VishwaSamachar",
      description:
        "Created a Custom API and deployed on render,where the data from API will be fetched and displayed at my news website.This projects aims in providing user various news in category wise.",
      link: "https://github.com/Mcpigeons04/Vishwasamachar-reactjs-web",
      image: `${process.env.PUBLIC_URL}/images/CustomAPI.png`,
    },
    {
      title: "COMING SOON!",
      description:
        "Working on creation of Blog Chess website using Nextjs, Typescript and integrating AI, Coming Soon! Stay Tuned!",
      link: "",
      image: `${process.env.PUBLIC_URL}/images/comingsoon.jpg`,
    },
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
