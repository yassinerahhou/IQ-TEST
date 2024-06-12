// .SCSS FILE FOR THE QUIZ
import styles from "./quiztest.module.scss";
// TEST IMAGES
import main_image from ".././../assets/iqtest_images/main_Q1-01.svg";

import q1 from "../../assets/iqtest_images/q1.svg";
import q2 from "../../assets/iqtest_images/q2.svg";
import q3 from "../../assets/iqtest_images/q3.svg";
import q4 from "../../assets/iqtest_images/q4.svg";
import q5 from "../../assets/iqtest_images/q5.svg";
import q6 from "../../assets/iqtest_images/q6.svg";

export default function QuizTest() {
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
              <img src={main_image} alt="main img" />
            </div>
            <div className={styles.missing_images}>
              <div className={styles.box_card}>
                <p className={styles.numberd_card}>1</p>
                <img src={q1} alt="img q1" />
              </div>
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
            <div className={styles.current_qustion_index}>LAST</div>
            <div className={styles.current_qustion_index}>
              <p className={styles.para_questions}>1/20</p>
            </div>
            <div className={styles.next_question_btn}>NEXT</div>
          </div>
          <div className={styles.boxIq_done}>
            <button className={styles.btn_done}>Finish</button>
          </div>
        </div>
      </div>
    </>
  );
}
