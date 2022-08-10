import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">
                <img
                src="tm-removebg.png"
                width="45"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav>
            <Nav.Link href="google.com">Home</Nav.Link>
            <Nav.Link href="exercitii.js">Exercitii</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;