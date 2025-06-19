import React from "react";
import "./Services.css";
import {
  FaMicroscope,
  FaLaptopMedical,
  FaUserNurse,
  FaRegFolderOpen
} from "react-icons/fa";

const services = [
  {
    title: "Truedote LIMS",
    description: "Intelligent Laboratory management system. Assists in decision support for lab tests.",
    icon: <FaMicroscope />
  },
  {
    title: "Truedote EMR",
    description: "Manages workflows and augments decision-making for clinicians.",
    icon: <FaLaptopMedical />
  },
  {
    title: "My Truedote",
    description: "Access qualified health services from anywhere, anytime.",
    icon: <FaUserNurse />
  },
  {
    title: "Truebox",
    description: "Remote telepathology for small healthcare centers.",
    icon: <FaRegFolderOpen />
  }
];

function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            style={{ "--i": index }}
            key={index}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="glass-overlay"></div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
