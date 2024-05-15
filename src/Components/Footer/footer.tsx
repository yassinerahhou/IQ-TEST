import "./footer-style.css";
// import "@fortawesome/fontawesome-free/css/all.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="parrent-div">
          <div className="logo">
            <h1>IQ TEST</h1>
            <span id="social-media">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in "></i>
            </span>
          </div>
          <div className="quick_links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">IQ</a>
              </li>
            </ul>
          </div>
          <div className="LEGAL-PAGES">
            <h3>Legal Pages</h3>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
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
