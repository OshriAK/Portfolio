import React from 'react';

import './MyProjects.css';

const MyProjects = () => {
  return (
    <div className="myProjects-container" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h4>OiNi Computer Store</h4>
          <img src="../images/oini.png" alt="OiNi" />
          <p>Build with React, Redux, HTML, CSS, Node.js, MongoDB</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oini.netlify.app/"
                alt="OiNi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/oini-frontend"
                alt="OiNi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h4>ShareYourPlaces</h4>
          <img src="../images/share-places.png" alt="ShareYourPlaces" />
          <p>Build with React, Redux, HTML, CSS, Node.js, MongoDB</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oshri-places.netlify.app/"
                alt="ShareYourPlaces"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/places-react-frontend"
                alt="ShareYourPlaces"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h4>DevConnector</h4>
          <img src="../images/developer-connector.png" alt="DevConnector" />
          <p>Build with React, Redux, HTML, CSS, Node.js, MongoDB</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oshrinetwork.herokuapp.com/"
                alt="DevConnector"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/oshrinetwork"
                alt="DevConnector"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h4>WeatherApp</h4>
          <img src="../images/weatherApp.png" alt="WeatherApp" />
          <p>Build with React, Redux, HTML, CSS</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oshri-weather-app.netlify.app/"
                alt="WeatherApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/weatherNew"
                alt="WeatherApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <h4>My lottery</h4>
          <img src="../images/lotto.png" alt="myLottery" />
          <p>Build with React, LocalStorage, HTML, CSS</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oshri-lotto.netlify.app/"
                alt="myLottery"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/my-lotto"
                alt="myLottery"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h4>Memory Lights Game</h4>
          <img src="../images/memory-lights.png" alt="MemoryLightsGame" />
          <p>Build with React, HTML, CSS,</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oshri-memory-light.netlify.app/"
                alt="MemoryLightsGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/memory-light"
                alt="MemoryLightsGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <h4>Corona Tracker</h4>
          <img src="../images/corona-tracker.png" alt="coronaTracker" />
          <p>Build with React, Chart.js, HTML, CSS,</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://oshri-corona-tracker.netlify.app/"
                alt="coronaTracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/Corona-Tracker"
                alt="coronaTracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <h4>Phone Store</h4>
          <img src="../images/phoneStore.png" alt="PhoneStore" />
          <p>Build with React, HTML, CSS,</p>
          <div className="projects-buttons">
            <div>
              <a
                href="https://phone-store-oshri.netlify.app/"
                alt="PhoneStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div>
              <a
                href="https://github.com/OshriAK/react-phone-store"
                alt="PhoneStore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
