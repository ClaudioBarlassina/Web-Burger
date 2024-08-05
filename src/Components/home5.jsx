import React from "react";
import imagenPor from "../assets/contact-man.png";

function home5() {
  return (
    <div className="home5-container-primary">
      <div className="home5-container-title">
        <h3 className="home5-title">Contact Now</h3>
      </div>
      <div className="home5-container2">
        <img src={imagenPor} alt="" className="home5-img" />
        <div className="container-datos">
          <div className="conteiner-one">
            <h3 className="title-secundary">Write Us</h3>
            <div className="cont-icon">
             
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
          <div className="conteiner-two">
            <h3 className="title-secundary">Find us here</h3>
            <p>New York City</p>
          </div>
          <div className="conteiner-three">
            <h3 className="title-secundary"> Call Us and Order </h3>
            <p className="data-phone">+00-855-5689-025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home5;
