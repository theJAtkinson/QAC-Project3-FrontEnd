import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from './SingleContent';
import "./Listings.css";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Listings = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


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
                    {movies && movies.map((c) => <Col onClick={()=>{navigate(`/SingleListings/${c.id}`)}} xs={4}><SingleContent key={c.id} {...c}/></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default Listings;

