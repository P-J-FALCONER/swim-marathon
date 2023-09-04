/* eslint-disable */
import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../assets/images/ui/matt_kroll_1.jpg";

const BannerComponent = () => {
  return (
    <div>
      <div className="spacer msu-green" id='about-matt'>
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">About Event</h1>
              <h5 className="subtitle">
              In the month of September, participating teams and clubs are challenged to swim 26.2 miles and help save Spartan Swim and Dive. There will be prizes going to the fastest relays, top fundraisers, and individual finishers.
The brainchild of University of Michigan swimmer Matthew Kroll, Marathon for MSU sets aside a longtime school rivalry to focus on the greater issues facing our sport and amplify efforts to bring back the Michigan State Men’s and Women’s Swim and Dive teams.
              </h5>
              <Link href="https://www.youtube.com/watch?v=651sFTCklhg"
              target='_blank'>
              <Button className="btn btn-md m-t-30 btn-info-gradiant font-14">
              Check Out Matthew Video About Marathon for MSU Here!
              </Button>
            </Link>

            </Col>
            <Col md="5" className="text-center">
            <Image
              src={img1}
              alt="img"
              className="img-responsive img-rounded"
            />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
