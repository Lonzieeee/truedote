import React, { useEffect, useState } from "react";
import "./Hero.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const images = [hero1, hero2, hero3];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // display each image for 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="slider-container">
        {images.map((img, index) => {
          let className = "slide";
          if (index === current) className += " active";
          else if (
            index === (current - 1 + images.length) % images.length
          )
            className += " previous";
          else className += " next";

          return (
            <div
              key={index}
              className={className}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="overlay" />
            </div>
          );
        })}
      </div>

      <div className="info-boxes">
       <div className="info-box blue-box">
          <h4>CLINICAL DECISION SUPPORT</h4>
          <p>
            Utilize decision support to deliver quality care at every stage of healthcare delivery.
          </p>
          <button>Order Now</button>
        </div>
       <div className="info-box green-box">
          <h4>Intelligent Diagnostics</h4>
          <p>Make decisions based on scientific evidence.</p>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
