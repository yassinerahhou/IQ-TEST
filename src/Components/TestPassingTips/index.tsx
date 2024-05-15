import styles from "./testpassingtips.module.scss";

//IMGS FOR THE SECTION
import img_1 from "../../assets/passingtest_imgs/img_1.png";
import img_2 from "../../assets/passingtest_imgs/img_2.png";
import img_3 from "../../assets/passingtest_imgs/img_3.png";

export default function TestPassingTips() {
  return (
    <>
      <div className={styles.headline_section}>
        <h1 className={styles.h1_headline}>HOW TO PASS THE TEST ?</h1>
      </div>
      <div className={styles.passing_test_card}>
        <div className={styles.box_test}>
          <div className={styles.img_card}>
            <img className={styles.img_class_card} src={img_1} alt="img test" />
          </div>
          <div className={styles.description_card}>
            <h3>20 Questions in 20 Minutes</h3>
            <p>
              Focus and answer our questions that test your analytical, logical,
              numerical, and analytical memory.
            </p>
          </div>
        </div>
        <div className={styles.box_test}>
          <div className={styles.img_card}>
            <img className={styles.img_class_card} src={img_2} alt="img test" />
          </div>
          <div className={styles.description_card}>
            <h3>Receive your results by email instantly</h3>
            <p>Our IQ tests give you accurate and precise results.</p>
          </div>
        </div>
        <div className={styles.box_test}>
          <div className={styles.img_card}>
            <img className={styles.img_class_card} src={img_3} alt="img test" />
          </div>
          <div className={styles.description_card}>
            <h3>Get your Official Certificate</h3>
            <p>
              Get your certificate and performance report so you can share it
              with your family and friends.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
