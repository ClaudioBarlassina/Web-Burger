import React from "react";
import burger1 from "../assets/popular-burger-chicken.png"
import burger2 from "../assets/popular-burger-meat.png"
import burger3 from "../assets/popular-burger-grill.png"
import burger4 from "../assets/popular-burger-big.png"
import burger5 from "../assets/popular-burger-classic.png"
import ico from "../assets/quitar.png"
function home3() {
  return (
    <div className="container3-primary" id="Popular">
      <div className="home3-content-title">
        <h1 className="home3-title">Most Devoured Burgers</h1>
      </div>
      <div className="home3-data">
        <div className="home3-items">
          <img src={burger1 } alt="" className="img3-items" />
          <div className="home3-data-item">
            <div className="bloque1">
              <h3 className="bloque1-title-secundary">Chicken Burger</h3>
              <h3 className="bloque1-import">$6</h3>
            </div>
            <div className="bloque2"> <div className="bloque2"><img  className="ico"src={ico } alt="" /></div></div>
          </div>
              </div>
              <div className="home3-items">
          <img src={ burger2} alt="" className="img3-items" />
          <div className="home3-data-item">
            <div className="bloque1">
              <h3 className="bloque1-title-secundary">Meat Burger</h3>
              <h3 className="bloque1-import">$10</h3>
            </div>
            <div className="bloque2"> <div className="bloque2"><img  className="ico"src={ico } alt="" /></div></div>
          </div>
              </div>
              <div className="home3-items">
          <img src={burger3 } alt="" className="img3-items" />
          <div className="home3-data-item">
            <div className="bloque1">
              <h3 className="bloque1-title-secundary">Grill Burger</h3>
              <h3 className="bloque1-import">$12</h3>
            </div>
            <div className="bloque2"> <div className="bloque2"><img  className="ico"src={ico } alt="" /></div></div>
          </div>
              </div>
              <div className="home3-items">
          <img src={burger4 } alt="" className="img3-items" />
          <div className="home3-data-item">
            <div className="bloque1">
              <h3 className="bloque1-title-secundary">Classic Burger</h3>
              <p className="bloque1-import">$8</p>
            </div>
            <div className="bloque2"> <div className="bloque2"><img  className="ico"src={ico } alt="" /></div></div>
          </div>
              </div>
              <div className="home3-items">
          <img src={burger5 } alt="" className="img3-items" />
          <div className="home3-data-item">
            <div className="bloque1">
              <h3 className="bloque1-title-secundary">Big Burger</h3>
              <h3 className="bloque1-import">$15</h3>
            </div>
            <div className="bloque2"><img  className="ico"src={ico } alt="" /></div>
              
          </div>
        </div>
              
      </div>
    </div>
  );
}

export default home3;
