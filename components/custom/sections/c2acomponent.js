/* eslint-disable */
import React from "react";
import { Container, Button } from "reactstrap";
import Link from "next/link";

const C2aComponent = () => {
  return (
    <div>
      <div className="mini-spacer bg-info text-white c2a7 m-yellow " id='signup'>
        <Container>
          <div className="d-flex">
            <div className="display-6 align-self-center">
            Register here to be eligible for cool prizes, including Speedo swimsuits and an appearance by retired U of M coach Mike Bottom!
            </div>
          </div>
          <div className="d-flex">
            <div className="ml-auto m-t-10 m-b-10 align-self-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfgCKjT5xkox_PoVlHfsYc3BDv9NYObWxGzLjWN-9B1I5xULw/viewform">
              <Button className="btn btn-md m-t-30 btn-info-gradiant font-14">
              Sign Up
              </Button>
            </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default C2aComponent;
