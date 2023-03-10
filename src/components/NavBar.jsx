import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./../assets/img/logo.svg";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md" className="p-0">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link className="text-dark" href="#about">
                About Us
              </Nav.Link>
              <Nav.Link className="text-dark" href="#services">
                Services
              </Nav.Link>
              <Nav.Link className="text-dark" href="#team">
                Team
              </Nav.Link>
              <Nav.Link className="text-dark" href="#client">
                Clients
              </Nav.Link>
              <Nav.Link className="text-dark" href="#contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
