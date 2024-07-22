import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./kids.css";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
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
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleNextQuestion();
    }
  }, [timeLeft, showResults]);

  const handleAnswerClick = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      setShowResults(true);
    }
  };

  const getScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].answer
    ).length;
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setTimeLeft(30);
  };

  return (
    <div className="kids-quiz-container">
      <div className="quiz-content">
        <div className="kidsCard">
          <div className="headlineCard">
            <h1>Brain QI: Kids Challenge</h1>
          </div>
          <div className="descriptionKidsCard">
            <p>
              Welcome to the Brain QI Kids Challenge! Test your knowledge and
              have fun with our exciting quiz. Answer quickly and see how many
              questions you can get right!
            </p>
          </div>
        </div>

        {!showResults ? (
          <div className="question-section fadeIn">
            <div className="timer">Time left: {timeLeft}s</div>
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
            <h2 className="results-title">Your Brain QI Score</h2>
            <p className="results-score">
              You got <span className="score-highlight">{getScore()}</span> out
              of {questions.length} correct!
            </p>
            <p className="result-message">
              {getScore() === questions.length
                ? "Wow! You're a genius! 🎉"
                : getScore() > questions.length / 2
                ? "Great job! You're super smart! 🌟"
                : "Good effort! Keep practicing to improve your Brain QI! 💪"}
            </p>
            <button onClick={restartQuiz} className="restart-btn">
              Try Again
            </button>
            <Link to="/" className="home-link">
              Back to Brain QI Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
