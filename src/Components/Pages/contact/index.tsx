<<<<<<< HEAD
import { useState, ChangeEvent, FormEvent } from "react";
=======
import React, { useEffect, useState } from "react";

>>>>>>> b955a90b1dddf8552a1325f3c24bcc8ea3d5aa99
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
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
