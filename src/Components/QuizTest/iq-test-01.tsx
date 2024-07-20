// Created by Yacin
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./iq-test-01.css";
import Start from "../Pages/START";
import Quiz from "./Quiz";
import Result from "./Result";

export default function IQ_TEST_01() {
  return (
    <Router>
      {/* quiz section  */}
      <section className="quiz_parrent_01">
        <div className="App">
          <header className="App-header">
            <h1>Welcome to the Quiz Application</h1>
          </header>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}
