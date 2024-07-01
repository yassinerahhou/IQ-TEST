// Results.tsx

import React from "react";
import { useLocation } from "react-router-dom";

const Results: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = Number(searchParams.get("score"));
  const total = Number(searchParams.get("total"));

  const percentage = Math.round((score / total) * 100);

  let resultMessage = "";
  if (percentage >= 70) {
    resultMessage = "Congratulations! You did great!";
  } else if (percentage >= 50) {
    resultMessage = "Not bad! Keep practicing!";
  } else {
    resultMessage = "Keep working on it! You can improve!";
  }

  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <p>
        You scored {score} out of {total} ({percentage}%)
      </p>
      <p>{resultMessage}</p>
      {/* Add more personalized feedback or actions based on score */}
    </div>
  );
};

export default Results;
