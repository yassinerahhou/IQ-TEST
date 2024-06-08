import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/ABOUT" element={<About />} />
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
