import React,{Component} from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Movies extends React.Component {
    constructor() {
        super();
        this.state = { movies: [] }
    }

    componentDidMount() {
        axios.get("http://localhost:4005/movie/read")
            .then((response) => { this.setState({ movies: response.data }) })
    }

    showDetail(){

    }

    render() {
    return (
      
       
                <div>
                     <Container>
                <Row > {this.state.movies.map(({ id, movie_name, actors, director, img, classification }) => {

                    return (
                        <Col xs={4}  >
                            <div>
                            <Link className="nav-link" to={"/movies/"+id} onClick={() => this.showDetail()}> <Image src={img} width="250px" height="250px"/></Link>
                            <br />
                            {movie_name} <br />
                            {actors} <br />
                            {director} <br />
                            {classification} <br />
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
