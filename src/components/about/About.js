import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about-me">
      <div className="about-information">
        <h2 className="about-title">About</h2>
        <p>Hello, My name is Oshri Cohen.</p>
        <p>
          I am a Software Developer with passion for coding, a lot of
          motivation, self learning and group player!
        </p>
        <p>HIT graduate with B.Sc in Computer Science.</p>
      </div>
      <div className="headshot-container">
        <img src="../images/oshripic.jpg" alt="oshri-pic" />
      </div>
    </div>
  );
};

export default About;
