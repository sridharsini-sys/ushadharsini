import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
<nav className="navbar">
  <div className="nav-left">
    <div className="circle-logo" />
    <h2 className="site-title">Portfolio</h2>
  </div>

  <ul className="nav-right">
    <li><a href="#hero">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact" className="active-link">Contact</a></li>
  </ul>
</nav>
  );
}

export default Navbar;