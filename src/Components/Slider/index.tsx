import styles from "./slider.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// IMG BRAIN THINKING FOR SLIDER
import img_brain from "../../../src/assets/slider_imgs/brx.png";

export default function Slider() {
  return (
    <>
      <div className={styles.main_parent}>
        <div className={styles.main_slider}>
          <div className={styles.left_slider}>
            <div className={styles.box_intro_headline}>
              <h1>Unveil your genuine IQ score within a mere 2 minutes!</h1>
            </div>
            <div className={styles.box_intro_takingtest}>
              <p className={styles.p_random_test}>
                600 Ppeople are taking the test right now.
              </p>
            </div>
            <div className={styles.box_intro_button}>
              <button className={`${styles.btn_start} btn btn-light`}>
                Start certiificate test{" "}
              </button>
            </div>
          </div>
          <div className={styles.right_slider_img}>
            <img
              className={styles.img_slider_class}
              src={img_brain}
              alt="img brain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
