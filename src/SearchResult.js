import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import SingleContent from './SingleContent';
import "./Listings.css";

function SearchResult() {

    const { searchable } = useParams();
    const [results, setResults] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:4005/movie/searchMovie/${searchable}`)
            .then((res) => {
                setResults(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [searchable]);

    return (
        <div>
            <Container>
                <h1>Search Results</h1>
                {results.length === 0 && <p> No results found for <i>'{searchable}'</i></p>}

                <Row className="listing">
                    {results.map((c) => {
                        console.log(c);
                        return (
                            <Col xs={4}>
                                <SingleContent {...c} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default SearchResult;