import React from "react";
import PartBurger from "../assets/recipe-burger.png";
import Bread from "../assets/recipe-bread.png";
import cheese from "../assets/recipe-cheese.png";
import meat from "../assets/recipe-meat.png";
import vegetables from "../assets/recipe-vegetable.png";
import sauses from "../assets/recipe-sauces.png"

const home2 = () => {
  return (
    <div className="home2-section" id="Recipe">
      <div>
        <h1 className="home2-title">Our Secret Recipe</h1>
      </div>

      <div className="home2-data">
        <img className="image-Burger" src={PartBurger} alt="" />
        <div className="content-info">
          <div className="cont-data">
            <div className="cont-img">
              <img className="img-recipe" src={Bread} alt="" />
            </div>
            <div className="content">
              <h2>Bread</h2>
              <p>Fresh bread, baked to perfection</p>
            </div>
          </div>
          <div className="cont-data-r">
            <div className="cont-img">
              <img className="img-recipe" src={cheese} alt="" />
            </div>
            <div className="content">
              <h2>Cheese</h2>
              <p>Cheese for a fantastic and healthy future</p>
            </div>
          </div>
          <div className="cont-data">
            <div className="cont-img">
              <img className="img-recipe" src={meat} alt="" />
            </div>
            <div className="content">
              <h2>Meat</h2>
              <p>100% pure beef, big and meaty</p>
            </div>
          </div>
          <div className="cont-data-r">
            <div className="cont-img">
              <img className="img-recipe" src={vegetables} alt="" />
            </div>
            <div className="content">
              <h2>Vegetables</h2>
              <p>Vegetales full of the essecen of nature and organic</p>
            </div>
          </div>
          <div className="cont-data">
            <div className="cont-img">
              <img className="img-recipe" src={sauses} alt="" />
            </div>
            <div className="content">
              <h2>Sauses</h2>
              <p>fresh sauses, delicius for the palate</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default home2;
