import { useEffect } from "react";
import "./style.css";
import abtimg from "./../../../assets/about-us/about.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About BrainBooster.live</h1>
      <div className="about-image">
        <img src={abtimg} alt="About BrainBooster.live" />
      </div>
      <div className="about-content">
        <section>
          <h2>
            Welcome to BrainBooster.live – Elevate Your Cognitive Abilities
          </h2>
          <p>
            At BrainBooster.live, we're dedicated to helping you unlock your
            full intellectual potential. Our cutting-edge platform offers
            comprehensive IQ and cognitive ability assessments designed to
            provide accurate insights into your mental capabilities and help you
            grow.
          </p>
        </section>
        <section>
          <h2>Our Journey</h2>
          <p>
            BrainBooster.live was founded by two visionary developers, Yassine
            Rahhou and Zakaria Elaroussi. Their combined expertise in
            psychology, data science, and user experience design led to the
            creation of this innovative platform. Driven by a shared passion for
            cognitive science and a desire to make intelligence testing more
            accessible, they've crafted a unique space for intellectual
            exploration and growth.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            We aim to demystify intelligence testing and empower individuals on
            their journey of cognitive enhancement. By offering accurate,
            comprehensive, and user-friendly assessments, we strive to help you
            understand your intellectual strengths and areas for improvement.
            Our goal is not just to measure intelligence, but to provide you
            with the tools and insights to boost your cognitive abilities.
          </p>
        </section>
        <section>
          <h2>The BrainBooster.live Advantage</h2>
          <ul>
            <li>
              <strong>Scientifically Validated Tests:</strong> Our assessments
              are developed by experts in cognitive science and psychometrics,
              ensuring accuracy and reliability.
            </li>
            <li>
              <strong>Holistic Cognitive Analysis:</strong> Gain deep insights
              into various aspects of your mental capabilities, including
              logical reasoning, spatial awareness, and verbal comprehension.
            </li>
            <li>
              <strong>Adaptive Learning Paths:</strong> Receive personalized
              recommendations and exercises to enhance your cognitive skills
              based on your test results.
            </li>
            <li>
              <strong>Intuitive User Experience:</strong> Enjoy a seamless and
              engaging testing process designed to bring out your best
              performance.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Monitor your cognitive growth
              over time with detailed performance analytics and progress
              reports.
            </li>
            <li>
              <strong>Robust Data Protection:</strong> Your information and
              results are safeguarded with state-of-the-art security measures,
              ensuring your privacy and confidentiality.
            </li>
          </ul>
        </section>
        <section>
          <h2>Meet Our Founders</h2>
          <div className="developer-info">
            <div className="developer">
              <h3>Yassine Rahhou</h3>
              <br />
              <p>Co-founder & Lead Developer</p>
              <p>
                With a background in computer science and a passion for
                cognitive psychology, Yassine brings technical expertise and
                innovative problem-solving to BrainBooster.live.
              </p>
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
              <p>
                Zakaria's expertise in user experience design and data
                visualization ensures that BrainBooster.live offers an
                intuitive, engaging, and informative testing experience.
              </p>
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
          <h2>Embark on Your Cognitive Enhancement Journey</h2>
          <p>
            Discover the full spectrum of your intellectual abilities with
            BrainBooster.live. Our platform offers more than just an IQ score –
            it's your personal gateway to understanding and enhancing your
            cognitive capabilities. Are you ready to unlock your mind's true
            potential?
          </p>
          <button className="cta-button">Take the BrainBooster Test Now</button>
        </section>
      </div>
    </div>
  );
}
