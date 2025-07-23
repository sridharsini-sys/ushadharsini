import React from 'react';

function About() {
  return (
    <div style={{
      backgroundColor: '#0a0f27',
      color: '#e0f7fa',
      padding: '50px',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <h2 style={{ color: '#64ffda', textShadow: '0 0 10px #64ffda' }}>
        About This App 💡
      </h2>
      <p style={{ maxWidth: '700px', lineHeight: '1.6' }}>
        Created by Sri Dharsini, this app showcases student achievements, glowing frontend skills, and pastel-themed portfolios. It combines React, MySQL, and aesthetic design with technical power to highlight talent in the digital era 💖
      </p>
    </div>
  );
}

export default About;