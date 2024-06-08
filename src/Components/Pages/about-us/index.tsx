import React from "react";
import "./style.css";
import abtimg from "./../../../assets/about-us/about.png";

export default function About() {
  return (
    <section className="about-us-secrion">
      <h1>ABOUT US</h1>
      <div id="img-sect">
        <img src={abtimg} alt="About Us" />
      </div>
      <div id="about-us-txt">
        <h2>Welcome to IQ Test – Your Gateway to Discovering Brilliance</h2>
        <p>
          At IQ Test, we believe that everyone has a unique potential waiting to
          be unlocked. Our mission is to provide you with the most accurate and
          insightful IQ testing experience available online. Whether you're
          curious about your cognitive abilities, seeking to challenge yourself,
          or looking to gain a deeper understanding of your intellect, we're
          here to help you every step of the way.
        </p>
        <h1>Who We Are</h1>
        <p>
          IQ Test is a leading online platform dedicated to helping individuals
          assess and understand their intellectual capabilities. Our team of
          psychologists, data scientists, and tech enthusiasts have come
          together to create a comprehensive and user-friendly IQ testing
          service. We pride ourselves on delivering precise and reliable results
          that you can trust.
        </p>
        <h1>Our Mission</h1>
        <p>
          Our mission is simple: to make IQ testing accessible, accurate, and
          insightful for everyone. We aim to demystify intelligence testing and
          provide a tool that empowers individuals to learn more about
          themselves and their cognitive strengths.
        </p>
      </div>
      <div id="about-us-main-content">
        <h3>What We Offer</h3>
        <ul>
          <li>
            <strong>Accurate IQ Tests:</strong> Our tests are designed by
            experts and utilize advanced algorithms to ensure accuracy and
            reliability.
          </li>
          <li>
            <strong>Detailed Analysis:</strong> Gain in-depth insights into your
            cognitive abilities with our detailed result breakdown.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Receive tailored
            suggestions and tips to help you enhance your intellectual skills.
          </li>
          <li>
            <strong>User-Friendly Experience:</strong> Our platform is designed
            to be intuitive and easy to navigate, ensuring a seamless testing
            process.
          </li>
          <li>
            <strong>Privacy and Security:</strong> We prioritize your privacy
            and ensure that your data is handled with the utmost
            confidentiality.
          </li>
        </ul>

        <h3>Why Choose IQ Test?</h3>
        <ul>
          <li>
            <strong>Expertly Crafted Tests:</strong> Our tests are developed by
            professionals with extensive experience in psychology and cognitive
            science.
          </li>
          <li>
            <strong>Comprehensive Feedback:</strong> Understand your results
            with comprehensive feedback and detailed explanations.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> We are committed to
            constantly improving our services based on the latest research and
            user feedback.
          </li>
          <li>
            <strong>Community Support:</strong> Join a community of like-minded
            individuals who are also on a journey to discover their cognitive
            potential.
          </li>
        </ul>

        <h3>Get Started Today</h3>
        <p>
          Discover your intellectual potential with IQ Test. Whether you're
          testing for curiosity, self-improvement, or personal validation, our
          platform is designed to provide you with accurate, insightful, and
          meaningful results.
        </p>
        <p>
          Thank you for choosing IQ Test. We look forward to helping you unlock
          your brilliance.
        </p>
      </div>
    </section>
  );
}
