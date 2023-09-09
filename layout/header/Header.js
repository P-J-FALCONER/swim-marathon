import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import logo from "../../assets/images/logos/transparent_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="#about-matt">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-black nav-link"
                          : "nav-link"
                      }
                    >
                      Matthew's Story
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#signup">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-black nav-link"
                          : "nav-link"
                      }
                    >
                      Sign Up Here
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#sample-sets">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-black nav-link"
                          : "nav-link"
                      }
                    >
                      Sample Sets
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#follow">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-black nav-link"
                          : "nav-link"
                      }
                    >
                      Follow Matthew
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <NavLink
                  href="https://battleforspartanswimanddive.com/"
                  className="btn btn-light font-14"
                  target="_blank"
                >
                  Pledge Support Here
                </NavLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
