// Quiz.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

// Import your images here
import q1 from "../../assets/iqtest_images/q1.svg";
// Import other images as needed

const questions = [
  {
    type: "text",
    question:
      "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
    options: [
      { text: "City", isCorrect: false },
      { text: "Animal", isCorrect: false },
      { text: "Ocean", isCorrect: true },
      { text: "Country", isCorrect: false },
    ],
  },
  {
    type: "image",
    questionImage: q1,
    question: "Which figure completes the pattern?",
    options: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    type: "text",
    question:
      "Which number should come next in this series? 25, 24, 22, 19, 15",
    options: [
      { text: "14", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "5", isCorrect: false },
    ],
  },
  // Add more questions here...
];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          navigate(
            `/results?score=${calculateScore()}&total=${questions.length}`
          );
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleAnswer = (index: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    navigate(`/results?score=${calculateScore()}&total=${questions.length}`);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      if (answer !== null && questions[index].options[answer].isCorrect) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <div className="timer">Time left: {formatTime(timeLeft)}</div>
      </div>
      <div className="question-container">
        {questions[currentQuestionIndex].type === "text" ? (
          <p className="question-text">
            {questions[currentQuestionIndex].question}
          </p>
        ) : (
          <>
            <img
              src={questions[currentQuestionIndex].questionImage}
              alt="Question"
              className="question-image"
            />
            <p className="question-text">
              {questions[currentQuestionIndex].question}
            </p>
          </>
        )}
      </div>
      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              userAnswers[currentQuestionIndex] === index ? "selected" : ""
            }`}
            onClick={() => handleAnswer(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
