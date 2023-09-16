import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
            Join us for the Marathon for MSU!
            </h1>
            <h4 className="subtitle font-light">
            We challenge teams to complete 26.2 miles in a pool, and raise awareness for our sport!
            </h4>
            <Link href="https://battleforspartanswimanddive.com/"
            target="_blank">
              <Button className="btn btn-md m-t-30 btn-info-gradiant font-14">
              Pledge Support Here
              </Button>
            </Link>
          </Col>
          <Col lg="6" md="6">
            {/* <Image src={bannerimg} alt="hero banner" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
