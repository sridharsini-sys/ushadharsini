import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { title: "Python", desc: "Write logic for automation, AI models & data workflows." },
    { title: "SQL", desc: "Query and manage databases for clean data handling." },
    { title: "React.js", desc: "Build responsive UI components with hooks, routing & props." },
    { title: "HTML & CSS", desc: "Design layouts with pastel themes and glowing aesthetics." },
    { title: "Portfolio Styling", desc: "Customize themes, fonts, and animations creatively." }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Technical skills</h2>
      <p className="skills-subtitle">
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
            <div className="glow-tag">💫</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;