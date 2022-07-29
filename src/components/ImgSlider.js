import React from "react";
import './imgSlider.css';

export default function ImgSlider() {
  return (
      <div
        id="carouselExampleControls"
        className="carousel slide pt-5 mt-5 coro"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img src={require('../images/slider-badag.jpg')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../images/slider-badging.jpg')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../images/slider-scale.jpg')} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require('../images/slider-scales.jpg')} className="d-block w-100" alt="..." />
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  
  );
}
