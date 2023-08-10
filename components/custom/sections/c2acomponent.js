/* eslint-disable */
import React from "react";
import { Container } from "reactstrap";

const C2aComponent = () => {
  return (
    <div>
      <div className="mini-spacer bg-info text-white c2a7 " id='signup'>
        <Container>
          <div className="d-flex">
            <div className="display-6 align-self-center">
            Register here to be eligible for cool prizes, including custom Nike swimsuits and an appearance by retired U of M coach Mike Bottom!
            </div>
          </div>
        </Container>
      </div>
      <div className="mini-spacer bg-info text-white c2a7 " id='signup'>
        <Container>
          <div className="d-flex">
            <div className="ml-auto m-t-10 m-b-10 align-self-center">
              <button className="btn btn-danger btn-md btn-arrow m-t-20d">
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
