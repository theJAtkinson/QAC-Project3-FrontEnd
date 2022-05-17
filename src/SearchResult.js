import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import SingleContent from './SingleContent';
import "./Listings.css";

function SearchResult() {

    const { searchable } = useParams();
    const [results, setResults] = useState([]);
    const [emptyResult, setEmptyResult] = useState('hidden')

    useEffect(() => {
        axios.get(`http://localhost:4005/movie/searchMovie/${searchable}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.length == 0) {
                    setEmptyResult("")
                } else {
                    setResults(res.data)
                }

            })
    }, []);

    return (
        <div>
            <Container>
                <h1>Search Results</h1>
                <p hidden={emptyResult}>No results found for <i>'{searchable}'</i></p>

                <Row  className="listing">
                    {results.map((c) => {
                        console.log(c);
                        return (
                            <Col xs={4}>
                                <SingleContent movie_name={c.movie_name} director={c.director} actors={c.actors} classification={c.classification} img={c.img} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default SearchResult;