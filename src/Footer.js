import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Nav, Navbar, Container, Form, FormControl, footer, Card, Col, Row } from 'react-bootstrap';



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
                        <Nav.Link href="openingTimes">
                            Opening Times
                        </Nav.Link>
                    </Nav>
                </Col>



                <Col xs={9} >
                    <Nav className="flex-column" >
                        <Nav.Link href="classifications">Classifications</Nav.Link>
                        <Nav.Link href="discussionBoard">Discussion Board</Nav.Link>
                        <Nav.Link href="places">Places to go</Nav.Link>
                        <Nav.Link href="#"> </Nav.Link>
                    </Nav>
                </Col>

            </Container>
        </Navbar >

    );
}

export default foot;
