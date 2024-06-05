import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <header className={styles.main_header}>
        <nav className={styles.sub_nav}>
          <div className={styles.logo_div}>
            <Link className={styles.remove_dec} to="/Home">
              <h1>IQ-TEST</h1>
            </Link>
          </div>
          <div className={styles.elements_nav}>
            <ul className={styles.ul_nav}>
              <li className={styles.li_nav}>
                <Link className={styles.remove_dec} to="/Start">
                  <i className="fa fa-hourglass-start"></i> Start
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link className={styles.remove_dec} to="/Prices">
                  <i className="fa fa-money"></i> PRICES
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link className={styles.remove_dec} to="/Blog">
                  <i className="fa fa-language"></i> BLOG
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link className={styles.remove_dec} to="Faq">
                  <i className="fa fa-comment"></i> FAQ
                </Link>
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
