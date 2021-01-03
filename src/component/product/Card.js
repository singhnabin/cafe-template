import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="product__card">
      <img
        className="product__image"
        src="https://cakenkitchen.com/wp-content/uploads/2017/09/3D.jpg"
        alt=""
      />
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
      <div className="product_price">
        <p className="product__price__before">
          <span className="product__price_rs">Rs</span> 1000
        </p>
        <p className="product__price__discount">25% OFF</p>
        <p className="product__price__current">Rs 800 only</p>
      </div>
    </div>
  );
}

export default Card;
