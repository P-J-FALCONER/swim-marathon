/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from "next/image";
import img1 from "../../../assets/images/ui/matt_kroll_3.jpg";
import img2 from "../../../assets/images/ui/ryan_hume.jpg";

const FinisherComponent = () => {
    return (
        <div>
            <div className="spacer team2 msu-green" id='follow'>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Marathon Finishers </h2>
                        </Col>
                    </Row>
                    <Row className="m-t-30">


                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic">
                                <Image
                                    src={img1}
                                    alt="img"
                                    className="img-responsive img-rounded"
                                    />
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Matthew Kroll & Ryan Hume</h5>
                                        <p>University of Michigan Class of 2026</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FinisherComponent;
