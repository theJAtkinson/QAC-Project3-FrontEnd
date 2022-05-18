import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';
import axios from 'axios';

function DiscussionBoard() {

    const [posts, setPosts] = useState([]);
    const [movies, setMovies] = useState([]);

    const [name, setName] = useState();
    const [rating, setRating] = useState("0");
    const [movie, setMovie] = useState();
    const [subject, setSubject] = useState();
    const [review, setReview] = useState();

    const [postForm, setPostForm] = useState("hidden");


    function populate() {
        axios.get("http://localhost:4005/post/read")
            .then((res) => {
                setPosts(res.data);
            });

        axios.get("http://localhost:4005/movie/read")
            .then((res) => {
                setMovies(res.data);
            })
    }
    
    useEffect(() => {
        populate();
    }, []);

    function ratingify(rating) {
        let output = ""
        for (let i = 1; i <= rating; i++) {
            output += "✪"
        }
        return output;
    }

    function getMovieId(movie_name) {
        for (let i = 0; i <= movies.length; i++) {
            if (movies[i].movie_name == movie_name) {
                return movies[i].id;
            }
        }
    }

    function submitPost(err) {
        err.preventDefault();
        axios.post("http://localhost:4005/post/create", {
            movie_id: getMovieId(movie),
            title: subject,
            body: review,
            rating: rating,
            fullname: name
        })
            .then((res) => {
                console.log(res.data);
                populate();
                setName("")
                setRating("")
                setMovie("")
                setSubject("")
                setReview("")
            })
    }

    function deletePost(postId){
        axios.delete(`http://localhost:4005/post/delete/${postId}`)
        .then((res) => {
            console.log(res.data);
            populate();
        })
    }


    return (
        <div>
            <Container >
                <h1>Discussion Board</h1>
                <br />
                <h2>Posts</h2>
                <br />
                <Row>
                    {posts.map((post) => {
                        return (
                            <Col xs={4}>
                                <div>

                                    <h3><b>{post.title}</b></h3>
                                    <p>
                                        &nbsp;&nbsp;<h4>{post.movie_name}<br /></h4>
                                        &nbsp;&nbsp;{ratingify(post.rating)}
                                    </p>
                                    <p>
                                        "{post.body}"
                                    </p>
                                    <h6>-<i>{post.fullname}</i></h6>
                                    <Button onClick={() => deletePost(post.id)} style={{ "font-size": "small" }} variant="outline-light dark">Delete</Button>
                                    <br />
                                    <br />

                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            <Container >
                <Button onClick={() => setPostForm("")} variant="outline-light dark">Add Review</Button>
                <div hidden={postForm}>
                    <Form onSubmit={submitPost}>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Full Name:</Form.Label>
                            <Form.Control name="nameField" type="text" onChange={(event) => setName(event.target.value)} value={name} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Movie:</Form.Label>
                            <Form.Select name="emailField" type="text" onChange={(event) => setMovie(event.target.value)} value={movie} required >
                                <option>Pick a Movie</option>
                                {movies.map((movie) => {
                                    return (
                                        <option>{movie.movie_name}</option>
                                    )
                                })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Rating:</Form.Label>
                            <Form.Control type="Number" min={0} max={5} onChange={(event) => setRating(event.target.value)} value={rating} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Subject:</Form.Label>
                            <Form.Control type="text" onChange={(event) => setSubject(event.target.value)} value={subject} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Review:</Form.Label>
                            <Form.Control as="textarea" onChange={(event) => setReview(event.target.value)} value={review} required />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </Container>

        </div >

    )
}

export default DiscussionBoard;