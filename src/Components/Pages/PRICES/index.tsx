import styles from "./prices.module.scss";

export default function Prices() {
  return (
    <>
      <div>PRICES</div>
      <div className={styles.prices_card}>
        <div className={styles.card_left}>
          <div className={styles.price_box_headline}>
            <h1>Access all features during a 1-day trial</h1>
          </div>
          <div className={styles.box_original_test}>
            <p className={styles.para_original_price}>
              <span className={styles.underline_price}>1.00$</span> TODAY FREE
              TEST
            </p>
          </div>
          <div className={styles.box_solgan_price}>
            <p className={styles.solgan_p}>
              Take an IQ Test Today and Discover Your Brilliance
            </p>
          </div>
          <div className={styles.box_btn_price}>
            <button className={styles.btn_start}>START</button>
          </div>
        </div>
        <div className={styles.right_left}>
          <div className={styles.headline_iq_price_test}>
            <h1 className={styles.iqtest_price_p}>With IQ Test you can</h1>
          </div>
          <div className={styles.features_our_test}>
            <ul className={styles.ul_prices_features}>
              <li className={styles.li_features}>
                Know your Intelligence Quotient (IQ)
              </li>
              <li className={styles.li_features}>Download in PDF</li>
              <li className={styles.li_features}>
                Share your results on social networks
              </li>
              <li className={styles.li_features}>Unlimited downloads</li>
              <li className={styles.li_features}>
                Store your tests in your personal account
              </li>
              <li className={styles.li_features}>
                Invite your friends to your account to take tests
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
