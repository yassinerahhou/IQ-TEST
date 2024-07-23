import { useEffect } from "react";
import "./style.css";
import abtimg from "./../../../assets/about-us/about.png";

export default function About() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About Brain IQ</h1>
      <div className="about-image">
        <img src={abtimg} alt="About Brain IQ" />
      </div>
      <div className="about-content">
        <section>
          <h2>Welcome to Brain IQ – Unlocking Your Cognitive Potential</h2>
          <p>
            At Brain IQ, we're passionate about helping you discover and nurture
            your intellectual capabilities. Our platform offers state-of-the-art
            IQ testing experiences designed to provide accurate insights into
            your cognitive abilities.
          </p>
        </section>
        <section>
          <h2>Our Story</h2>
          <p>
            Brain IQ was born from the collaborative effort of two dedicated
            developers, Yassine Rahhou and Zakaria Elaroussi. Their shared
            vision of making intelligence testing accessible and insightful
            drove them to create this platform, infusing it with their expertise
            in psychology, data science, and user experience design.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            We strive to demystify intelligence testing and empower individuals
            on their journey of self-discovery. By providing accurate,
            comprehensive, and user-friendly IQ assessments, we aim to help you
            understand your cognitive strengths and areas for growth.
          </p>
        </section>
        <section>
          <h2>What Sets Us Apart</h2>
          <ul>
            <li>
              <strong>Expert-Crafted Tests:</strong> Developed by professionals
              in cognitive science.
            </li>
            <li>
              <strong>Comprehensive Analysis:</strong> Gain deep insights into
              your mental capabilities.
            </li>
            <li>
              <strong>Personalized Growth Plans:</strong> Receive tailored
              recommendations to enhance your skills.
            </li>
            <li>
              <strong>User-Centric Design:</strong> Enjoy an intuitive and
              engaging testing experience.
            </li>
            <li>
              <strong>Data Security:</strong> Your information is protected with
              industry-standard measures.
            </li>
          </ul>
        </section>
        <section>
          <h2>Meet the Developers</h2>
          <div className="developer-info">
            <div className="developer">
              <h3>Yassine Rahhou</h3>
              <br />
              <p>Co-founder & Lead Developer</p>
              <div className="social-links">
                <a
                  href="https://github.com/yassinerahhou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yassine-rahhou/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="developer">
              <h3>Zakaria Elaroussi</h3>
              <br />
              <p>Co-founder & UX Specialist</p>
              <div className="social-links">
                <a
                  href="https://github.com/DepressedPenguin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/zakaria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <h2>Embark on Your Intellectual Journey</h2>
          <p>
            Discover the full extent of your cognitive abilities with Brain IQ.
            Our platform offers more than just numbers – it's a gateway to
            understanding and enhancing your mental capabilities.
          </p>
          <button className="cta-button">Take the Brain IQ Test Now</button>
        </section>
      </div>
    </div>
  );
}
