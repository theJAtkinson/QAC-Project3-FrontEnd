import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import Cinema from './images/cinema.png'
import axios from 'axios';



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
                 
                     <h1 className="left"> <b>WATCH LATEST MOVIES</b></h1>
                    <Image style={{height:"100%", flex:1, width:"100%"}} src={Cinema}  />

                    <Container>
                        <br/>
                 <h2>What's On</h2> <br/> 
                <Row > {this.state.movies.map(({ id, movie_name, actors, director, img, classification }) => {
                    return (
                        <Col xs={4}  >
                            <div>
                            <Link className="nav-link" to={"/movies/"+id}> <Image src={img} width="250px" height="250px"/></Link>
                           
                            <br />
                            </div>
                        </Col>)
                })
                }



                </Row>
                </Container>
    
            </div>
        )
}
}