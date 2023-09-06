/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import Image from "next/image";
import img1 from "../../../assets/images/ui/matt_kroll_2.jpg";
import Link from "next/link";

const TeamComponent = () => {
    return (
        <div>
            <div className="spacer team2 m-blue" id='follow'>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Follow Matthew! </h2>
                        </Col>
                    </Row>
                    <Row className="m-t-30  justify-content-center">


                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic">
                                <Image
                                    src={img1}
                                    alt="img"
                                    className="img-responsive img-rounded"
                                    />
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://www.youtube.com/@thew2blue"><i className="fa fa-youtube"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/matthew.k0/?hl=en"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Matthew Kroll</h5>
                                        <p>University of Michigan Class of 2026</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="9" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <h5>
                            I’m Matthew Kroll and I am currently a student-athlete at the University of Michigan,
                            competing for the men’s swim team. I am going into my sophomore year and will be studying
                            mechanical engineering with future aspirations of entrepreneurship. My motivation for attempting
                            to swim a marathon actually comes from my good friend and teammate, Ryan Hume. The conversation
                            started during a social kick at practice where we wondered how long swimming a marathon would take
                            and how difficult it might be. After talking about it more, we decided on trying to swim one despite
                            all of the noise saying, “you’re crazy.” The idea came about that we would use the platform to raise
                            awareness for a cause; we wanted the cause to be close to heart and close to home, hence why we chose
                            to support the Michigan State Swim & Dive team and inspire a new trend for other lost programs.
                            We hope that the Marathon for MSU will generate enough support for the reinstatement of the MSU
                             team and draw attention to other programs across the nation that have recently been cut.
                             </h5>
                             <Link href="https://www.youtube.com/watch?v=651sFTCklhg"
                            target='_blank'>
                            <Button className="btn btn-md m-t-30 btn-info-gradiant font-14">
                            Check Out Matthew Video About His Marathon Swim!
                            </Button>
                            </Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;
