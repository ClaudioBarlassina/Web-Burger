import React from "react";
import Burger from "../assets/home-burger.png";
import Table from "../assets/home-dish.png"

const home = () => {
  return (
    <div>
      <section className="home-section" id="home">
        <div className="home__container">
          <div className="home__data">
            <h1 className="home__title">Love Every  Burger</h1>
            <p className="home__data_p">
              we serve the best burgers on the planet, paving the way for
              cooking and preparing hot, delicious burgers
            </p>
            <a href="#" className="button">
              Bite Now
            </a>
          </div>
          <div className="home--images">
            <img className="image-burger1" src={Burger} alt="" />
            <img className="image-table" src={Table} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
