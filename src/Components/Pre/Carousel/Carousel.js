import React from "react";
import "./Carousel.css";
function Carousal() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      style={{ height: "80vh" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img
            src="./Images/R1.jpg"
            style={{ height: "80vh", width: "100%" }}
            className=" d-block w-100"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Running</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img
            src="./Images/C2.jpg"
            style={{ height: "80vh", width: "100%" }}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cycling</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./Images/S1.jpg"
            style={{ height: "80vh", width: "100%" }}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Swimming</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./Images/W1.jpg"
            style={{ height: "80vh", width: "100%" }}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Walking</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./Images/H1.jpg"
            style={{ height: "80vh", width: "100%" }}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Hiking</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
