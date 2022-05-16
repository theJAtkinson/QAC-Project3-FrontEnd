import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from './SingleContent';
import "./Listings.css";
import Search from './Search'
import { Container } from 'react-bootstrap';



const NewReleases = () => {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:4005/movie/read").then((response) => {
            setMovies(response.data);
            console.log(movies)
        });
    }, []);



    return (


        <div>
            <Container>

            <h1>New Releases</h1>
            
            </Container>
            </div>
    

    );
}

export default NewReleases;