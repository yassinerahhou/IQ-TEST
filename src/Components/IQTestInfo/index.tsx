import styles from "./ittestinfo.module.scss";

// DIAGRAM IMG
import diagram_img from "../../assets/diagram_imgs/image.png";

export default function IQTestInfo() {
  return (
    <>
      <div className={styles.section_infotest}>
        <div className={styles.headline_section}>
          <h1>WHAT IS AN IQ-TEST ?</h1>
        </div>
        <div className={styles.image_text}>
          <div className={styles.img_diagram_div}>
            <img
              className={styles.class_diagram_img}
              src={diagram_img}
              alt="img diagram"
            />
          </div>
          <div className={styles.text_diagram}>
            <p className={styles.para_diagram}>
              At IQ-Test, we believe that self-awareness is the cornerstone of
              personal growth. By delving into the intricacies of your cognitive
              abilities, you gain not only a better understanding of yourself
              but also invaluable insights into how you interact with the world
              around you. Imagine being able to pinpoint your natural aptitudes
              with precision. Whether it's a knack for logical reasoning, an eye
              for detail, or a talent for creative thinking, recognizing these
              strengths empowers you to leverage them in all aspects of your
              life. From academic pursuits to professional endeavors and even
              personal relationships, harnessing your cognitive strengths can
              lead to unparalleled success and fulfillment.
            </p>
          </div>
        </div>
        <div className={styles.btn_start_test}>
          <button className={`${styles.btn_taketest} btn btn-primary`}>
            TAKE THE TEST
          </button>
        </div>
      </div>
    </>
  );
}
