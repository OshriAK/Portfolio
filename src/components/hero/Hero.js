import React, { useState } from 'react';

import './Hero.css';

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandling = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="hero-container">
      <nav className="hero-navbar">
        <img
          className="hero-logo"
          src="../images/my-portfolio.png"
          alt="Oshri"
        />

        <ul className={toggle ? 'show' : 'hero-ul'}>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="hamburger" id="hamburger" onClick={toggleHandling}>
          {toggle ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </button>
      </nav>
      <div className="hero-area">
        <div className="hero-text">
          <h1 className="hero-my-name">Oshri Cohen</h1>
          <p>Full Stack Developer</p>
          <div className="hero-button">
            <a href="../cv/oshri-cv.docx" download="oshri-cv.docx">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-socials">
          <a
            href="https://www.facebook.com/oshri.cohen.7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/oshri-cohen-b11a4b157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/OshriAK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
