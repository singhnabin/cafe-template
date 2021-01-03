import React from "react";
import Form from "./Form";
import Info from "./Info";
import "./contact-section.css";
import { Col, Row } from "react-bootstrap";
const formInputs = [
  {
    id: "name",
    type: "text",
    label: "Your name",
    placeholder: "Enter your name",
  },
  {
    id: "tel",
    type: "tel",
    label: "Phone number",
    placeholder: "Enter phone number",
  },
  {
    id: "email",
    type: "email",
    label: "Email address",
    placeholder: "Enter email",
  },
  {
    id: "message",
    type: "textarea",
    label: "Your message",
    placeholder: "How can we help you? Or you us?",
  },
];
const ContactSection = () => (
  <>
    <div className="contact-section">
      <Row>
        <Col>
          <Form />
          <Info />
        </Col>
      </Row>
    </div>
  </>
);

export default ContactSection;
