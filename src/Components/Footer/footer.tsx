import { Link } from "react-router-dom";
import "./footer-style.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="parrent-div">
          <div className="logo">
            <h1>IQ TEST</h1>
            <span id="social-media">
              <i className="iconSocial fab fa-facebook-f"></i>
              <i className="iconSocial fab fa-twitter"></i>
              <i className="iconSocial fab fa-instagram"></i>
              <i className="iconSocial fab fa-linkedin-in "></i>
            </span>
          </div>
          <div className="quick_links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a className="a_remove_style" href="#">
                  NEWS
                </a>
              </li>
              <li>
                <a className="a_remove_style" href="#">
                  BLOG
                </a>
              </li>
              <li>
                <Link to="/Start">
                  <a className="a_remove_style" href="#">
                    IQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="LEGAL-PAGES">
            <h3>Legal Pages</h3>
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
                <Link to="/ABOUT">
                  <span className="a_remove_style">ABOUT US</span>
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
    </>
  );
}
