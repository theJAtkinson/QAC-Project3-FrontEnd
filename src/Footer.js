import './App.css';
import './index.css';
import React from 'react'
import { Button, Nav, Navbar, Container, Form, FormControl, footer, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function foot() {
    return (
        <body>
        <div className ="container"></div>
        <footer>
            <div className= "columns">
            <div className= "column">
            <ul>
            <li><a href="/aboutUs">About Us</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
            <li><a href="/Directions">Directions</a></li>
            <li><a href="/openingTimes">Opening Times</a></li>
            </ul>
            </div>
            <div className= "column">
            <ul>
            <li><a href="/classifications">Classifications</a></li>
            <li><a href="/discussionBoard">Discussion Board</a></li>
            <li><a href="/placesToGo">Places To Go</a></li>
            <li><a href="#">Platinum badge </a></li>
            </ul>
            </div>
            </div>
        </footer>
        </body>
        





        // <Navbar bg="dark" variant="dark">
        //     <Container className="footer">

        //         <Col xs="auto"></Col>
        //         <Col xs={2}>
        //             <Nav className="flex-column">
        //                 <Link className="nav-link" to="/aboutUs">About Us</Link>
        //                 <Link className="nav-link" to="/contactUs">Contact Us</Link>
        //                 <Link className="nav-link" to="/directions">Directions</Link>
        //                 <Link className="nav-link" to="/openingTimes">Opening Times</Link>
        //             </Nav>
        //         </Col>



        //         <Col xs={9} >
        //             <Nav className="flex-column" >
        //                 <Link className="nav-link" to="/classifications">Classifications</Link>
        //                 <Link className="nav-link" to="/discussionBoard">Discussion Board</Link>
        //                 <Link className="nav-link" to="/placesToGo">Places To Go</Link>
        //                 <Nav.Link href="#">Platinum badge </Nav.Link>
        //             </Nav>
        //         </Col>

        //     </Container>
        // </Navbar >

    );
}

export default foot;
