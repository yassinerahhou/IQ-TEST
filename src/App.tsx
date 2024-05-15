import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/footer";
import Slider from "./Components/Slider";
import Feedback from "./Components/feedback-section";
import TestPassingTips from "./Components/TestPassingTips";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <TestPassingTips />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
