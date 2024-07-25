import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

// Import your images here
// import q1 from "../../assets/iqtest_images/q1.svg";
import LoadingModal from "../Modals/LoadingModal";
import quest_1 from "../../assets/iqtest_images/q1/Q1-01.svg";
import answer_1 from "../../assets/iqtest_images/q1/Q1-02.svg";
import answer_2 from "../../assets/iqtest_images/q1/Q1-03.svg";
import answer_3 from "../../assets/iqtest_images/q1/Q1-04.svg";
import answer_4 from "../../assets/iqtest_images/q1/Q1-07.svg";
import q14 from "../../assets/q14/Q14.svg";
import q14_01 from "../../assets/q14/q14-01.svg";
import q14_02 from "../../assets/q14/q14-02.svg";
import q14_03 from "../../assets/q14/a14-03.svg";
import q14_04_r from "../../assets/q14/q14-r.svg";

import q16 from "../../assets/q16/q16.svg";
import q16_1 from "../../assets/q16/q16-01.svg";
import q16_2 from "../../assets/q16/q16-2.svg";
import q16_3 from "../../assets/q16/q16-03.svg";
import q16_r from "../../assets/q16/q16_r.svg";

import q17 from "../../assets/q17/q17.svg";
import q17_1 from "../../assets/q17/q17-1.svg";
import q17_2 from "../../assets/q17/q17-2.svg";
import q17_3 from "../../assets/q17/q17-3.svg";
import q17_r from "../../assets/q17/q17-r.svg";
// Import other images as needed

interface Option {
  text: string;
  image?: string;
  isCorrect: boolean;
}

interface Question {
  type: "text" | "image";
  question: string;
  questionImage?: string;
  options: Option[];
}

const questions: Question[] = [
  // update questin 7/25
  {
    type: "text",
    question: "How many months in a year have at least 28 days?",
    options: [
      { text: "february", isCorrect: false },
      {
        text: "All months of the year have 28 days, January to December.",
        isCorrect: true,
      },
      { text: "january", isCorrect: false },
      { text: " December", isCorrect: false },
    ],
  },
  {
    type: "text",
    question:
      "You need to enter a dark room and only have one match. What do you light first: an oil heater, an oil lamp, or a candle?",
    options: [
      { text: "An oil heater", isCorrect: false },
      {
        text: "The match",
        isCorrect: true,
      },
      { text: "A candle", isCorrect: false },
      { text: " An oil lamp", isCorrect: false },
    ],
  },
  {
    type: "text",
    question: "What number comes next in the sequence: 2, 4, 8, 16, ?:",
    options: [
      { text: "24", isCorrect: false },
      { text: "32", isCorrect: true },
      { text: "64", isCorrect: false },
      { text: "128", isCorrect: false },
    ],
  },
  // question 2
  {
    type: "text",
    question:
      "If a clock shows 3:45, what is the angle between the hour and minute hands?",
    options: [
      { text: "90°", isCorrect: false },
      { text: "97.5°", isCorrect: true },
      { text: "82.5°", isCorrect: false },
      { text: " 75°", isCorrect: false },
    ],
  },
  // question 3
  {
    type: "text",
    question:
      "Sally is 54 years old, and her mother is 80. How many years ago was Sally's mother three times Sally's age?",
    options: [
      { text: "24", isCorrect: false },
      { text: "26", isCorrect: true },
      { text: "28", isCorrect: false },
      { text: "30", isCorrect: false },
    ],
  },
  // qustion 4
  {
    type: "text",
    question: "If all Zips are Zaps, and some Zaps are Zops, then:",
    options: [
      { text: "All Zips are definitely Zops", isCorrect: false },
      { text: "Some Zips might be Zops", isCorrect: true },
      { text: "No Zips are Zops", isCorrect: false },
      { text: "All Zops are definitely Zips", isCorrect: false },
    ],
  },
  // question 5
  {
    type: "text",
    question: "If MONDAY is coded as QSRHEZ, how would TUESDAY be coded?",
    options: [
      { text: "VWIWHEZ", isCorrect: false },
      { text: "XYGWHEZ", isCorrect: true },
      { text: "XYGWHEZ", isCorrect: false },
      { text: "VWIWHEZ", isCorrect: false },
    ],
  },
  // questions 6
  {
    type: "text",
    question:
      "If a man walks 1 km south, then 1 km east, then 1 km north, where is he in relation to his starting point?",
    options: [
      { text: " 1 km west", isCorrect: false },
      { text: "1 km east", isCorrect: true },
      { text: "Back where he started", isCorrect: false },
      { text: " 1 km south", isCorrect: false },
    ],
  },
  // questions7
  {
    type: "text",
    question: " 74, 83, 92, 101, 110",
    options: [
      { text: "118", isCorrect: false },
      {
        text: "119 ",
        isCorrect: true,
      },
      { text: "120", isCorrect: false },
      { text: "122", isCorrect: false },
    ],
  },

  // end of edit
  {
    type: "image",
    question: "Which figure completes the pattern?",
    questionImage: quest_1,
    // change q1 to real suggestions
    options: [
      {
        text: "A",
        image: answer_1,
        isCorrect: false,
      },
      { text: "B", image: answer_2, isCorrect: false },
      { text: "C", image: answer_3, isCorrect: true },
      { text: "D", image: answer_4, isCorrect: false },
    ],
  },
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
    type: "text",
    question: " 4, 6, 9, 6, 14, 6, ?:",
    options: [
      { text: "14", isCorrect: false },
      { text: "9", isCorrect: false },
      { text: "19", isCorrect: true },
      { text: "16", isCorrect: false },
    ],
  },
  {
    type: "text",
    question: " 831, 842, 853, 864, 875, ?:",
    options: [
      { text: "880 ", isCorrect: false },
      { text: "886", isCorrect: true },
      { text: "890", isCorrect: false },
      { text: "892", isCorrect: false },
    ],
  },
  // questions 14
  {
    type: "image",
    question: "Which figure completes the pattern?",
    questionImage: q14,
    // change q1 to real suggestions
    options: [
      {
        text: "A",
        image: q14_02,
        isCorrect: false,
      },
      { text: "B", image: q14_01, isCorrect: false },
      { text: "C", image: q14_04_r, isCorrect: true },
      { text: "D", image: q14_03, isCorrect: false },
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
  // QUESTION 16
  {
    type: "image",
    question: "Choose your answer?",
    questionImage: q16,
    options: [
      {
        text: "A",
        image: q16_2,
        isCorrect: false,
      },
      { text: "B", image: q16_1, isCorrect: false },
      { text: "C", image: q16_r, isCorrect: true },
      { text: "D", image: q16_3, isCorrect: false },
    ],
  },
  // q17
  {
    type: "image",
    question: "Choose your answer?",
    questionImage: q17,
    options: [
      {
        text: "A",
        image: q17_2,
        isCorrect: false,
      },
      { text: "B", image: q17_1, isCorrect: false },
      { text: "C", image: q17_r, isCorrect: true },
      { text: "D", image: q17_3, isCorrect: false },
    ],
  },
  // 18
  {
    type: "text",
    question: "What number should replace the question mark? 64 : 8 :: 36 :? ",
    options: [
      { text: "4", isCorrect: false },
      {
        text: "6",
        isCorrect: true,
      },
      { text: "9", isCorrect: false },
      { text: " 12", isCorrect: false },
    ],
  },
  // 19
  {
    type: "text",
    question:
      "If you rearrange the letters [ NAIBRIARWE ], you get the name of a ",
    options: [
      { text: "Country", isCorrect: false },
      {
        text: "Animal ",
        isCorrect: true,
      },
      { text: "Profession", isCorrect: false },
      { text: " City", isCorrect: false },
    ],
  },
  // 20
  {
    type: "text",
    question:
      "A clock loses 2 minutes every hour. If it's set correctly at noon, what time will it show at 6 PM the same day?",
    options: [
      { text: " 5:48 PM", isCorrect: true },
      {
        text: " 5:50 PM  ",
        isCorrect: false,
      },
      { text: "5:52 PM", isCorrect: false },
      { text: " 5:54 PM ", isCorrect: false },
    ],
  },
];

const Quiz: React.FC = () => {
  // QOUTE LIST U CAN ADD MUCH AS U WANT
  const quotes = [
    "Boost your brainpower! 🧠✨",
    "Unlock your potential! 🔓📊",
    "Challenge your mind! 🧩🤔",
    "Discover your IQ! 🎯🔍",
    "How sharp is your mind? 🧠📝",
    "Get IQ insights! 💡🧠",
    "Elevate your brain game! 🚀🧠",
    "Just 3% pass the test at 100%! 🚀📉",
  ];

  // STATE FOR QOUTE FOR FUN ABOUT RATING AND PPL PASS THIS TEST
  const [qouteCurrentIndex, setQouteCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  const calculateScore = useCallback(() => {
    return userAnswers.reduce((score, answer, index) => {
      if (answer !== null && questions[index].options[answer].isCorrect) {
        return (score as number) + 1;
      }
      return score;
    }, 0) as number;
  }, [userAnswers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          const score = calculateScore();
          if (score !== null && score !== undefined) {
            navigate(`/results?score=${score}&total=${questions.length}`);
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, calculateScore]);

  const handleAnswer = (index: number) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = index;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const score = calculateScore();
      if (score !== null && score !== undefined) {
        navigate(`/results?score=${score}&total=${questions.length}`);
      }
    }, 10000);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  // USEFFET FOR QOUTE PASS AUTO PALY FOR SOME SEC
  useEffect(() => {
    const indexInterval = setInterval(() => {
      setQouteCurrentIndex((pstate) => (pstate + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(indexInterval);
  }, []);

  return (
    <>
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          {/* QOUTES  */}
          <div className="qouteList">
            <p>{quotes[qouteCurrentIndex]}</p>
          </div>
          <div className="timer">Time left: {formatTime(timeLeft)}</div>
        </div>
        <div className="question-container">
          {currentQuestion.type === "image" &&
            currentQuestion.questionImage && (
              <img
                src={currentQuestion.questionImage}
                alt="Question"
                className="question-image"
              />
            )}
          <p className="question-text">{currentQuestion.question}</p>
        </div>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                userAnswers[currentQuestionIndex] === index ? "selected" : ""
              }`}
              onClick={() => handleAnswer(index)}
            >
              {option.image && (
                <img
                  src={option.image}
                  alt={option.text}
                  className="option-image"
                />
              )}
              <span>{option.text}</span>
            </button>
          ))}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <i className={`iconArrowLeft bi bi-arrow-left`}></i>Previous
          </button>
          <button onClick={handleSubmit} className="submit-button">
            Submit <i className="bi bi-check2-square"></i>
          </button>
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next <i className={`iconArrowRight bi bi-arrow-right`}></i>
          </button>
        </div>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default Quiz;
