// Results.tsx
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./result.css";
import NameModal from "../Modals/NameModal";

const Results: React.FC = () => {
  // STATE FOR SHOWING MODAL NAME
  const [isNameModal, setIsNameModal] = useState(false);
  const [username, setUsername] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get("score") || "0", 10);
  const total = parseInt(searchParams.get("total") || "0", 10);

  const percentage = Math.round((score / total) * 100);

  // CALLBACK FUNCTION TO RETIVE NAME JUST FOR CHECKING IF FULL HAVE VALUE OR NOT
  // AND DOING SOME STUFF WITH THAT NAME
  const getNameValue = (nameValue) => {
    setUsername(nameValue);
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="results-container">
        <h2>Your IQ Test Results</h2>
        <div className="score-display">
          <div className="score-circle">
            <span className="score-number">{percentage}%</span>
          </div>
        </div>
        <p>
          You scored {score} out of {total} questions correctly.
        </p>
        {/* DIV FOR FORM NAME AND GIVE USER certificate WITH BANE */}
        <div onClick={() => setIsNameModal(!isNameModal)} className="nameDiv">
          {username ? (
            <button>DOWNLOAD IT!</button>
          ) : (
            <button>FILL THE FORM AND GET INSTANT CERTIFICATE</button>
          )}
        </div>
        <div className="result-message">
          {percentage >= 80 ? (
            <p>Excellent! You have a high level of logical thinking skills.</p>
          ) : percentage >= 60 ? (
            <p>Good job! You have above-average logical thinking skills.</p>
          ) : percentage >= 40 ? (
            <p>
              Not bad! You have average logical thinking skills with room for
              improvement.
            </p>
          ) : (
            <p>
              Keep practicing! You can enhance your logical thinking skills with
              more exercises.
            </p>
          )}
        </div>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
      {isNameModal && (
        <NameModal
          nameValue={getNameValue}
          setIsNameModal={setIsNameModal}
          isNameModal={isNameModal}
        />
      )}
    </>
  );
};

export default Results;
