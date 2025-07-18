import React from "react";
import "./TrustStats.css";
import brainImg from '../assets/ai-brain.png'; 



const stats = [
  { label: "Hospitals Onboarded", value: 92, color: "#0ea5e9" },
  { label: "Doctors Registered", value: 78, color: "#22c55e" },
  { label: "Patients Served", value: 88, color: "#22c55e" },
  { label: "AI Accuracy", value: 97, color: "#0ea5e9" },
];

export default function OrbitalStats() {
  return (
    <section className="orbit-section">
      <h2 className="orbit-title">Our System's Trust Scores</h2>
      <div className="orbit-container">
<img
  src={brainImg}
  alt="AI Brain"
  className="orbit-core-image"
/>


     
      <div className="orbit-wrapper">
 

        {stats.map((stat, index) => (
          <div
            key={index}
            className={`orbit-item item-${index}`}
            style={{ borderColor: stat.color }}
          >
            <div className="orbit-value" style={{ color: stat.color }}>
              {stat.value}%
            </div>
            <div className="orbit-label">{stat.label}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
