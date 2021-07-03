import React from 'react';

import SingleProject from './SingleProject';
import { projectsArray } from '../../../src/DataProjects';

import './MyProjects.css';

const MyProjects = () => {
  return (
    <div className="myProjects-container" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsArray.map((project) => (
          <SingleProject
            key={project.projectName}
            projectName={project.projectName}
            imgPath={project.imgPath}
            discription={project.discription}
            webLink={project.webLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
