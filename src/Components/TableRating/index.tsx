import styles from "./tablerating.module.scss";

// $$$$$$$$$$$$$$
// IMPORT IMG BRAIN
import img_brain from "../../assets/tablerating_imgs/image.png";

export default function TableRating() {
  return (
    <>
      <div className={styles.parent_table}></div>
      <div className={styles.headline_powerrating}>
        <h1>Brainpower Rating</h1>
        <img
          className={styles.img_icon_class}
          src={img_brain}
          alt="img brain"
        />
      </div>
      <div className={styles.table_rating}>
        <div className={styles.right_table}>
          <div className={styles.table_box_right}>
            <p className={styles.span_title}>Challenges Ahead</p>
            <p className={styles.span_points}>POINTS: 70-79: 2%</p>
          </div>
          <div className={styles.table_box_right}>
            <p className={styles.span_title}>Solid Performers</p>
            <p className={styles.span_points}>POINTS: 80-89: 14%</p>
          </div>
          <div className={styles.table_box_right}>
            <p className={styles.span_title}>Above Average</p>
            <p className={styles.span_points}>POINTS: 90-109: 34%</p>
          </div>
        </div>
        <div className={styles.left_table}>
          <div className={styles.table_box_left}>
            <p className={styles.span_title}>High Achievers</p>
            <p className={styles.span_points}>POINTS: 110-119: 34%</p>
          </div>
          <div className={styles.table_box_left}>
            <p className={styles.span_title}>Brilliant Minds</p>
            <p className={styles.span_points}>POINTS: 120-129: 14%</p>
          </div>
          <div className={styles.table_box_left}>
            <p className={styles.span_title}>Exceptional Genius</p>
            <p className={styles.span_points}>POINTS: 130-144: 2%</p>
          </div>
        </div>
      </div>
    </>
  );
}
