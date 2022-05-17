import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from './SingleContent';
import "./Listings.css";
import { Container, Row, Col } from 'react-bootstrap';


const Listings = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4005/movie/read").then((response) => {
            setMovies(response.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <h1>Movie Listing</h1>
                <Row className="listing">
                    {movies && movies.map((c) => <Col xs={4}><SingleContent key={c.id} movie_name={c.movie_name} director={c.director} actors={c.actors} classification={c.classification} img={c.img} /></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default Listings;

