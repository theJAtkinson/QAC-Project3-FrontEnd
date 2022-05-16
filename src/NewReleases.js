import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleContent from './SingleContent';
import "./Listings.css";


const NewReleases = () => {
    const [newMovies, setNewMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:4005/movie/read").then((response) => {
            console.log(response.data)
            setNewMovies(response.data);
        });
    }, []);

    return (


        <div>

            <h1>New Releases</h1>
            <div className="listing">

            {newMovies.filter((b) => (b.id == 1 || b.id == 4 || b.id == 5 || b.id == 6)).map((c) => <Link className="nav-link" to={"/movies/"+id}><SingleContent key={c.id} movie_name={c.movie_name} director={c.director} actors={c.actors} classification={c.classification} img={c.img} /> </Link>)} 
            </div>
        </div>

    );
}

export default NewReleases;