import React from 'react';
import {Navbar, Nav,NavDropdown,} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
  return (
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link className="navbar-brand" to="/">Vibe-App</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className="nav-link" to="/">Home</Link>
    {this.props.username !== null &&
                <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">My Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/post">Posts</Link>
                </li>
                </>
              }
    

    </Nav>
    <Nav>
    <ul className="navbar-nav">
              {this.props.username === null
                ?
                <>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                <Nav.Link href="/Registration">Registration</Nav.Link>
                </li>
                </>
                :
                <React.Fragment>
                  <li className="nav-item">
                    <span className="nav-link text-light">Welcome, {this.props.username}</span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login" onClick={this.props.logoutUser}>Logout</Link>
                  </li>
                </React.Fragment>
              }
            </ul>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
}
}
export default Header;
