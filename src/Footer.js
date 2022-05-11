import './App.css';
import React from 'react'
import { Button, Nav, Navbar, Container, Form, FormControl, footer, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function foot() {
    return (



        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container fluid>

                <Col xs="auto"></Col>
                <Col xs={2}>
                    <Nav className="flex-column">
                        <Nav.Link href="aboutUS">About Us</Nav.Link>
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                        <Nav.Link href="directions">Directions</Nav.Link>
                        <Link className="nav-link" to="/openingTimes">Opening Times</Link>
                    </Nav>
                </Col>



                <Col xs={9} >
                    <Nav className="flex-column" >
                        <Nav.Link href="classifications">Classifications</Nav.Link>
                        <Nav.Link href="discussionBoard">Discussion Board</Nav.Link>
                        <Nav.Link href="places">Places to go</Nav.Link>
                        <Nav.Link href="#">Platinum badge </Nav.Link>
                    </Nav>
                </Col>

            </Container>
        </Navbar >

    );
}

export default foot;