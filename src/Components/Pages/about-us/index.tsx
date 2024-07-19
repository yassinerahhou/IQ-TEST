import React, { useEffect } from "react";
import "./style.css";
import abtimg from "./../../../assets/about-us/about.png";

export default function About() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="about-image">
        <img src={abtimg} alt="About IQ Test" />
      </div>

      <div className="about-content">
        <section>
          <h2>Welcome to IQ Test – Your Gateway to Discovering Brilliance</h2>
          <p>
            At IQ Test, we believe that everyone has a unique potential waiting
            to be unlocked. Our mission is to provide you with the most accurate
            and insightful IQ testing experience available online.
          </p>
        </section>

        <section>
          <h2>Who We Are</h2>
          <p>
            IQ Test is a leading online platform dedicated to helping
            individuals assess and understand their intellectual capabilities.
            Our team of psychologists, data scientists, and tech enthusiasts
            have come together to create a comprehensive and user-friendly IQ
            testing service.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make IQ testing accessible, accurate, and
            insightful for everyone. We aim to demystify intelligence testing
            and provide a tool that empowers individuals to learn more about
            themselves and their cognitive strengths.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Accurate IQ Tests:</strong> Designed by experts using
              advanced algorithms.
            </li>
            <li>
              <strong>Detailed Analysis:</strong> Gain in-depth insights into
              your cognitive abilities.
            </li>
            <li>
              <strong>Personalized Recommendations:</strong> Tailored
              suggestions to enhance your skills.
            </li>
            <li>
              <strong>User-Friendly Experience:</strong> Intuitive and easy to
              navigate.
            </li>
            <li>
              <strong>Privacy and Security:</strong> Your data is handled with
              utmost confidentiality.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose IQ Test?</h2>
          <ul>
            <li>
              <strong>Expertly Crafted Tests:</strong> Developed by
              professionals in psychology and cognitive science.
            </li>
            <li>
              <strong>Comprehensive Feedback:</strong> Understand your results
              with detailed explanations.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> We constantly update
              based on latest research and feedback.
            </li>
            <li>
              <strong>Community Support:</strong> Join like-minded individuals
              on a journey of self-discovery.
            </li>
          </ul>
        </section>

        <section className="cta-section">
          <h2>Get Started Today</h2>
          <p>
            Discover your intellectual potential with IQ Test. Our platform
            provides accurate, insightful, and meaningful results for your
            personal growth.
          </p>
          <button className="cta-button">Take the Test Now</button>
        </section>
      </div>
    </div>
  );
}
