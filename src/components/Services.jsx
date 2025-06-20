import React from "react";
import "./Services.css";
import {
  FaHeartbeat,
  FaMicroscope,
  FaCapsules,
 
  FaStethoscope,
  FaSyringe,
  FaVials,

  FaNotesMedical,
  FaLaptopMedical, 
  FaUserMd
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Truedote LIMS",
      icon: <FaMicroscope />,
      description: "Intelligent Laboratory Management System. Assists in decision support for lab tests.Used in Research and medical facilities.",
    },
    {
      title: "Truedote EMR",
      icon: <FaLaptopMedical />,
      description: "Manages workflows from triage,diagnosis,laboratory to pharmacy by augmenting the caregiver's decision making.",
    },
    {
      title: "My Truedote",
      icon: <FaUserMd />,
      description: "Access qualified and private health services from anywhere, anytime.",
    },
    {
      title: "Truebox",
      icon: <FaHeartbeat />,
      description: "Remote telepathology platform for small healthcare facilities.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-heading">One Solution,multiple applications</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Floating subtle icons */}
      <div className="floating-service-icons">
        <FaHeartbeat className="service-float-icon icon1" />
        <FaUserMd className="service-float-icon icon2" />
        
        <FaMicroscope className="service-float-icon icon4" />
        <FaCapsules className="service-float-icon icon5" />
       
        <FaStethoscope className="service-float-icon icon7" />
        <FaSyringe className="service-float-icon icon8"/>
        <FaVials className="service-float-icon icon9" />
      
        <FaNotesMedical className="service-float-icon icon12" />
      </div>
    </section>
  );
}

export default Services;
