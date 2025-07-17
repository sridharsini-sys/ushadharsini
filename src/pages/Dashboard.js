import React from 'react';
import '../styles/FormStyles.css'; // Reusing glowing style

const Dashboard = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Welcome to Dashboard 💫</h2>
      <div className="glow-form">
        <p style={{ color: '#fff', fontSize: '18px', textAlign: 'center' }}>
          You’ve successfully logged in.<br />
          Now you can add user controls like Edit/Delete or display database data here!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;