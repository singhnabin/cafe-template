import React from "react";
import "./Location.css";
import { Col, Row } from "react-bootstrap";

function Location() {
  return (
    <div className="google__map">
      <Row>
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.9012735698219!2d80.55866307534033!3d28.76538812174499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1939c5033c2b9%3A0x746dbea9f3beae19!2zMjjCsDQ1JzU0LjYiTiA4MMKwMzMnMzAuMSJF!5e0!3m2!1sen!2sus!4v1608672051998!5m2!1sen!2sus"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
            title="Our Location"
          ></iframe>
          <div className="location__tag">
            <div>Our Location</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Location;
