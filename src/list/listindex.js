import React from "react";
import "./list.css";

function listindex() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp"
              class="d-block w-100"
              alt="First"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://b.zmtcdn.com/data/pictures/0/18863170/c05be4700f027940d14a1c2a93f00a2f.jpg"
              class="d-block w-100"
              alt="Second"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://b.zmtcdn.com/data/reviews_photos/f96/8d61cc44778681cdbadf0cab36cbff96_1629786263.jpg"
              class="d-block w-100"
              alt="Third"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default listindex;
