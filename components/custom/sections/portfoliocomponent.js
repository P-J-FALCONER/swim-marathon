/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="spacer msu-white" id='sample-sets'>
        <Container>
          <Row className="justify-content-center">
            <Col md="12" className="text-center">
              <h2 className="title set-name">Need some inspiration? Here’s some ways you or your team can complete a Marathon for MSU!</h2>
              <h6 className="subtitle black_font">
              1 mile in a pool equals …..
              </h6>
              <h6 className="subtitle black_font">
              Yards
                1,760 yards
              </h6>
              <h6 className="subtitle black_font">
              Meters
                1,609.3 meters
              </h6>

            </Col>
          </Row>
          <Row className="m-t-40">
          <Col md="6">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h4 className="font-medium m-b-0 set-name">
                    25 Yard Pool Half Marathon Sets (23,100 yards)
                  </h4>
                  <ul>
                      <li>231 x 100</li>
                      <li>115 x 200 plus a 100 cool down</li>
                      <li>57 x 400 plus a 300 cool down</li>
                      <li>23 x 1000 plus a 100 cool down</li>
                  </ul>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h4 className="font-medium m-b-0 set-name">
                  50 Meter Pool Half Marathon Sets (21,100 meters)
                  </h4>
                  <ul>
                      <li>211 x 100</li>
                      <li>105 x 200 plus a 100 cool down</li>
                      <li>42 x 500 plus 100 cool down</li>
                      <li>21 x 1000 plus a 100 cool down</li>
                  </ul>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h4 className="font-medium m-b-0 set-name">
                    25 Yard Pool Marathon Sets (46,125 yards)
                  </h4>
                  <ul>
                      <li>461 x 100 plus a 25 cool down</li>
                      <li>230 x 200 plus a 125 cool down</li>
                      <li>115 x 400 plus 125 cool down</li>
                      <li>46 x 1000 plus a 125 cool down</li>
                  </ul>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h4 className="font-medium m-b-0 set-name">
                  50 Meter Pool Marathon Sets (42,200 meters)
                  </h4>
                  <ul>
                      <li>422 x 100</li>
                      <li>211 x 200</li>
                      <li>84 x 500 plus a 200 cool down</li>
                      <li>42 x 1000 plus a 200 cool down</li>
                  </ul>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h4 className="font-medium m-b-0 set-name">
                  25 Yard Pool Relays
                  </h4>
                  <ul>
                      <li>27 swimmers each swim a “mile” (1,775 yards)</li>
                      <li>43 swimmers each swim 1,000 and 3 swimmers each swim 1,050</li>
                      <li>22 swimmers each swim 2,000 and 1 swimmer swims 2,150</li>
                      <li>10 swimmers each swim 4,000 and 2 swimmers swim 3,075</li>
                      <li>8 swimmers each swim 5,200 and 1 swimmer swims 4,550</li>
                      <li>4 swimmers each swim 10,000 and 1 swimmers swims 6,150</li>
                  </ul>
                </CardBody>
                </a>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-shadow">
                <a href="/" className="img-ho">
                <CardBody>
                  <h4 className="font-medium m-b-0 set-name">
                  50 Meter Pool Relays
                  </h4>
                  <ul>
                      <li>26 swimmers each swim a “mile” (1,650 meters)</li>
                      <li>41 swimmers each swim 1,000 and 1 swimmer swims 1,200</li>
                      <li>20 swimmers each swim 2,000 and 1 swimmer swims 2,200</li>
                      <li>10 swimmers each swim 4,000 and 1 swimmer swims 2,200</li>
                      <li>8 swimmers each swim 5,000 and 1 swimmer swims 2,200</li>
                      <li>5 swimmers each swim 8,450</li>
                  </ul>
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
