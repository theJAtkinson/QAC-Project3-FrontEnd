import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Directions = () =>
    <div>
        <Container>
            <br />
            <h1><b>Directions</b></h1>
            <br />

            <Row>
                <Col>
                    Location:
                </Col>
                <Col>
                    1st Floor <br/>
                    International House <br/>
                    1 St Katharines Way <br/>
                    London <br/>
                    E1W 1UN 
                </Col>
            </Row>
        </Container>
    </div>

export default Directions;