import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Get in touch</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/willbpark" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/wipark2020" target="_blank" rel="noopener noreferrer" aria-label="Github">Github</a>
          <a href="mailto:william_b_park@brown.edu" target="_blank" rel="noopener noreferrer" aria-label="Email">Email</a>
        </div>
        <p>© 2024 William Park</p>
      </div>
    </footer>
  );
}

export default Footer;
