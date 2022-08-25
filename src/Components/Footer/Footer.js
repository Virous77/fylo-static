import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
import facebook from "../images/facebook-brands.svg";
import twitter from "../images/twitter-brands.svg";
import instagram from "../images/instagram-brands.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const element = <FontAwesomeIcon icon={faLocationDot} />;
  const element2 = <FontAwesomeIcon icon={faPhone} />;
  const element3 = <FontAwesomeIcon icon={faEnvelope} />;

  return (
    <footer>
      <img src={logo} alt="ogo" className="foot-logo" />

      <div className="about">
        <div className="location">
          <div className="locations">{element}</div>
          <div className="location-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="number-info">
          <ul>
            <li>
              {element2}
              <p>+1-543-123-4567</p>
            </li>

            <li>
              {element3}
              <p>Example@fylo.com</p>
            </li>
          </ul>
        </div>

        <div className="about-links">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="about-links">
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="social-icon">
          <img src={facebook} alt="facebook-logo" />
          <img src={instagram} alt="instagram-logo" />
          <img src={twitter} alt="twitter-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
