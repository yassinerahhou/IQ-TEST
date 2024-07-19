import React, { useEffect } from "react";
import "./style.css";

export default function Privacy() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
      </header>
      <main className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the IQ Test website. We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>
        </section>
        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when you
            register on our website, subscribe to our newsletter, fill out a
            form, or engage with our services. This may include:
          </p>
          <ul>
            <li>Name and email address</li>
            <li>Age and gender</li>
            <li>Test results and performance data</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Protecting our services and users</li>
          </ul>
        </section>
        <section>
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>
        <section>
          <h2>5. Your Rights</h2>
          <p>
            You have certain rights regarding your personal information,
            including the right to access, correct, or delete the data we hold
            about you. To exercise these rights, please contact us using the
            information provided below.
          </p>
        </section>
        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>Email: privacy@iqtest.com</p>
          <p>Address: 123 IQ Street, Brain City, 12345</p>
        </section>
      </main>
      <footer className="privacy-footer">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
