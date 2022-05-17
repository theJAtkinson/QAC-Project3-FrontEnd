import React from 'react';
import { Container, Row, Image, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import seatingplan from './images/seatingplan.jpg'

const Screens = () =>
    <div>
        <Container>
            <br />
            <h1><b>Screens</b></h1>
            <br />
            <Row>
            <h2>Standard Screen (screen 1-7)</h2>
                <Col>
                    <Image src={"https://images.unsplash.com/photo-1617914309185-9e63b3badfca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}  width="100%"  />
                </Col>

             <Col xs={6}>
                    <Image src={"https://www.dorkinghalls.co.uk/wp-content/uploads/2018/11/seating_plans_masonic_cinema.jpg"} width="112%" />
                </Col>
             
            </Row>
            <br />
            <br />
            <Row>
                 <h2>Deluxe Screen (Screen 8-9)</h2>
                   <p>Lean back in the luxury of our fully-reclining seats that have three times the standard legroom and more personal space. Unfold the built-in table to enjoy a sumptuous feast from our Luxe menu. </p>
                <Col xs={6}>
                    <Image src={"https://www.showcasecinemas.co.uk/media/1663/conference-image-low-res-2.jpg"}  width="100%"  />
                </Col>

             <Col xs={6}>
                    <Image src={seatingplan} width="105%" />
                </Col>
             
                  



                   
             

             
            </Row>
            
                

        </Container>

    </div>

export default Screens;