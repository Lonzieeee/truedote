import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section heartbeat-in">
        <div className="contact-header">
            <h2>Contact Us</h2>
            <p>We'd Love to hear from you</p>
        </div>
        <div className="contact-content">
      <div className="contact-card contact-left">
        <h3>Send Message</h3>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="Your Message..." required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>

      <div className="contact-card contact-right">
        <h3>Get in Touch</h3>
        <p className="company-name">Truedote Company Limited</p>
        <p>📍 Nairobi, Kenya</p>
        <p>📞 +254 712 345 678</p>
        <p>📧 info@truedote.ai</p>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
      </div>
    </section>
  );
}
