import React, { useState, useEffect } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What is included in the Free plan?",
    answer:
      "The Free plan includes a basic IQ test with limited questions, a basic result overview, and an ad-supported experience.",
  },
  {
    question: "What is included in the Standard plan?",
    answer:
      "The Standard plan offers full access to all IQ test questions, detailed result analysis, an ad-free experience, and basic cognitive insights.",
  },
  {
    question: "What is included in the Premium plan?",
    answer:
      "The Premium plan includes all features of the Standard plan, plus personalized cognitive improvement tips, historical test results and progress tracking, and premium customer support.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. We also offer a 30-day money-back guarantee if you're not satisfied with the service.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@brainiq.com or through our contact page on the website.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleQuestionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  return (
    <>
      <div className="faq-container">
        <h1 className="h1_faq">Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleQuestionClick(index)}
            >
              <h2>{item.question}</h2>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <p className={activeIndex === index ? "answer active" : "answer"}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      {showScrollTop && (
        <footer className="sticky-footer">
          <button onClick={handleScrollTop} className="scroll-top-btn">
            Back to Top ↑
          </button>
        </footer>
      )}
    </>
  );
};

export default Faq;
