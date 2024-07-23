// import React from "react";
import { useEffect } from "react";
import "./style.css";

const TermsSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="terms-section">
    <h3>{title}</h3>
    <br />
    <p>{content}</p>
  </div>
);

export default function Terms() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms of Use</h1>
        <div className="terms-scroll">
          <TermsSection
            title="1. Acceptance of Terms"
            content="By accessing and using this online IQ and logical thinking test, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our service."
          />
          <TermsSection
            title="2. Test Integrity"
            content="You agree to take the test honestly and not to use any external aids or assistance. Any attempt to manipulate the test results may lead to immediate termination of your session."
          />
          <TermsSection
            title="3. Privacy"
            content="We respect your privacy. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data."
          />
          <TermsSection
            title="4. Intellectual Property"
            content="All content on this website, including the IQ and logical thinking tests, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission."
          />
          <TermsSection
            title="5. Disclaimer"
            content="The results of our IQ and logical thinking tests are for entertainment and self-assessment purposes only. They should not be considered as professional psychological evaluations."
          />
          <TermsSection
            title="6. Modifications"
            content="We reserve the right to modify these Terms of Use at any time. Your continued use of the service after such modifications constitutes your acceptance of the new terms."
          />
          <TermsSection
            title="7. Limitation of Liability"
            content="We are not liable for any damages arising from your use of our service or your inability to use our service."
          />
          <TermsSection
            title="8. Refund Policy and Satisfaction Guarantee"
            content="At Brain IQ, we stand behind the quality of our IQ and logical thinking tests with a 100% Satisfaction Guarantee. If you are not completely satisfied with your experience, we offer a comprehensive refund policy:

            1. Full Refund Period: You have 30 days from the date of purchase to request a full refund, no questions asked.
            
           
            
            We are committed to your satisfaction and intellectual growth. If you have any questions about our refund policy or need assistance, please don't hesitate to reach out to our customer support team."
          />
        </div>
        <button className="accept-button">Accept Terms</button>
      </div>
    </div>
  );
}
