import React from 'react'
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleContent from './SingleContent';


export default class Listings extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] }
    }

    componentDidMount() {
        axios.get("http://localhost:4005/movie/read")
            .then((response) => { this.setState({ movies: response.data }) })
    }

    render() {


        return (
            <Container>
                <h1>Listings</h1>
                <Row > {this.state.movies.map(({ movie_name, actors, director, img, classification }) => {

                    return (

                        <Col xs={6}  >
                            <div>
                            <Link className="nav-link" to="/img1"> <Image src={img} width="250px" height="250px"/></Link>
                            <br />
                            {movie_name} <br />
                            {actors} <br />
                            {director} <br />
                            {classification} <br />
                            <br />
                            </div>
                        </Col>)

                })
                }



                </Row>

            </Container>
        )
    }
}