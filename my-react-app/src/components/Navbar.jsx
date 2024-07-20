
import React, { useState } from 'react';
import './Navbar.css';
import './LogoAnimation.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/business-office-african-american-manager-usinessman-avatar-icon-head-portrait-occupation_805465-135.jpg" width={50} height={50} draggable={false} alt="Logo" />
        <h1 className="logo-text">Madeus Rene</h1>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="download-cv">
        <a href="/path/to/your-cv.pdf" className="download-btn" download>
          Download CV
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;




