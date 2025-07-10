import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Medix Lens",
      description: "Tech-driven healthcare platform for diagnosis, treatment & emergency response through photo uploads and live patient data.",
      tech: ["React.js", "AI", "Healthcare"]
    },
    {
      title: "Tesla Coil – Project Expo",
      description: "Built a functional Tesla Coil model with a 4-member team. Won 1st Prize for real-time demonstration at college expo.",
      tech: ["Electronics", "Innovation", "Teamwork"]
    },
    {
      title: "Water Scarcity Predictor",
      description: "A data analytics tool to forecast water shortage patterns using predictive models and environmental parameters.",
      tech: ["Python", "Machine Learning", "Data Science"]
    },
    {
      title: "React Portfolio",
      description: "A creative pastel-themed portfolio showcasing resume, skills, and visual storytelling built using React.",
      tech: ["React.js", "UI/UX", "Web Design"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;