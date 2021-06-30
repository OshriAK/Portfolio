import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <h1 className="footer-title">Contact Me</h1>
      <div className="footer-info">
        <div>
          <i className="fas fa-envelope" />
          <a href="mailto:oshriakaa@gmail.com">oshriakaa@gmail.com </a>
        </div>
        <div>
          <i className="fas fa-phone" />
          <a href="tel:0507904258">050-7904258</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
