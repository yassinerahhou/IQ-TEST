import "./style.css";
import { useEffect } from "react";

const DisclaimerSection = ({ content }: { content: string }) => (
  <div className="disclaimer-section">
    <p>{content}</p>
  </div>
);

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="disclaimer-container">
      <div className="disclaimer-content">
        <h1>Disclaimer</h1>
        <div className="disclaimer-scroll">
          <DisclaimerSection content="The tests provided on this website are intended for entertainment purposes only. They are not designed to offer professional assessments or advice." />
          <DisclaimerSection content="Any results or feedback provided should be viewed as general information and not as a definitive measure of skills or abilities." />
          <DisclaimerSection content="We encourage users to seek professional guidance for accurate evaluations." />
        </div>
        <button className="accept-button">I Understand</button>
      </div>
    </div>
  );
}
