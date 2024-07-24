import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import Certificate from "../Certificate";
import NameModal from "../Modals/NameModal";
import "./result.css";

const Results: React.FC = () => {
  const [isNameModal, setIsNameModal] = useState(false);
  const [username, setUsername] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get("score") || "0", 10);
  const total = parseInt(searchParams.get("total") || "0", 10);
  const percentage = Math.round((score / total) * 100);

  const getNameValue = (nameValue: string) => {
    setUsername(nameValue);
  };

  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadPNG = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "certificate.png";
        link.click();
      });
    }
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
        <div className="nameDiv">
          {username ? (
            <div>
              <Certificate username={username} ref={certificateRef} />
              <div>
                <ReactToPrint
                  trigger={() => (
                    <button className="downloaditBtn">DOWNLOAD IT PDF</button>
                  )}
                  content={() => certificateRef.current}
                />
                <button onClick={handleDownloadPNG} className="downloaditBtn">
                  DOWNLOAD IT PNG
                </button>
              </div>
            </div>
          ) : (
            <button onClick={() => setIsNameModal(!isNameModal)}>
              FILL THE FORM AND GET INSTANT CERTIFICATE
            </button>
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
            <p className="achievementP">
              Keep practicing! You can enhance your logical thinking skills with
              more exercises. ⭐
            </p>
          )}
        </div>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
      {isNameModal && (
        <NameModal nameValue={getNameValue} setIsNameModal={setIsNameModal} />
      )}
    </>
  );
};

export default Results;
