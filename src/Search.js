import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Nav, Navbar, Container, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Search = () => {

    const [searchText, setSearchText] = React.useState('');
    const [movies, setMovies] = React.useState([]);

    async function getMovies() {
        let res = await axios.get("http://localhost:4005/movie/read");
        setMovies(res.data);
    }

    useEffect(() => {
        
       getMovies()
    }, []);

    return (

        <div>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Link className="nav-link" to="/SearchResult"><Button>Search</Button></Link>
            </Form>

            
        </div>
    )


}

export default Search;