import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Base from "../../Base";

import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, loading, didRedirect } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    // signin({ email, password })
    //   .then(data => {
    //     if (data.error) {
    //       setValues({ ...values, error: data.error, loading: false });
    //     } else {
    //       authenticate(data, () => {
    //         setValues({ ...values, didRedirect: true });
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <Base>
      <Row className="cafe__login">
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Login Page</h2>
          <h3>{JSON.stringify(values)}</h3>
          <Form validated={false}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange("email")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange("password")}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => onSubmit()}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Base>
  );
}

export default Login;
