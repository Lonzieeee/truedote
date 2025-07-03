import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import MedicalHeroImage from "../assets/hero-image.jpg";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  const [hovered, setHovered] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* LEFT SIDE */}
        <div className="hero-left" data-aos="fade-right">
          <h1 className="hero-title">
            <Typewriter
              words={[
                "Improve the quality of care in your facility today!",
                "Leverage AI for accurate diagnostics.",
                "Empower your healthcare team with intelligent tools.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>
          <p className="hero-description animate-fade-up">
            We use artificial intelligence to improve diagnostics in your
            medical or research facility.
          </p>
          <button
    className="scroll-button"
    onClick={() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Learn About Us
  </button>
        </div>

        {/* RIGHT SIDE: Hover Swap */}
        <div
          className="hero-right-slide-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-aos="fade-left"
        >
          {/* IMAGE */}
          <div className={`hero-image-wrapper ${hovered ? "slide-out" : ""}`}>
            <img
              src={MedicalHeroImage}
              alt="Medical Hero"
              className="hero-img"
            />
          </div>

          {/* INFO BOXES */}
          <div className={`info-boxes-slide-in ${hovered ? "slide-in" : ""}`}>
            <div className="info-box blue-box">
              <h4>Clinical Decision Support</h4>
              <p>
                Utilize decision support to enable you to deliver quality care
                to your patients.
              </p>
              <button>Learn More</button>
            </div>

            <div className="info-box green-box">
              <h4>Intelligent Diagnostics</h4>
              <p>Make decisions based on scientific evidence.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
