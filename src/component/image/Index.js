import React from "react";
import { Card } from "react-bootstrap";
import "./Image.css";

function Index({ variant, src }) {
  return (
    <div className="cafe__image">
      <Card.Img variant={variant} src={src} className="cafe__image__card" />
    </div>
  );
}

export default Index;
