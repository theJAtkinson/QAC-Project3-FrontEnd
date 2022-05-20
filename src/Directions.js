import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import imgLocation from './images/Location.png';
import imgCinema from './images/Cinema.jpg';

const Directions = () =>
    <div>
        <Container>
            <br />
            <h1><b>Directions</b></h1>
            <br/>
            <Row>
                <Col xs={3}>

                    <h3><b>Location</b></h3>
                    1st Floor <br/>
                    International House <br/>
                    1 St Katharines Way <br/>
                    London <br/>
                    E1W 1UN
                    <br/>
                    <br/>
                    <br/>
                    <h3><b>Transport</b></h3>
                    Nearest tube station: <br/>
                    Tower Hill Station
                </Col>
                <Col xs={9}>
                    <Image fluid="false" src={imgLocation} width="60%" />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={3}>    
                </Col>
                <Col xs={9}>
                    <Image fluid="false" src={imgCinema} width="60%" />
                </Col>
            </Row>
        </Container>
    </div>

export default Directions;