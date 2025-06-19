import React from "react";
import "./Services.css";
// import bg from "../assets/Our-Services.jpg";

function Services() {
    return (
        <section className="services-section"
            //   style={{ backgroundImage: `url(${bg})` }}
        >
            <div  className="services-overlay"></div>
            <h2>ONE SOLUTION, MULTIPLE APPLICATIONS</h2>
            <div className="dot" />
            <div className="services-boxes">
                <div className="service-box">
                    <h4>Truedote LIMS</h4>
                    <p>Intelligent Laboratory management system.Assists in decision support for lab tests.</p>
                 </div>
                        <div className="service-box">
                            <h4>Truedote EMR</h4>
                            <p>Manages workflowsand augments decision-making for clinicians.

                            </p>
                        </div>
                        <div className="service-box">
                            <h4>My Truedote</h4>
                            <p>Access qualified health services from anywhere, anytime.</p>
                        </div>
                        <div className="service-box">
                            <h4>Truebox</h4>
                            <p>Remote telepathology for small heathcare centers.</p>
                        </div>
                    </div>
               
          
        </section>
    );
}
export default Services;