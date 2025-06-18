import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* social media */}
                <div className="social-icons">
                     <FaFacebookF />
          <FaTwitter />
          <FaInstagram />

                </div>
                {/* form */}
                <form className="contact-form">
                    <div className="name-fields">
                        <input type="text" placeholder="First Name *" required />

                        <input type="text" placeholder="Last Name *" required />

                    </div>
                    <input type="email" placeholder="Email *" required />

                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>

            </div>
            {/* copyright */}
            <div className="copyright">
                 © 2025 All Rights Reserved
            </div>
        </footer>
    );
}
export default Footer;