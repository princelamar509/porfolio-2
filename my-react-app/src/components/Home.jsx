
import React, { useState } from 'react';
import './Home.css';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home ${darkMode ? 'dark' : 'light'}`}>
<img src={"https://img.freepik.com/premium-vector/business-office-african-american-manager-usinessman-avatar-icon-head-portrait-occupation_805465-135.jpg"} draggable={false} alt="Hero" className="home-image" />

      <div className="home-text">
        <h2>Hello, I'm Madeus Rene</h2>
        <h1 className='typing'>Front End Developer</h1>
        <p className="description">
         I'm a passionate and creative front-end developer with a strong foundation in HTML, CSS, and JavaScript.
        </p>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="social-icons">
          <a href="https://github.com/princelamar509" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;