// src/components/KIDS.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./kids.css";

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "What color is the sky on a clear day?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Blue",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Elephant", "Tiger", "Lion", "Giraffe"],
    answer: "Lion",
  },
  {
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is H2O more commonly known as?",
    options: ["Oxygen", "Hydrogen", "Water", "Helium"],
    answer: "Water",
  },
  {
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    question: "Which country is famous for the maple leaf?",
    options: ["USA", "Canada", "UK", "Australia"],
    answer: "Canada",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    answer: "Mercury",
  },
  {
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: "Diamond",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Go", "Gi"],
    answer: "Au",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "Thailand"],
    answer: "Japan",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
    answer: "Everest",
  },
];

export default function KIDS() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const getScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].answer
    ).length;
  };

  return (
    <div className="kids-quiz-container">
      {/* KID BG CARD */}
      <div className="kidsCard">
        <div className="headlineCard">
          <h1>IQ TEST FOR KIDS</h1>
        </div>
        <div className="descriptionKidsCard">
          <p>
            The "Kids IQ Test" offers a playful quiz with multiple-choice
            questions tailored for children, tracking their progress and showing
            results at the end. Kids can see their score and easily return to
            the home page.
          </p>
        </div>
      </div>
      <div className="quiz-content">
        {!showResults ? (
          <div className="question-section fadeIn">
            <h2 className="question-title">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="options-grid">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="option-btn"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="quiz-progress">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
        ) : (
          <div className="results-section fadeIn">
            <h2 className="results-title">Your Results</h2>
            <p className="results-score">
              You scored <span className="score-highlight">{getScore()}</span>{" "}
              out of {questions.length}
            </p>
            <Link to="/" className="home-link">
              Go back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
