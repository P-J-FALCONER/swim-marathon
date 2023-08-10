/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";

const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">About Event</h1>
              <h5 className="subtitle">
              On Sept. 3, participating teams and clubs are challenged to swim 26.2 miles and help save Spartan Swim and Dive. There will be prizes going to the fastest relays, top fundraisers, and individual finishers.
The brainchild of University of Michigan swimmer Matthew Kroll, Marathon for MSU sets aside a longtime school rivalry to focus on the greater issues facing our sport and amplify efforts to bring back the Michigan State Men’s and Women’s Swim and Dive teams.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
