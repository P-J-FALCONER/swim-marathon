import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

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
            In the month of September
            </h4>
            <Link
              href="https://battleforspartanswimanddive.com/"
              className="btn btn-success m-r-20 btn-md m-t-30 "
            >
              Pledge Support Here
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
