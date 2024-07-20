import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mr Madeus. All rights reserved.</p>
        <button className="fas fa-arrow-up " onClick={scrollToTop}>Move to Top</button>
      </div>
    </footer>
  );
};

export default Footer;

 

      
    

