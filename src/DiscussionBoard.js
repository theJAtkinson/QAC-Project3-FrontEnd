import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';


function DiscussionBoard(){

    const [posts, setPosts] = useState([]);
    
    function getPosts(){
        axios.get("http://localhost:4005/post/read")
        .then((res) => {
            setPosts(res.data);
        })
    }

    return(
        <div>  
            <Container>
            <h1>Discussion Board</h1>
            <h2>Posts</h2>
                <Row>
                    {posts.map((post) => {
                        return(
                            <Col>
                                <h3>{post.title}</h3>
                                <p>
                                    <b>{post.movie_name}</b><br/>
                                    {post.rating}
                                </p>
                                <p>
                                    {post.body}
                                </p>
                                <h6>{post.fullname}</h6>
                            </Col>
                        )
                    })}
                </Row>

            </Container>

            <Container>

            </Container>

        </div>

    )
}

export default DiscussionBoard;