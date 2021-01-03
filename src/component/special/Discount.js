import React, { useEffect, useState } from "react";
import "./Special.css";
import { Fade, Slide } from "react-reveal";
import { Card, Col, Row } from "react-bootstrap";
import Index from "../image/Index";
function Discount() {
  const [values, setValues] = useState({ discountStart: 0, discountEnd: 20 });

  const { discountEnd, discountStart } = values;
  const percentage = discountStart => {
    if (discountStart < discountEnd) {
      setValues({ ...values, discountStart: discountStart + 1 });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      percentage(discountStart);
    }, 30);
  });

  return (
    <div className="discount__wrapper">
      <Row>
        <Col>
          <Fade onReveal={() => percentage()}>
            <div className="discount__percentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                optio, commodi nisi omnis fuga hic reprehenderit quis neque
                minima tempora. Animi perferendis velit doloribus sunt quod
                labore nihil dicta perspiciatis? Accusantium, laborum provident
                in numquam non deleniti? Laborum dolores quae vero nihil tempora
              </p>
            </div>
          </Fade>
        </Col>
        <Col>
          <Slide>
            <div className="discount_description">
              <Card style={{ width: "20rem" }}>
                <Index
                  variant="top"
                  src="https://cakenkitchen.com/wp-content/uploads/2017/09/3D.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* <Image
                src="https://cakenkitchen.com/wp-content/uploads/2017/09/3D.jpg"
                fluid
              /> */}
            </div>
          </Slide>
        </Col>
      </Row>
    </div>
  );
}

export default Discount;
