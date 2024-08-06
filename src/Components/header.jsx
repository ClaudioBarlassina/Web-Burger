import React from "react";
import logo from "../assets/logo-burger.svg";

function header() {
  return (
    <div>
      <section className="header">
        <nav className="nav-container">
          <a href="#" className="nav__logo">
            <div>
              <img src={logo} alt="" />
            </div>
            Burger
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li>
                <a href="#Home" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#Recipe" className="nav__link">
                  Recipe
                </a>
              </li>
              <li>
                <a href="#Popular" className="nav__link">
                  Popular
                </a>
              </li>
              <li>
                <a href="#Delivery" className="nav__link">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#Contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-close">
              <i className="ri-close-large-fill"></i>
            </div>
          </div>
            <div className="nav-toggle">
              <i className="ri-apps-2-fill"></i>
            </div>
        </nav>
      </section>
    </div>
  );
}

export default header;
