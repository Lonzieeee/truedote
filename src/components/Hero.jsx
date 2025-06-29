
import React from "react";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {
  FaStethoscope,
 FaBrain,
 FaMicroscope,
 FaHeartbeat,
 FaCapsules,
 FaHospital,
} from "react-icons/fa";

function Hero() {
useEffect(() => {
  Aos.init({
    duration: 1000,     
    once: false,   
  });
}, []);


  return (
    <section className="hero-section">
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <Typewriter
            words={["Improve the quality of care in your facility today!",
              "Leverage AI for accurate diagnostics.",
              "Empower your healthcare team with intelligent tools."
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>

        <p className="hero-description animate-fade-up" >
          We use artificial intelligence to improve diagnostics in your medical
          or research facility.
        </p>

        <div className="info-boxes">
          <div className="info-box blue-box animate-bounce-in delay-1">
            <h4>Clinical Decision Support</h4>
            <p>
              Utilize decision support to enable you to deliver quality care to
              your patients, at every stage of healthcare delivery.
            </p>
            <button>Learn More</button>
          </div>
          <div className="info-box green-box animate-bounce-in delay-2" >
            <h4>Intelligent Diagnostics</h4>
            <p>Make decisions based on scientific evidence.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      {/* Hero Wave SVG */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32V320H0Z"
          />
        </svg>
      </div>
      {/* Corner Iconsv-vLEFT sIDE */}
<div className="floating-icons left-icons">
  <FaStethoscope className="floating-icon delay-1" />
  <FaMicroscope className="floating-icon delay-2" />
  <FaCapsules className="floating-icon delay-3" />
</div>

      {/* rigth */}

      <div className="floating-icons right-icons">
  <FaBrain className="floating-icon delay-1" />
  <FaHeartbeat className="floating-icon delay-2" />
  <FaHospital className="floating-icon delay-3" />
</div>

    </section>
  );
}

export default Hero;
