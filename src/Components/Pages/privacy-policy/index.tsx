import React, { useEffect } from "react";
import "./style.css";

const PolicySection = ({
  title,
  content,
}: {
  title: string;
  content: string | React.ReactNode;
}) => (
  <div className="policy-section">
    <h3>{title}</h3>
    <br />
    {typeof content === "string" ? <p>{content}</p> : content}
  </div>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Privacy Policy</h1>
        <div className="policy-scroll">
          <PolicySection
            title="1. Introduction"
            content="Welcome to the Brainbooster website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."
          />
          <PolicySection
            title="2. Information We Collect"
            content={
              <>
                <p>
                  We collect personal information that you provide to us when
                  you register on our website, subscribe to our newsletter, fill
                  out a form, or engage with our services. This may include:
                </p>
                <ul>
                  <li>Name and email address</li>
                  <li>Age and gender</li>
                  <li>Test results and performance data</li>
                  <li>Usage data and analytics</li>
                  <li>Device information and IP address</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </>
            }
          />
          <PolicySection
            title="3. How We Use Your Information"
            content={
              <>
                <p>
                  We use the information we collect for various purposes,
                  including:
                </p>
                <ul>
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about our services</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Protecting our services and users</li>
                  <li>Personalizing content and advertisements</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </>
            }
          />
          <PolicySection
            title="4. Data Security"
            content="We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
          />
          <PolicySection
            title="5. Your Rights"
            content="You have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact us using the information provided in the 'Contact Us' section."
          />
          <PolicySection
            title="6. Third-Party Services"
            content="We may use third-party services, such as Google AdSense, to serve advertisements. These services may use cookies and similar technologies to collect information about your visits to our site and other websites to provide personalized advertising based on your browsing activities and interests."
          />
          <PolicySection
            title="7. Google AdSense"
            content={
              <>
                <p>
                  We use Google AdSense, a web advertising service provided by
                  Google, Inc., to serve ads on our website. Google AdSense may
                  use:
                </p>
                <ul>
                  <li>
                    Cookies to serve ads based on your prior visits to our
                    website or other websites.
                  </li>
                  <li>
                    Web beacons to collect information about your use of our
                    site and other sites to provide targeted advertising.
                  </li>
                  <li>
                    Personal information such as your IP address and browsing
                    behavior.
                  </li>
                </ul>
                <p>
                  You can opt-out of personalized advertising by visiting
                  Google's Ads Settings. For more information on how Google uses
                  information from sites or apps that use their services, please
                  visit Google's Privacy & Terms page.
                </p>
              </>
            }
          />
          <PolicySection
            title="8. Children's Privacy"
            content="Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately."
          />
          <PolicySection
            title="9. Changes to This Privacy Policy"
            content="We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date at the top of this Privacy Policy."
          />
          <PolicySection
            title="10. Contact Us"
            content={
              <>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p>Email: privacy@brainbooster.com</p>
                <p>Address: 123 IQ Street, Brain City, 12345</p>
              </>
            }
          />
        </div>
        <button className="accept-button">I Understand and Accept</button>
      </div>
    </div>
  );
}
