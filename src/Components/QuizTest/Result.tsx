import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Certificate from "../Certificate";
import NameModal from "../Modals/NameModal";
import "./result.css";

const IQResultComponent: React.FC<{ score: number; total: number }> = ({
  score,
  total,
}) => {
  const iqScore = Math.round((score / total) * 50 + 50); // Simple conversion, adjust as needed

  const getIQCategory = (iq: number) => {
    if (iq >= 130) return "Very Superior";
    if (iq >= 120) return "Superior";
    if (iq >= 110) return "High Average";
    if (iq >= 90) return "Average";
    if (iq >= 80) return "Low Average";
    if (iq >= 70) return "Borderline";
    return "Extremely Low";
  };

  const category = getIQCategory(iqScore);

  const data = [
    { name: "Extremely Low", uv: 70, pv: 70 },
    { name: "Borderline", uv: 80, pv: 80 },
    { name: "Low Average", uv: 90, pv: 90 },
    { name: "Average", uv: 100, pv: 100 },
    { name: "High Average", uv: 110, pv: 110 },
    { name: "Superior", uv: 120, pv: 120 },
    { name: "Very Superior", uv: 130, pv: 130 },
  ];

  return (
    <div className="iq-result-container">
      <div className="iq-score">
        <span className="score-number">{iqScore}</span>
        <span className="score-label">IQ Score</span>
      </div>
      <p className="iq-category">
        Your score falls in the <strong>{category}</strong> range
      </p>
      <div className="iq-chart">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis domain={[60, 140]} />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Results: React.FC = () => {
  const [isNameModal, setIsNameModal] = useState(false);
  const [username, setUsername] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get("score") || "0", 10);
  const total = parseInt(searchParams.get("total") || "0", 10);

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
    <div className="results-container">
      <h2>Your IQ Test Results</h2>
      <IQResultComponent score={score} total={total} />
      <br />{" "}
      <div className="score-details">
        You answered {score} out of {total} questions correctly.
      </div>
      <br />
      <div className="nameDiv">
        {username ? (
          <div>
            <Certificate username={username} ref={certificateRef} />
            <div className="BTNSwa">
              <ReactToPrint
                trigger={() => (
                  <button className="downloaditBtn">
                    DOWNLOAD IT PDF{" "}
                    <i className={`iconPdf bi bi-filetype-pdf`}></i>
                  </button>
                )}
                content={() => certificateRef.current}
              />
              <button onClick={handleDownloadPNG} className="downloaditBtn">
                DOWNLOAD IT PNG <i className={`iconPng bi bi-filetype-png`}></i>
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setIsNameModal(!isNameModal)}>
            FILL THE FORM AND GET INSTANT CERTIFICATE
          </button>
        )}
      </div>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
      {isNameModal && (
        <NameModal nameValue={getNameValue} setIsNameModal={setIsNameModal} />
      )}
    </div>
  );
};

export default Results;
