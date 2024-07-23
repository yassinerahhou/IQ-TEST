// import React from "react";
import {
  BrowserRouter,
  Route,
  Routes /*useLocation */,
} from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "../Slider";
import TestPassingTips from "../TestPassingTips";
import IQTestInfo from "../IQTestInfo";
import TableRating from "../TableRating";
import Footer from "../Footer/footer";
import Feedback from "../feedback-section";
import Start from "../Pages/START";
import Prices from "../Pages/PRICES";
// import Pricing from "..//Pages/PRICES/prices";
import Blog from "../Pages/BLOG";
import Faq from "../Pages/FAQ";
import About from "../Pages/about-us";
import QuizTest from "../QuizTest";
import KIDS from "../Pages/KIDS";
import IQ_TEST_01 from "../QuizTest/iq-test-01";
import Quiz from "../QuizTest/Quiz";
import Results from "../QuizTest/Result";
import Contact from "../Pages/contact";
import Privacy from "../Pages/privacy-policy";
import Terms from "../Pages/Terms-of-use";
import Certificate from "../Certificate";
export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/*  */}
          <Route path="/Start" element={<Start />} />
          <Route path="/Prices" element={<Prices />} />

          {/* <Route path="/Pricing" element={<Pricing />} /> */}

          <Route path="/Blog" element={<Blog />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/KIDS" element={<KIDS />} />

          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/ABOUT" element={<About />} />
          <Route path="/QuizTest" element={<QuizTest />} />
          <Route path="/IQ_TEST_01" element={<IQ_TEST_01 />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/privacy_policy" element={<Privacy />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/Certificate" element={<Certificate username={""} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

// DEFINE HOME
const Home = () => {
  return (
    <>
      <Slider />
      <TestPassingTips />
      <IQTestInfo />
      <TableRating />
      <Feedback />

      {/* <Footer /> */}
    </>
  );
};
