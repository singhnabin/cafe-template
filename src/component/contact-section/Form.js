import React from "react";
import { Icon } from "@iconify/react";
// import sendCircle from "@iconify/icons-mdi/send-circle";

import "./form.css";
import { Button } from "react-bootstrap";

const formInputs = [
  {
    id: "name",
    type: "text",
    label: "Your name",
    placeholder: "Enter your name",
    required: true,
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
    required: true,
  },
  {
    id: "message",
    type: "textarea",
    label: "Your message",
    placeholder: "How can we help you? Or you us?",
    required: true,
  },
];

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Send us a message</h2>
    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === "textarea" ? (
          <textarea
            className="form-textarea"
            placeholder={input.placeholder}
            required={input.required}
          />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
            
          />
        )}
      </label>
    ))}

    <Button variant="primary" className="form-submit" type="submit">
      Send
    </Button>
  </form>
);

export default Form;
