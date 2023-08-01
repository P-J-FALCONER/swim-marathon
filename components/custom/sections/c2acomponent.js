/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature48/app-store.png";
import img2 from "../../../assets/images/features/feature48/play-store.png";

const C2aComponent = () => {
  return (
    <div>
      <div className="mini-spacer bg-info text-white c2a7 " id='signup'>
        <Container>
          <div className="d-flex">
            <div className="display-6 align-self-center">
            Register here to be eligible for cool prizes, including custom Nike swimsuits and an appearance by retired U of M coach Mike Bottom!
            </div>
            <div className="ml-auto m-t-10 m-b-10">
              <button className="btn btn-outline-light btn-md">
                Sign Up
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default C2aComponent;
