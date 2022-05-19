import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import trailer from './images/trailer.mov'



export default class Homepage extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] }
    }

    componentDidMount() {
        axios.get("http://localhost:4005/movie/read")
            .then((response) => { this.setState({ movies: response.data }) })
    }
    render() { 
        return (
            <div className= "imageContainer">
                <text className="left">WATCH LATEST MOVIES</text><br/>
                <video className = "videoTag" autoPlay loop muted>
                    <source width="50%" src={trailer} type='video/mp4' />
                </video>
                <Container>
                    <br/>
                    <h2>What's On</h2> <br/> 
                    <Row > 
                        {this.state.movies.map(({ id, img }) => {
                            return (
                                <Col xs={4}  >
                                    <div>
                                        <Link className="nav-link" to={"/movies/"+id}> <Image src={img} width="250px" height="250px"/></Link><br/>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}