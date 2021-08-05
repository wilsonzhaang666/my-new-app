import React from 'react';
import {Navbar, Nav,NavDropdown,} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

class Header extends React.Component {
  render() {
  return (
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Vibe-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>


    </Nav>
    <Nav>
      <Nav.Link href="/Login">Log In</Nav.Link>
      <Nav.Link href="/Registration">Registration</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
}
}
export default Header;
