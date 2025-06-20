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
    <section className="contact-section">
        
      <div className="contact-card contact-left slide-in-left">
        <h3>Send Message</h3>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="Your Message..." required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>

      <div className="contact-card contact-right slide-in-right">
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
    </section>
  );
}
