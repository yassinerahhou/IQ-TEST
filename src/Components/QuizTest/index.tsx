// .SCSS FILE FOR THE QUIZ
import styles from "./quiztest.module.scss";
// IMPORT IMAGE FILE
import quizDataJson from "../../iqData.json";

// TEST IMAGES
import main_image from ".././../assets/iqtest_images/main_Q1-01.svg";

import q1 from "../../assets/iqtest_images/q1.svg";
import q2 from "../../assets/iqtest_images/q2.svg";
import q3 from "../../assets/iqtest_images/q3.svg";
import q4 from "../../assets/iqtest_images/q4.svg";
import q5 from "../../assets/iqtest_images/q5.svg";
import q6 from "../../assets/iqtest_images/q6.svg";
import { useEffect, useState } from "react";

export default function QuizTest() {
  // STORE DATA IN STATE
  const [quizData, setQuizData] = useState(quizDataJson);
  // STATE TO TRACK CURRENT INDEX
  const [currentIndex, setCurrentIndex] = useState(0);

  // NEXT FUNCTION FOR BTN
  const handNextQuestion = () => {
    setCurrentIndex((pervstate) =>
      pervstate === quizData.length - 1 ? 0 : pervstate + 1
    );
  };

  // PERV QUESTION FUNCTION
  const handlhandlPerviousQuestion = () => {
    setCurrentIndex((pervstate) =>
      pervstate === 0 ? quizData.length - 1 : pervstate - 1
    );
  };

  // FIRS USE EFFUCT USED FOR CHANING IMAGES AUTO AFTER
  // 10s test
  useEffect(() => {
    const interVal = setInterval(() => {
      setCurrentIndex((pervstate) =>
        pervstate === quizData.length - 1 ? 0 : pervstate + 1
      );
    }, 5000);

    return () => clearInterval(interVal);
  }, [quizData]);

  return (
    <>
      <div className={styles.main_quiz_container}>
        <div className={styles.sub_quiz}>
          <div className={styles.boxIq_timer}>
            <p className={styles.timer_count}>00:00</p>
          </div>
          <div className={styles.boxIq_progress}>
            <p className={styles.progress_bar}></p>
          </div>
          <div className={styles.boxIq_iqtestBoxs}>
            <div className={styles.main_images}>
              <img src={quizData[currentIndex].main_image} alt="main img" />
            </div>
            <div className={styles.missing_images}>
              <label htmlFor="mark1">
                <div className={styles.box_card}>
                  <p className={styles.numberd_card}>1</p>
                  <img src={q1} alt="img q1" />
                  <input
                    className="input"
                    type="checkbox"
                    name="mark1"
                    id="mark1"
                  />
                </div>
              </label>

              <div className={styles.box_card}>
                <p className={styles.numberd_card}>2</p>
                <img src={q2} alt="img q2" />
              </div>
              <div className={styles.box_card}>
                <p className={styles.numberd_card}>3</p>
                <img src={q3} alt="img q3" />
              </div>
              <div className={styles.box_card}>
                <p className={styles.numberd_card}>4</p>
                <img src={q4} alt="img q4" />
              </div>
              <div className={styles.box_card}>
                <p className={styles.numberd_card}>5</p>
                <img src={q5} alt="img q5" />
              </div>
              <div className={styles.box_card}>
                <p className={styles.numberd_card}>6</p>
                <img src={q6} alt="img q6" />
              </div>
            </div>
          </div>
          <div className={styles.boxIq_current_question}>
            <div className={styles.current_qustion_index}>
              <button
                className={styles.last_btn}
                onClick={handlhandlPerviousQuestion}
              >
                LAST
              </button>
            </div>
            <div className={styles.current_qustion_index}>
              <p className={styles.para_questions}>
                <p>
                  {currentIndex}/{quizData.length}
                </p>
              </p>
            </div>
            <div className={styles.next_question_btn}>
              <button className={styles.btn_next} onClick={handNextQuestion}>
                NEXT
              </button>
            </div>
          </div>
          <div className={styles.boxIq_done}>
            <button className={styles.btn_done}>Finish</button>
          </div>
        </div>
      </div>
    </>
  );
}
