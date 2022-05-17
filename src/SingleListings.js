import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from './SingleContent';
import "./Listings.css";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";


const SingleListings = () => {
    const [movies, setMovies] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4005/movie/read/${movieId}`)
        .then((response) => {
            setMovies(response.data[0]); 
        });
    }, []);

    return (
        <div>
            <Container>
                <h1>Movie</h1>
                <Row className="listing">
                    <Col> <SingleContent {...movies} /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SingleListings;

