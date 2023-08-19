/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const TeamComponent = () => {
    return (
        <div>
            <div className="spacer team2 m-blue" id='follow'>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Follow Matthew & Teammates</h2>
                        </Col>
                    </Row>
                    <Row className="m-t-30">


                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Matthew</h5>
                                        <p>blahbblah.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic ">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Teammate</h5>
                                        <p>balh blah.</p>
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

export default TeamComponent;
