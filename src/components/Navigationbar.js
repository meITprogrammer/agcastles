import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.jpg"



function Navigationbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary nav-title" data-bs-theme="light">
      <Container >
        <Navbar.Brand href="/">AG Castles & Kids Party Hire</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            {/* <Nav.Link><Link to='/about'>About</Link></Nav.Link> */}
            <NavDropdown title="Our Castles" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/bouncycastle'>Bouncy Castle</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/otherpartyhire'>Other Party Hire</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/softplayhire'>Soft Play Hire</Link></NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link><Link to='/contactus'>Contact Us</Link></Nav.Link>
            <Nav.Link><Link to='/booknow'>Book Now</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button href="mailto:agkidspartyhire@gmail.com" variant="info">Email Us</Button>{' '}
            <Button href="tel:021 125 4317" variant="warning">Call Us</Button>
            <a href="/"><img src={logo} width={75} alt='agcastle_logo'/></a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar;