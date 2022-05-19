import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class ContactUs extends React.Component {



    constructor() {
        super()

        this.state = {
            requestStatus: "",

            fullName: "",
            emailAddress: "",
            title: "",
            message: ""
        }

        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

        this.saveData = this.saveData.bind(this);
    }

    handleChangeFullName(event) {
        this.setState({ fullName: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ emailAddress: event.target.value });
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }


    saveData(err) {
        err.preventDefault();
        axios.post("http://localhost:4005/email/create", {
            fullname: this.state.fullName,
            title: this.state.title,
            body: this.state.message,
            email: this.state.emailAddress
        })
            .then((response) => {
                console.log(response);
                this.setState({ requestStatus: "Email Sent Succesfully" })
                this.setState({ fullName: "",
                emailAddress: "",
                title: "",
                message: ""})
            })
            .catch((err) => {
                err ? console.log(err) : console.log("-- Success --");
            });
    }


    render() {
        return (

            <div>
                <Container>
                    <br />
                    <h1 ><b>Contact Us</b></h1>
                    <Row>
                        <Col xs={5}>

                            <Form onSubmit={this.saveData}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control as="textarea" value={this.state.fullName} onChange={this.handleChangeFullName} rows={1} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={this.state.emailAddress} onChange={this.handleChangeEmail} placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control as="textarea" value={this.state.title} onChange={this.handleChangeTitle} rows={1} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Leave Your Message</Form.Label>
                                    <Form.Control as="textarea" value={this.state.message} onChange={this.handleChangeMessage} rows={5} required />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <br />
                                <p> {this.state.requestStatus}</p>
                            </Form>
                        </Col>
                        <Col xs={1}>
                        </Col>
                        <Col>
                            <h1><b>Owner</b></h1>
                            <h2> Jordan Harrison</h2>
                            <br/>
                            <h2> Location </h2>
                            Location
                            <br/> <br/>
                            <h2> Email: </h2>
                            JordanHarrison@JordanHarrison.com
                        </Col>

                    </Row>
                </Container>
            </div>)
    }
}



