import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Nav, Navbar, Container, Form, FormControl } from 'react-bootstrap';
import Search from './Search'
import { Link } from 'react-router-dom';


function header() {
  return (

    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">QA Cinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


           
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
