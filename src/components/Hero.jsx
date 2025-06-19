import React from "react";
import "./Hero.css";
import {
  FaHeartbeat,
  FaMicroscope,
  FaCapsules,
  FaDna,
  FaStethoscope,
  FaSyringe,
  FaVials,
  FaHospital,
  FaBrain,
  FaNotesMedical
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section">
      {/* floatin medical icons */}
      <div className="floating-icons">
        <FaHeartbeat className="float-icon icon1" />
        <FaMicroscope className="float-icon icon2" />
        <FaCapsules className="float-icon icon3" />
        <FaDna className="float-icon icon4" />
        <FaStethoscope className="float-icon icon5" />
        <FaSyringe className="float-icon icon6"/>
        <FaVials className="float-icon icon7" />
        <FaHospital className="float-icon icon8"/>
        <FaBrain className="float-icon icon9" />
        <FaNotesMedical className="float-icon icon10" />
         </div>

        {/* hero contnets */}
        <div className="hero-content">
         <h1>Improve the quality of care in your facility today!</h1>
         <p>We use artificial intelligence to improve disgnostics in your medical or research facilty.</p>

         <div className="info-boxes">
          <div className="info-box blue-box">
            <h4>Clinical Decision Support</h4>
            <p>Utilize decision support to enable you to deliver quality care to your patients, at every stage of healthcare delivery.</p>
            <button>Explore</button>
          </div>
          <div className="info-box green-box">
            <h4>Intelligent Diagnostics</h4>
            <p>Make decisions based on scientific evidence.</p>
            <button>Discover</button>
          </div>
         </div>
         </div>
         {/* Gradient */}
     <div className="hero-wave">
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="#ffffff"
      d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32V320H0Z"
    />
  </svg>
</div>



     
    </section>
  );
}
export default Hero;