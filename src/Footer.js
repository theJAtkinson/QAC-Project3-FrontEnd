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
                        <Link className="nav-link" to="/aboutUs">About Us</Link>
                        <Link className="nav-link" to="/contactUs">Contact Us</Link>
                        <Link className="nav-link" to="/directions">Directions</Link>
                        <Link className="nav-link" to="/openingTimes">Opening Times</Link>
                    </Nav>
                </Col>



                <Col xs={9} >
                    <Nav className="flex-column" >
                        <Link className="nav-link" to="/classifications">Classifications</Link>
                        <Nav.Link href="discussionBoard">Discussion Board</Nav.Link>
                        <Link className="nav-link" to="/placesToGo">Places To Go</Link>
                        <Nav.Link href="#">Platinum badge </Nav.Link>
                    </Nav>
                </Col>

            </Container>
        </Navbar >

    );
}

export default foot;
