/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container id='about-matt'>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">About Matthew</h1>
              <h5 className="subtitle">
              I’m Matthew Kroll and I am currently a student-athlete at the University of Michigan, competing for the men’s swim team. I am going into my sophomore year and will be studying mechanical engineering with future aspirations of entrepreneurship. My motivation for attempting to swim a marathon actually comes from my good friend and teammate, Ryan Hume. The conversation started during a social kick at practice where we wondered how long swimming a marathon would take and how difficult it might be. After talking about it more, we decided on trying to swim one despite all of the noise saying, “you’re crazy.” The idea came about that we would use the platform to raise awareness for a cause; we wanted the cause to be close to heart and close to home, hence why we chose to support the Michigan State Swim & Dive team and inspire a new trend for other lost programs. We hope that the Marathon for MSU will generate enough support for the reinstatement of the MSU team and draw attention to other programs across the nation that have recently been cut.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30" id='support'>
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">
                      Support The Cause
                    </h3>
                    <p>
                    Pledge your support to the Battle for Spartan Swim and Dive’s campaign to reinstate their program.
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="https://battleforspartanswimanddive.com/"
                      target="_blank"
                    >
                      <span>
                        Pledge Your Support <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
