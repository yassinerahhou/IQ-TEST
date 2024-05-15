import "./feedback-style.css";
export default function feedback() {
  return (
    <>
      <section className="feedback-section-parent">
        <h1>IQ-TEST FEEDBACK ?</h1>
        {/* part 1 */}
        <div className="reveiw-area">
          <picture className="picture-area  pic-1"></picture>{" "}
          <span className="text-area">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              corporis, modi velit voluptatum laboriosam id nostrum perferendis
              quis sapiente dignissimos sint error temporibus quibusdam
              necessitatibus voluptates, rerum labore possimus ratione!
            </p>
          </span>
        </div>
        {/* parte  */}
        <div className="reveiw-area">
          <picture className="picture-area  pic-2"> </picture>
          <span className="text-area">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              corporis, modi velit voluptatum laboriosam id nostrum perferendis
              quis sapiente dignissimos sint error temporibus quibusdam
              necessitatibus voluptates, rerum labore possimus ratione!
            </p>
          </span>
        </div>

        {/* parte  3*/}
        <div className="reveiw-area">
          <picture className="picture-area  pic-3"></picture>
          <span className="text-area">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              corporis, modi velit voluptatum laboriosam id nostrum perferendis
              quis sapiente dignissimos sint error temporibus quibusdam
              necessitatibus voluptates, rerum labore possimus ratione!
            </p>
          </span>
        </div>
      </section>
    </>
  );
}
