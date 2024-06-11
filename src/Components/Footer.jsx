import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';


import './Footer.css';


export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="col1">
        <div className="foot-info">
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          <span>Lamachaur street Pokhara</span>
        </div>
        <div className="foot-info">
          <FontAwesomeIcon icon={faPhone} />
          <span>+977 980000000</span>
        </div>
        <div className="foot-info">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>hello@gmail.com</span>
        </div>
      </div>
      <div className="col2">
        <h5>About the Company</h5>
        <p>
        Thank you for visiting my portfolio. Connect with me on LinkedIn or follow me on GitHub. For inquiries, please email me at hello@gmail.com.
        </p>
        <div className="footer-brands">
          <FontAwesomeIcon id="ft-icon" icon={faLinkedinIn} />
          <FontAwesomeIcon id="ft-icon" icon={faTwitter} />
          <FontAwesomeIcon id="ft-icon" icon={faFacebook} />
          <FontAwesomeIcon id="ft-icon" icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};
