import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";
import { Navbar, Container, Button, NavDropdown, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <div className='container'>
      <div className="text-center">
        <img src={logo}></img>
        <p><b>Journalism Without Fear or Favour</b></p>
        <p><small>{moment().format('MMMM D, YYYY, h:mm:ss a')}</small></p>
      </div>
      <div className="d-flex">
        <Button className="btn-danger">Latest news</Button>
        <Marquee >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        <Marquee >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>
      <Navbar className='my-2' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Daily star</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">about</Nav.Link>
              <Nav.Link href="#pricing">carrier</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">Log out</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button>log in</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;