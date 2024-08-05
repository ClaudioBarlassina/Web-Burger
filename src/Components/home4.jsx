import React from "react";
import image from "../assets/delivery-burger.png"

function home4() {
  return (
    <div className="home4-container">
      <div className="home4-data">
        <h3 className="home4-title">Fast Delivery</h3>
        <p className="home4-parrafo">
          Place your order for your favorite burger and we will deliver it to
          your door in minutes, get in touch and leave hungry
        </p>
        <button className="home4-button">Contact Now</button>
      </div>
      <div className="home4-image">
              <img className="home4-img" src={image } alt="" />
      </div>
    </div>
  );
}

export default home4;
