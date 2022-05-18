import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Nav, Navbar, Container, Form, FormControl, Image } from 'react-bootstrap';
import Search from './Search'
import { Link } from 'react-router-dom';
import logo from './images/cinemalogo.png'


function header() {
  return (

    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><Image width="90px" src={logo}/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/Listings">Listings</Link>
              <Link className="nav-link" to="/newReleases">New Releases</Link>
              <Link className="nav-link" to="/Screens">Screens</Link>
              <Link className="nav-link" to="/Bookings">Book Tickets</Link>

            </Nav>
            <Search/>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default header;
