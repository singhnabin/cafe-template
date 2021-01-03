import React from "react";
import Card from "./Card";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <h2>Our Product</h2>
      <div className="product__info">
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card />
      </div>
    </div>
  );
}

export default Product;
