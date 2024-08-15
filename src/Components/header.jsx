import React, { useState } from "react";
import logo from "../assets/logo-burger.svg";

function header() {
  const [MenuVisible, setMenuVisible] = useState(false);
  
  
  const menu = () => {
    setMenuVisible(!MenuVisible);
 }

  const closeMenu = () => {
  setMenuVisible(false)
  } 


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
          <div className={`nav__menu ${MenuVisible && "show" }`}  >
         
            <ul className="nav__list" > 
                    
              <li>
                <a href="#Home" className="nav__link" >
                  Home
                </a>
              </li>
              <li>
                <a href="#Recipe" className="nav__link"  onClick={closeMenu}>
                  Recipe
                </a>
              </li>
              <li>
                <a href="#Popular" className="nav__link"  onClick={closeMenu}>
                  Popular
                </a>
              </li>
              <li>
                <a href="#Delivery" className="nav__link"  onClick={closeMenu}>
                  Delivery
                </a>
              </li>
              <li>
                <a href="#Contact" className="nav__link"  onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
           {/* <div className="nav-close" onClick={menu}>
              <i className="ri-close-large-fill"></i>
            </div>  */}
          </div>
             <div className="nav-toggle" onClick={menu}>
               <i className="ri-apps-2-fill"></i>
               </div>
        </nav>
      </section>
    </div>
  );
}

export default header;
