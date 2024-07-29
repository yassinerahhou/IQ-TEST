import React from "react";
import "./feedback-style.css";

interface FeedbackItemProps {
  pictureClass: string;
  text: string;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ pictureClass, text }) => (
  <div className="reveiw-area">
    <div className={`picture-area ${pictureClass}`}></div>
    <div className="text-area">
      <p>{text}</p>
    </div>
  </div>
);

interface FeedbackData {
  pictureClass: string;
  text: string;
}

const Feedback: React.FC = () => {
  const feedbackItems: FeedbackData[] = [
    {
      pictureClass: "pic-1",
      text: "I found the IQ test on your website to be quite engaging. The instructions were clear, making it easy for me to understand what was expected. The design was visually appealing and user-friendly, which helped me stay focused throughout the test. I particularly enjoyed the variety of question types, which kept me challenged. The personalized feedback at the end of the test provided me with valuable insights into my cognitive abilities. Overall, it was a stimulating experience, and I would definitely recommend it to others.",
    },
    {
      pictureClass: "pic-2",
      text: "Taking the Brainbooster on your website was a positive experience for me. The layout was intuitive, making it simple to navigate through the questions. The instructions were straightforward, and I appreciated the mix of difficulty levels in the questions. The personalized feedback at the end was insightful, giving me a better understanding of my cognitive strengths and areas where I can improve. Overall, it was a well-designed test that I would be happy to recommend to friends.",
    },
    {
      pictureClass: "pic-3",
      text: "I thoroughly enjoyed the IQ test on your website. The questions were challenging yet engaging, keeping me focused from start to finish. The website's design was sleek and modern, making it a pleasure to use. The personalized feedback at the end of the test was enlightening, offering valuable insights into my cognitive abilities. Overall, it was a fantastic experience, and I would definitely take the test again in the future.",
    },
  ];

  return (
    <div className="parent_feedback">
      <section className="feedback-section-parent">
        <h1 className="h1_headline"> Brain-iQ FEEDBACK</h1>
        {feedbackItems.map((item, index) => (
          <FeedbackItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Feedback;
