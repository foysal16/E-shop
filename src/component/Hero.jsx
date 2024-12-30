import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="card text-bg-dark border-0 radius-0">
        <img
          src="https://cdn.pixabay.com/photo/2024/04/05/05/16/e-commerce-8676517_1280.jpg"
          className="card-img"
          alt="background imag"
          height="650px"
        />
        <div className="card-img-overlay">
          <div className="container text-center text-white">
            <h5  className="display-3 fw-bold mb-0">NEW OFFER ARRIVAL IN SHOP</h5>
            <p className="card-text lead fs-2">
              CHECK ALL TRANDERS PRODUCTS
            </p>
            <button type="button" className="btn btn-outline-success ps-2">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};
