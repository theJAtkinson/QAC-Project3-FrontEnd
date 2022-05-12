import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Nav, Navbar, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function header() {
  return (

    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">QA Cinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/Listings">Listings</Link>
              <Nav.Link href="#newReleases">New Releases</Nav.Link>
              <Nav.Link href="#screens">Screens</Nav.Link>
              <Nav.Link href="#bookTickets">Books Tickets</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light dark">🔍</Button>
            </Form>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default header;
