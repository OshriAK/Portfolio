import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <h1 className="footer-title">Contact Me</h1>
      <div className="footer-info">
        <div>
          <i className="fas fa-envelope" /> <p>oshriakaa@gmail.com</p>
        </div>
        <div>
          <i className="fas fa-phone" /> <p>050-7904258</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
