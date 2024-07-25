import { useEffect, useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "emailjs-com";
import "./style.css";

export default function Contact() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2bebge7",
        "template_ntwh59d",
        form.current!,
        "EPGAPbb7eX_nO_628"
      )
      .then(
        () => {
          setStatusMessage("SUCCESS!");
          console.log("SUCCESS!");

          // Hide status message after 5 seconds
          setTimeout(() => {
            setStatusMessage("");
          }, 5000);
        },
        (error) => {
          setStatusMessage(`FAILED... ${error.text}`);
          console.log("FAILED...", error.text);

          // Hide status message after 5 seconds
          setTimeout(() => {
            setStatusMessage("");
          }, 5000);
        }
      );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    sendEmail(e);
  };

  return (
    <div className="contact-container">
      {statusMessage && <div className="statusMessage">{statusMessage}</div>}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out to us using the following contact
            information:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> yacine.rahhou@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 IQ Street, Brain City, 12345
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
