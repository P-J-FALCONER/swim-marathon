import React from "react";
import {
  Row,
  Col,
  Container,
  Button
} from "reactstrap";

const ContactComponent = () => {
  return (
    <div>

      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="justify-content-center">
                <Col md="7" className="text-center">
                  <h2 className="title">Contact Us</h2>
                  <h6 className="subtitle">
                    Have questions? Want to get involved? Send us a message and we'll get back to you as soon as possible! Email us at fightforspartanswimdive@gmail.com
                  </h6>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
