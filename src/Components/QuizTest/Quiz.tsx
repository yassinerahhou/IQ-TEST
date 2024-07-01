import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./quiz.css";
import q1 from "../../assets/iqtest_images/q1.svg"; // Import your default images
// Import other images as needed

// Sample quiz data
const questions = [
  {
    type: "text",
    question: "What comes next in the sequence? 2, 4, 6, 8, ...",
    options: [
      { text: "10", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "14", isCorrect: false },
      { text: "16", isCorrect: false },
    ],
  },
  {
    type: "image",
    questionImage: q1,
    options: [
      { text: "Option A", isCorrect: false },
      { text: "Option B", isCorrect: false },
      { text: "Option C", isCorrect: true },
      { text: "Option D", isCorrect: false },
    ],
  },
  // Add more questions here
];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Navigate to the result page with score and total questions
      navigate(`/results?score=${score}&total=${questions.length}`);
    }
  };

  const handleNext = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      {questions[currentQuestionIndex].type === "text" ? (
        <p className="question-text">
          {questions[currentQuestionIndex].question}
        </p>
      ) : (
        <img
          src={questions[currentQuestionIndex].questionImage}
          alt="Question"
          className="question-image"
        />
      )}
      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
