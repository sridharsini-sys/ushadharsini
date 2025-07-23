import React from 'react';

function Home() {
  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #0a0f27, #1d1f3f)',
      color: '#64ffda',
      padding: '50px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '3rem',
        textShadow: '0 0 12px #64ffda',
        marginBottom: '20px'
      }}>
        Welcome to Student Profile Showcase 💫
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '700px',
        margin: 'auto',
        lineHeight: '1.6',
        color: '#e0f7fa'
      }}>
        This platform highlights student talent, glowing portfolios, and creative skills across departments. Browse glowing cards, view achievements, and get inspired 🌈
      </p>
    </div>
  );
}

export default Home;