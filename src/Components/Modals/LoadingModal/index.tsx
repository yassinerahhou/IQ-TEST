import { useEffect, useState } from "react";
import styles from "./lodaingmodal.module.scss";

export default function LoadingModal() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Create the interval timer
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(intervalId);
          return prevCounter;
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []); //

  // Set CSS variables dynamically
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--loading-progress",
      `conic-gradient(green ${counter}%, transparent ${counter}%)`
    );
  }, [counter]);

  return (
    <>
      <div className={styles.parentDarken}>
        <div className={styles.mainModal}>
          <div className={styles.lodaingModal}>
            {/* TEXT LOADING */}
            <div className={styles.textLoading}>
              <p>
                Analysis of your responses is underway,
                <br />
                your results will be ready soon
              </p>
            </div>
            {/* LOADING COUNTER */}
            <div className={styles.loadingCounter}>
              <p>{counter}%</p>
            </div>
            {/* LI PROGRESS */}
            <div className={styles.li_anylsis}>
              <ul className={styles.ul_list}>
                {counter >= 33 && (
                  <li className={styles.analytical_li}>
                    <i className={`${styles.iconChec} fa fa-check`}></i>{" "}
                    Analytical Memory
                  </li>
                )}

                {counter >= 66 && (
                  <li className={styles.visual_li}>
                    <i className={`${styles.iconChec} fa fa-check`}></i>Visual
                    Performance
                  </li>
                )}
                {counter >= 80 && (
                  <li className={styles.time_li}>
                    <i className={`${styles.iconChec} fa fa-check`}></i>Time
                    control and reactivity
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
