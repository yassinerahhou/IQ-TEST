// import { useLocation } from "react-router-dom";
import "./feedback-style.css";
export default function Feedback() {
  return (
    <>
      <div className="parent_feedback">
        <section className="feedback-section-parent">
          <h1 className="h1_headline">IQ-TEST FEEDBACK ?</h1>
          {/* part 1 */}
          <div className="reveiw-area">
            <picture className="picture-area  pic-1"></picture>{" "}
            <span className="text-area">
              <p>
                I found the IQ test on your website to be quite engaging. The
                instructions were clear, making it easy for me to understand
                what was expected. The design was visually appealing and
                user-friendly, which helped me stay focused throughout the test.
                I particularly enjoyed the variety of question types, which kept
                me challenged. The personalized feedback at the end of the test
                provided me with valuable insights into my cognitive abilities.
                Overall, it was a stimulating experience, and I would definitely
                recommend it to others
              </p>
            </span>
          </div>
          {/* parte  */}
          <div className="reveiw-area">
            <picture className="picture-area  pic-2"> </picture>
            <span className="text-area">
              {" "}
              <p>
                Taking the IQ test on your website was a positive experience for
                me. The layout was intuitive, making it simple to navigate
                through the questions. The instructions were straightforward,
                and I appreciated the mix of difficulty levels in the questions.
                The personalized feedback at the end was insightful, giving me a
                better understanding of my cognitive strengths and areas where I
                can improve. Overall, it was a well-designed test that I would
                be happy to recommend to friends
              </p>
            </span>
          </div>

          {/* parte  3*/}
          <div className="reveiw-area">
            <picture className="picture-area  pic-3"></picture>
            <span className="text-area">
              {" "}
              <p>
                I thoroughly enjoyed the IQ test on your website. The questions
                were challenging yet engaging, keeping me focused from start to
                finish. The website's design was sleek and modern, making it a
                pleasure to use. The personalized feedback at the end of the
                test was enlightening, offering valuable insights into my
                cognitive abilities. Overall, it was a fantastic experience, and
                I would definitely take the test again in the future
              </p>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
