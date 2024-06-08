import React from "react";
import "./Pricing.css"; // Import your CSS file

interface PricingCardProps {
  title: string;
  features: string[];
  price: string;
  buttonText: string;
  onClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  features,
  price,
  buttonText,
  onClick,
}) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      {features.map((feature, index) => (
        <p key={index}>{feature}</p>
      ))}
      <p>{price}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const handleFreeClick = () => {
    console.log("Free plan selected");
  };

  const handleStandardClick = () => {
    console.log("Standard plan selected");
  };

  const handlePremiumClick = () => {
    console.log("Premium plan selected");
  };

  return (
    <div className="pricing">
      <h1>Choose Your Plan</h1>
      <div className="pricing-tiers">
        <PricingCard
          title="Free"
          features={[
            "Basic IQ test with limited questions",
            "Basic result overview",
            "Ads supported",
          ]}
          price="Free"
          buttonText="Get Started"
          onClick={handleFreeClick}
        />
        <PricingCard
          title="Standard"
          features={[
            "Full access to all IQ test questions",
            "Detailed result analysis",
            "Ad-free experience",
            "Basic cognitive insights",
          ]}
          price="$9.99/month or $99/year"
          buttonText="Sign Up"
          onClick={handleStandardClick}
        />
        <PricingCard
          title="Premium"
          features={[
            "All features of Standard",
            "Personalized cognitive improvement tips",
            "Historical test results and progress tracking",
            "Premium customer support",
          ]}
          price="$19.99/month or $199/year"
          buttonText="Get Premium"
          onClick={handlePremiumClick}
        />
      </div>
      <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>What is included in the free plan?</h4>
          <p>
            The free plan includes a basic IQ test with limited questions and a
            basic result overview. It is supported by ads.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I cancel my subscription?</h4>
          <p>
            Yes, you can cancel your subscription at any time. If you are not
            satisfied, we offer a 30-day money-back guarantee.
          </p>
        </div>
        <div className="faq-item">
          <h4>How do I contact customer support?</h4>
          <p>
            You can reach our customer support team via email at
            support@iqtest.com or through our contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
