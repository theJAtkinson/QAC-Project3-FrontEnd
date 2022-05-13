import React from 'react'
import './App.css';
import './index.css';
import LinkedInLogo from './images/LinkedInLogo.png';
import GithubLogo from './images/GithubLogo.png';
import { Table, Container, Image, Row, Col } from 'react-bootstrap';


const aboutUs = () =>
    <div>
        <Container>
            <br />
            <h1 ><b>About Us</b></h1>
            <br />


            <Row>
                <Col xs={3}>
                    Jonah Atikinson
                </Col>
                <Col xs={1}>
                    <a href=" https://github.com/theJAtkinson/" > <Image src={GithubLogo} width="30px" /></a> <a href="https://www.linkedin.com/in/jonah-atkinson-a0a507225/" ><Image src={LinkedInLogo} width="30px" /> </a>
                </Col>

            </Row>
            <br />
            <Row>
                <Col xs={3}>
                    Merisa Bishwakarma
                </Col>
                <Col xs={1}>
                    <a href="https://github.com/Merisabk" ><Image src={GithubLogo} width="30px" /></a> <a href="https://www.linkedin.com/in/merisa-bishwakarma/" ><Image src={LinkedInLogo} width="30px" /></a>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={3}>
                    Denzel Eggerue
                </Col>
                <Col xs={1}>
                    <a href="https://github.com/denzel33t" ><Image src={GithubLogo} width="30px" /></a> <a href="https://www.linkedin.com/in/denzel-e-059266198" ><Image src={LinkedInLogo} width="30px" /></a>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={3}>
                    Gregory Evans
                </Col>
                <Col xs={1}>
                    <a href=" https://github.com/theJAtkinson/" ><Image src={GithubLogo} width="30px" /></a> <a href="https://www.linkedin.com/in/jonah-atkinson-a0a507225/" ><Image src={LinkedInLogo} width="30px" /></a>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={3}>
                    Mohamed Jaleil
                </Col>
                <Col xs={1}>
                    <a href=" https://github.com/bowku" ><Image src={GithubLogo} width="30px" /></a> <a href="https://www.linkedin.com/in/mohamed-jaleil-6a837b16b/" ><Image src={LinkedInLogo} width="30px" /></a>
                </Col>
            </Row>

            <br />
            <br />
            <br />
            <br />

            <h5>
                QA Cinema is part of QA International - one of the world's leading cinema operators, managing the most respected brands in major European markets and Taiwan, spanning ten countries, over 280 sites and over 2,400 screens.</h5>







        </Container>



    </div>;

export default aboutUs;
