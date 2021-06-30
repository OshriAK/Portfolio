import React from 'react';

import './Skill.css';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1>Skills</h1>
      <div className="skills-second">
        <div className="frontend">
          <h2>Frontend</h2>
          <ul className="skills-frontend">
            <li className="best-skill">React</li>
            <li>React Native</li>
            <li>Angular</li>
            <li className="best-skill">JavaScript</li>
            <li className="best-skill">HTML5</li>
            <li className="best-skill">CSS3</li>
            <li>SCSS</li>
          </ul>
        </div>
        <div className="backend">
          <h2>Backend</h2>
          <ul className="skills-backend">
            <li className="best-skill">Node.js</li>
            <li>Express</li>
            <li className="best-skill">MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
