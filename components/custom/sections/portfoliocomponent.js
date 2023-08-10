/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="spacer" id='sample-sets'>
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Sample Sets</h2>
              <h6 className="subtitle">
              Need some inspiration? Here’s some ways you or your team can complete a Marathon for MSU!
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h5 className="font-medium m-b-0">
                    Distance Set 1
                  </h5>
                  <p className="m-b-0 font-14">10,000 Yards</p>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h5 className="font-medium m-b-0">
                  Distance Set 2
                  </h5>
                  <p className="m-b-0 font-14">10,000 Yards</p>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h5 className="font-medium m-b-0">
                  Distance Set 3
                  </h5>
                  <p className="m-b-0 font-14">10,000 Yards</p>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h5 className="font-medium m-b-0">
                  Distance Set 4
                  </h5>
                  <p className="m-b-0 font-14">10,000 Yards</p>
                </CardBody>
                </a>
              </Card>
            </Col>


          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
