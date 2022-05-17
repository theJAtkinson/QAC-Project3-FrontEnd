import React from 'react'
import { Container, Row, Image, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlacesToGo = () =>
    <div>
        <Container>
            <br />
            <h1><b>Places To Go</b></h1>
            <br />
            <Row>
                <Col xs={6}>
                    <Image src={"https://www.spccs1.co.uk/ImageAssets/810f1b9e4e57469db31ae08183bebbe4.JPG"} />
                    <br />
                    <br />
                    <h3><a href="https://www.slugandlettuce.co.uk/towerbridge" target="_blank">
                        <Button variant="outline-light dark">
                            Slug and Lettuce - Tower Bridge
                        </Button>
                    </a></h3>
                    <p>Beautifully located on St Katharine Docks right by the waterside and to an impressive backdrop of the Tower of London, The Slug & Lettuce Tower Bridge is the exciting newest addition to The Slug & Lettuce family.</p>
                </Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row>
                <Col xs={6}>
                    <Image src={"https://dynl.mktgcdn.com/p/ixY-R7NtkmZtfimKtcemlWWyZ0JINTrsjqkHLyBTyjs/450x450.jpg"} />
                    <br />
                    <br />
                    <h3><a href="https://www.wagamama.com/restaurants/london/tower-hill" target="_blank">
                        <Button variant="outline-light dark">
                            Wagamama - Tower Hill
                        </Button>
                    </a></h3>
                    <p>our food is fresh + so is our service. which is why bookings are off the menu + why our teams are experts at getting you seated + ready to slurp at speed. a little ginger to warm you up. chillies that kick. noodles to nourish the body and soul. our 50% plant-based menu is inspired by the flavours of asia. created to soothe, nourish, sustain + inspire. from bowl to soul</p>

                </Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row>
                <Col xs={6}>
                    <Image src={"https://hrp.imgix.net/https%3A%2F%2Fhistoricroyalpalaces.picturepark.com%2FGo%2FA1PyYFjx%2FV%2F51644%2F1?auto=format&s=4a7295c05958c3fd0afaf8f0937d77e6"} width="150%" />
                    <br />
                    <br />
                    <h3><a href="https://www.hrp.org.uk/tower-of-london/" >
                        <Button variant="outline-light dark">
                            The Tower of London
                        </Button>
                    </a></h3>
                    <p>Explore London's iconic castle and World Heritage Site. Get up close to the Crown Jewels in the year of the Platinum Jubilee, meet the legendary Yeoman Warders and ravens and see the Tower like never before.</p>
                </Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row>
                <Col xs={6}>
                    <Image src={"https://www.towerbridge.org.uk/sites/default/files/styles/focal_point_4_3/public/2020-04/Guide-Book-Cover-5.jpg.952x3569_q100.jpg?h=9aa4067b&itok=FJDtOgjp"} width="150%" />
                    <br />
                    <br />
                    <h3><a href="https://www.towerbridge.org.uk/">
                        <Button variant="outline-light dark">
                            Tower Bridge
                        </Button>
                    </a></h3>
                    <p>From the high-level Walkways, take in stunning panoramic views and experience the thrill of seeing London life through the Glass Floor. <br/>

                        Follow in the footsteps of the unsung heroes of Tower Bridge. Uncover their stories and soak in the atmosphere of the working Bridge in one of London's true hidden gems: the magnificent Victorian Engine Rooms.
                    </p>
                </Col>
            </Row>

        </Container>

    </div>

export default PlacesToGo;