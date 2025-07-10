import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="glass-card">
          <h1 className="hero-title">
            Hi, I’m <span className="highlight">N. Sri Dharsini</span>
          </h1>
          <h2 className="hero-role">AI & Data Science Student</h2>
          <p className="hero-desc">
            I create beautifully intelligent digital projects using <strong>Python</strong>, <strong>SQL</strong>, and <strong>React.js</strong>.  
            My work blends logic with pastel aesthetics — like a tech artist 💜
          </p>
          <a className="hero-button" href="/Sri_Dharsini_resume.pdf" download>
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        {/* If you want to add a graphic or future photo, add here */}
      </div>
    </section>
  );
}

export default Hero;