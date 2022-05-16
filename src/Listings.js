import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from './SingleContent';
import "./Listings.css";
import Search from './Search'

const Listings = () => {
    const [movies, setMovies] = React.useState([]);





    React.useEffect(() => {
        axios.get("http://localhost:4005/movie/read").then((response) => {
            setMovies(response.data);
            console.log(movies)
        });
    }, []);



    return (


        <div>

            <h1>Movie Listing</h1>
            <div className="listing">
                {movies && movies.map((c) => <SingleContent key={c.id} movie_name={c.movie_name} director={c.director} actors={c.actors} classification={c.classification} img={c.img} />)}
            </div>
        </div>

    );
}

export default Listings;