import React from "react";
import { Col, Row } from "react-bootstrap";
import Discount from "./Discount";
import "./Special.css";

function Special() {
  return (
    <div>
      <Row>
        <Col>
          <div className="special__wrapper">
            <h2 className="special__text">Our Special 3D Cake</h2>
            <div className="special__pricing">
              <Discount />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Special;
