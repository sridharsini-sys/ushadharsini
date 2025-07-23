import React from 'react';
import StudentCards from './components/StudentCards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        color: '#64ffda',
        textShadow: '0 0 12px #64ffda',
        fontSize: '2.5rem',
        margin: '20px 0',
        fontFamily: 'Poppins, sans-serif'
      }}>
        Student Profile Showcase App 💫
      </h1>

      <StudentCards />
      <Footer />
    </div>
  );
}

export default App;