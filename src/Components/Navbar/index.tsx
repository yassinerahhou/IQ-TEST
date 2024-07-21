import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./../../assets/logi1.png";

export default function Navbar() {
  const location = useLocation().pathname;
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenu(!isMobileMenu);

  const navItems = [
    { path: "/Start", label: "Start", icon: "fa-play" },
    { path: "/Prices", label: "PRICES", icon: "fa-money" },
    { path: "/Blog", label: "BLOG", icon: "fa-language" },
    { path: "/Faq", label: "FAQ", icon: "fa-comment" },
    { path: "/KIDS", label: "KIDS", icon: "fa-child" },
  ];

  return (
    <>
      <header
        className={`${styles.main_header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <nav className={styles.sub_nav}>
          <div className={styles.logo_div}>
            <Link to="/Home" className={styles.logoLink}>
              {/* <h1 className={styles.logoApp}>IQ-TEST</h1> */}
              <img src={logo} width={"auto"} alt="" />
            </Link>
          </div>
          <div className={styles.elements_nav}>
            <ul className={styles.ul_nav}>
              {navItems.map((item) => (
                <li key={item.path} className={styles.li_nav}>
                  <Link to={item.path} className={styles.remove_dec}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.access_div}>
            <Link to="/Quiz">
              <button className={styles.li_nav_access}>GET STARTED</button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Toggle */}
      <div className={styles.mobile_menu_toggle} onClick={toggleMobileMenu}>
        <i className={`fa ${isMobileMenu ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* Mobile Menu */}
      {isMobileMenu && (
        <div className={styles.mobile_menu}>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={
                      location === item.path
                        ? styles.selected_item
                        : styles.remove_dec
                    }
                    onClick={toggleMobileMenu}
                  >
                    <i className={`fa ${item.icon}`}></i> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className={styles.mobile_cta}>GET STARTED</button>
        </div>
      )}
      <br />
      <br />
      <br />
    </>
  );
}
