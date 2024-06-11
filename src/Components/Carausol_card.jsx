// src/Carousel.js
import React, { useState } from "react";
import "./Carousel.css";

const Carousol_card = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = projects.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = projects.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="skill-icon-card">
              <button className="carousel-control prev button-control" onClick={prevSlide}>
                &#10094;
              </button>
              <div>
              <img className="project-img" src={project.cardImg} alt="#" />
              </div>
              <button className="carousel-control next button-control" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
            <div className="box">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousol_card;
