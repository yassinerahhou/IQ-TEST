import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <header className={styles.main_header}>
        <nav className={styles.sub_nav}>
          <div className={styles.logo_div}>
            <h1>IQ-TEST</h1>
          </div>
          <div className={styles.elements_nav}>
            <ul className={styles.ul_nav}>
              <li className={styles.li_nav}>
                <i className="fa fa-hourglass-start"></i> START
              </li>
              <li className={styles.li_nav}>
                <i className="fa fa-money"></i> PRICES
              </li>
              <li className={styles.li_nav}>
                <i className="fa fa-language"></i> LANGUAGES
              </li>
              <li className={styles.li_nav}>
                <i className="fa fa-comment"></i> FEEDBACK
              </li>
            </ul>
          </div>
          {/* ACCESS DIV */}
          <div className={styles.access_div}>
            <p className={styles.li_nav_access}>ACCESS</p>
          </div>
        </nav>
      </header>
    </>
  );
}
