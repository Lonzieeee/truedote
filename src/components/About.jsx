import React, { useState } from "react";
import "./About.css";
import {
  FaUserMd,
  FaFlask,
  FaUsers,
  FaHeartbeat,
  FaStethoscope,
  FaCapsules,
  FaDna,
  FaSyringe,
  FaMicroscope
} from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return {
          title: "Mission",
          text: "Our mission is to revolutionize healthcare diagnostics by equipping hospitals and clinics with cutting-edge, AI-powered diagnostic tools that enhance accuracy, speed, and accessibility."
        };
      case "vision":
        return {
          title: "Vision",
          text: "We envision a future where every patient, regardless of location, receives timely and precise diagnostics through intelligent systems that empower healthcare providers globally."
        };
      case "team":
        return {
          title: "Team",
          text: "Our interdisciplinary team includes doctors, engineers, AI researchers, and designers — all working together to build life-saving technology with real-world impact."
        };
      case "tech":
        return {
          title: "Technology",
          text: "Our platform merges AI diagnostics, electronic medical records, and lab automation into one intuitive system, helping streamline hospital workflows and decision-making."
        };
      default:
        return { title: "", text: "" };
    }
  };

  const { title, text } = renderContent();

  return (
    <section className="about-section">
    {/* Vitals Bar */}
     <div className="ecg-header">
  <div className="ecg-line"></div>
  <h2 className="about-title">About Us</h2>
  <div className="ecg-line"></div>
</div>


      {/* Dashboard Panel */}
      <div className="dashboard">
        <div className="sidebar">
          <button onClick={() => setActiveTab("mission")} className={activeTab === "mission" ? "active" : ""}><FaUserMd /> Mission</button>
          <button onClick={() => setActiveTab("vision")} className={activeTab === "vision" ? "active" : ""}><FaFlask /> Vision</button>
          <button onClick={() => setActiveTab("team")} className={activeTab === "team" ? "active" : ""}><FaUsers /> Team</button>
          <button onClick={() => setActiveTab("tech")} className={activeTab === "tech" ? "active" : ""}><FaFlask /> Technology</button>
        </div>
       <div className={`content-panel-wrapper ${activeTab}`}>
  <div className="content-panel">
    <h3 className="tab-heading">{title}</h3>
    <p className="tab-content">{text}</p>
  </div>
</div>

      </div>

      {/* Floating React Icons */}
      <div className="floating-icons">
        <FaStethoscope className="float-icon icon1" />
        <FaCapsules className="float-icon icon2" />
        <FaDna className="float-icon icon3" />
        <FaSyringe className="float-icon icon4" />
        <FaMicroscope className="float-icon icon5" />
      </div>
    </section>
  );
}

export default About;
