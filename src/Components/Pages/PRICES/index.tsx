import styles from "./prices.module.scss";
import "./Pricing.css";

export default function Prices() {
  return (
    <div className="pricing-container">
      <div className="pricing-card card-starter">
        <div className="pack-name">
          <h2>STARTER</h2>
          <h1>Free</h1>
          <p>One day</p>
          <p className="old-price">Original: $0.99</p>
        </div>
        <div className="pack-details">
          <div className="text-structure">
            <p>Basic IQ test with limited questions</p>
            <hr />
            <p>Basic result overview</p>
            <hr />
            <p>Ad-supported experience</p>
            <hr />
          </div>
          <button>SELECT PLAN</button>
        </div>
      </div>
      <div className="pricing-card card-advanced">
        <div className="pack-name">
          <h2>ADVANCED</h2>
          <h1>Free</h1>
          <p>per month</p>
          <p className="old-price">Original: $9.99</p>
        </div>
        <div className="pack-details">
          <div className="text-structure">
            <p>Full access to all IQ test questions</p>
            <hr />
            <p>Detailed result analysis</p>
            <hr />
            <p>Download in PDF</p>
            <hr />
            <p>Ad-free experience</p>
            <hr />
          </div>
          <button>SELECT PLAN</button>
        </div>
      </div>
      <div className="pricing-card card-premium">
        <div className="pack-name">
          <h2>PREMIUM</h2>
          <h1>Free</h1>
          <p>per month</p>
          <p className="old-price">Original: $59.99</p>
        </div>
        <div className="pack-details">
          <div className="text-structure">
            <p>All features of Advanced</p>
            <hr />
            <p>Personalized cognitive improvement tips</p>
            <hr />
            <p>Store your tests in your personal account</p>
            <hr />
            <p>Historical test results and progress tracking</p>
            <hr />
          </div>
          <button>SELECT PLAN</button>
        </div>
      </div>
    </div>
  );
}
