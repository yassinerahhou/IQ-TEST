import React from "react";
import { Link } from "react-router-dom";
import "./footer-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="parrent-div">
        <div className="logo">
          <h1>IQ TEST</h1>
          <div id="social-media">
            <a href="#" className="iconSocial">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="iconSocial">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="iconSocial">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="iconSocial">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <br />
          <ul>
            <li>
              <a className="a_remove_style" href="#">
                BLOGS
              </a>
            </li>
            <li>
              <a className="a_remove_style" href="#">
                KIDS
              </a>
            </li>
            <li>
              <Link to="/Start" className="a_remove_style">
                TEST
              </Link>
            </li>
          </ul>
        </div>
        <div className="LEGAL-PAGES">
          <h3>Legal Pages</h3>
          <br />
          <ul>
            <li>
              <a className="a_remove_style" href="#">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="a_remove_style" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="a_remove_style" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/ABOUT" className="a_remove_style">
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright_section">
        <p id="copyright">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
