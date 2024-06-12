import { Link } from "react-router-dom";
import styles from "./start.module.scss";

export default function Start() {
  return (
    <>
      <div className={styles.card_ready}>
        <div className={styles.card_kee_mind}>
          <div className={styles.box_ready_headline}>
            <h1>Keep the following points in mind before you start</h1>
          </div>
          <div className={styles.box_ready_ul}>
            <ul className={styles.ul_following}>
              <li>There will be 20 questions with increasing difficulty.</li>
              <li>There is only one correct answer to each question.</li>
              <li>You have only 20 minutes to take the test.</li>
              <li>You can skip the questions and answer them later.</li>
              <li>Unanswered questions will count as errors</li>
            </ul>
          </div>
          <div className={styles.box_ready_btns}>
            <button className={styles.canacel_btn}>Canacel</button>
            <Link to="/QuizTest">
              <button className={styles.start_btn}>Start test</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
