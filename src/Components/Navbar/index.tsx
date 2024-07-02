import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useState } from "react";

export default function Navbar() {
  // PATH NAME TO SELECT ELEMENTS ABOVE
  const location = useLocation().pathname;

  // STATE FOR TOGGLE BTW MENU MOBILE HIDE/SHOW
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      {isMobileMenu === false && (
        <div
          onClick={() => setIsMobileMenu(!isMobileMenu)}
          className={styles.menuNavIconHide}
        >
          <i className={`${styles.iconBarsShow} fa fa-bars`}></i>
        </div>
      )}
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
                <Link
                  className={
                    location === "/Start"
                      ? `${styles.selected_item}`
                      : styles.remove_dec
                  }
                  to="/Start"
                >
                  <i className="fa fa-play"></i>Start
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link
                  className={
                    location === "/Prices"
                      ? `${styles.selected_item}`
                      : styles.remove_dec
                  }
                  to="/Start"
                  to="/Prices"
                >
                  <i className="fa fa-money"></i> PRICES
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link
                  className={
                    location === "/Blog"
                      ? `${styles.selected_item}`
                      : styles.remove_dec
                  }
                  to="/Start"
                  to="/Blog"
                >
                  <i className="fa fa-language"></i> BLOG
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link
                  className={
                    location === "/Faq"
                      ? `${styles.selected_item}`
                      : styles.remove_dec
                  }
                  to="/Start"
                  to="Faq"
                >
                  <i className="fa fa-comment"></i> FAQ
                </Link>
              </li>
              <li className={styles.li_nav}>
                <Link
                  className={
                    location === "/KIDS"
                      ? styles.selected_item
                      : styles.remove_dec
                  }
                  to="/KIDS"
                >
                  <i className="fa fa-child"></i> KIDS
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

      {/* MOBILE HEADER NOT GOOD PRACTICE BUT WE ARE LEARNING */}
      {isMobileMenu && (
        <>
          <header className={styles.MobileHeader}>
            <nav className={styles.sub_nav}>
              <div className={styles.logo_div}>
                <div
                  onClick={() => setIsMobileMenu(!isMobileMenu)}
                  className={styles.menuNavIcon}
                >
                  <i className={`${styles.iconBars} fa fa-bars`}></i>
                </div>
                <Link className={styles.remove_dec} to="/Home">
                  <h1>IQ-TEST</h1>
                </Link>
              </div>
              <div className={styles.elements_nav}>
                <ul className={styles.ul_nav}>
                  <li className={styles.li_nav}>
                    <Link
                      className={
                        location === "/Start"
                          ? `${styles.selected_item}`
                          : styles.remove_dec
                      }
                      to="/Start"
                    >
                      <i className="fa fa-play"></i>Start
                    </Link>
                  </li>
                  <li className={styles.li_nav}>
                    <Link
                      className={
                        location === "/Prices"
                          ? `${styles.selected_item}`
                          : styles.remove_dec
                      }
                      to="/Start"
                      to="/Prices"
                    >
                      <i className="fa fa-money"></i> PRICES
                    </Link>
                  </li>
                  <li className={styles.li_nav}>
                    <Link
                      className={
                        location === "/Blog"
                          ? `${styles.selected_item}`
                          : styles.remove_dec
                      }
                      to="/Start"
                      to="/Blog"
                    >
                      <i className="fa fa-language"></i> BLOG
                    </Link>
                  </li>
                  <li className={styles.li_nav}>
                    <Link
                      className={
                        location === "/Faq"
                          ? `${styles.selected_item}`
                          : styles.remove_dec
                      }
                      to="/Start"
                      to="Faq"
                    >
                      <i className="fa fa-comment"></i> FAQ
                    </Link>
                  </li>
                  <li className={styles.li_nav}>
                    <Link
                      className={
                        location === "/KIDS"
                          ? styles.selected_item
                          : styles.remove_dec
                      }
                      to="/KIDS"
                    >
                      <i className="fa fa-child"></i> KIDS
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
      )}
    </>
  );
}
