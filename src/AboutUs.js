import React from 'react'
import LinkedInLogo from './images/LinkedInLogo.png';
import GithubLogo from './images/GithubLogo.png';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';


const aboutUs = () =>
    <div>
        <Container>
            <br/>
            <h1 ><b>About Us</b></h1>
            <br/>
            <h5>
                QA Cinema is part of QA International - one of the world's leading cinema operators, managing the most respected brands in major European markets and Taiwan, spanning ten countries, over 280 sites and over 2,400 screens.
            </h5>
            <br/>
            <br/>
            <h3> The Team </h3>
            <br/>
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
                    <a href="https://github.com/G-J-Evans" ><Image src={GithubLogo} width="30px" /></a> <a href="https://www.linkedin.com/in/gregory-evans-29414a236/" ><Image src={LinkedInLogo} width="30px" /></a>
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
            <br/>
            <br/>
            <div> ---- THE BELOW AREA IS DISTINCT -------------------------------------------------</div>
            <br/>
            <h3>
                Scrum  :
                <a href="https://www.scrum.org" target="_blank" rel="noreferrer">
                    <Button variant="outline-light dark">
                        Home of scrum
                    </Button>
                </a>
            </h3>
            <p>
                Scrum is a framework with allows people to address complex adaptive problems, whilst creating products of the highest possible value. Scrum is lightweight and agile allowing teams and organizations to create value though flexable solutions to complex problems.<br/>
                <br/>
                For this project scrum affected our creation of the site by allowing us to bring up potential and actual blockers in the daily standups and reduce the effect of these or mitigate them all together. It also allowed us to have a flexable approach to design and work flow. Allowing every person to be a more effective member of the team.
            </p>
            <br/>
        </Container>
    </div>;

export default aboutUs;
