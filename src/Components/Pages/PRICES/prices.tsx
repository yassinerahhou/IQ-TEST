import "./Pricing.css";

const plans = [
  {
    name: "STARTER",
    price: "FREE",
    duration: "Limited Time",
    features: [
      "Basic IQ test with limited questions",
      "Basic result overview",
      "Ad-supported experience",
    ],
    color: "starter",
  },
  {
    name: "ADVANCED",
    price: "FREE",
    duration: "Limited Time",
    features: [
      "Full access to all IQ test questions",
      "Detailed result analysis",
      "Download results in PDF",
      "Ad-free experience",
    ],
    color: "advanced",
  },
  {
    name: "PREMIUM",
    price: "FREE",
    duration: "Limited Time",
    features: [
      "All features of Advanced",
      "Personalized cognitive improvement tips",
      "Store your Tests in your personal account",
      "Historical test results and progress tracking",
    ],
    color: "premium",
  },
];

export default function Prices() {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Choose Your Plan</h1>
      <p className="pricing-subtitle">
        All plans are currently free for a limited time!
      </p>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.color}`}>
            <div className="card-header">
              <h2>{plan.name}</h2>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </div>
            </div>
            <ul className="features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}
