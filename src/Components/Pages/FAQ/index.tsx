import React, { useState } from "react";
import "./Faq.css"; // Import your CSS file

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Hide answer if already active
    } else {
      setActiveIndex(index); // Show answer
    }
  };

  return (
    <div className="faq-container">
      <h1 className="h1_faq">Frequently Asked Questions</h1>
      <div className="faq-item" onClick={() => handleQuestionClick(0)}>
        <h2>What is included in the Free plan?</h2>
        <p className={activeIndex === 0 ? "answer active" : "answer"}>
          The Free plan includes a basic IQ test with limited questions, a basic
          result overview, and an ad-supported experience.
        </p>
      </div>
      <div className="faq-item" onClick={() => handleQuestionClick(1)}>
        <h2>What is included in the Standard plan?</h2>
        <p className={activeIndex === 1 ? "answer active" : "answer"}>
          The Standard plan offers full access to all IQ test questions,
          detailed result analysis, an ad-free experience, and basic cognitive
          insights.
        </p>
      </div>
      <div className="faq-item" onClick={() => handleQuestionClick(2)}>
        <h2>What is included in the Premium plan?</h2>
        <p className={activeIndex === 2 ? "answer active" : "answer"}>
          The Premium plan includes all features of the Standard plan, plus
          personalized cognitive improvement tips, historical test results and
          progress tracking, and premium customer support.
        </p>
      </div>
      <div className="faq-item" onClick={() => handleQuestionClick(3)}>
        <h2>Can I cancel my subscription?</h2>
        <p className={activeIndex === 3 ? "answer active" : "answer"}>
          Yes, you can cancel your subscription at any time. We also offer a
          30-day money-back guarantee if you're not satisfied with the service.
        </p>
      </div>
      <div className="faq-item" onClick={() => handleQuestionClick(4)}>
        <h2>How do I contact customer support?</h2>
        <p className={activeIndex === 4 ? "answer active" : "answer"}>
          You can reach our customer support team via email at
          support@iqtest.com or through our contact page on the website.
        </p>
      </div>
    </div>
  );
};

export default Faq;
