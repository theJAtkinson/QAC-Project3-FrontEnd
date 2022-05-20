import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SingleContent from './SingleContent';
import "./Listings.css";

const NewReleases = () => {
    const [newMovies, setNewMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4005/movie/read").then((response) => {
            setNewMovies(response.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <h1>New Releases</h1>
                <div className="listing">
                    {newMovies.filter((b) => (b.id === 1 || b.id === 4 || b.id === 5 || b.id === 6)).map((c) => <Col onClick={()=>{navigate(`/SingleListings/${c.id}`)}} xs={4}><SingleContent key={c.id} {...c}/></Col>)}
                </div>
            </Container>
        </div>

    );
}

export default NewReleases;