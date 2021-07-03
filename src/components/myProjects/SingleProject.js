import React from 'react';

import './SingleProject.css';

const SingleProject = (props) => {
  const { projectName, imgPath, discription, webLink, codeLink } = props;

  return (
    <div className="project-card">
      <h4>{projectName}</h4>
      <img src={imgPath} alt={projectName} />
      <p>{discription}</p>
      <div className="projects-buttons">
        <div>
          <a
            href={webLink}
            alt={projectName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
        <div>
          <a
            href={codeLink}
            alt={projectName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
