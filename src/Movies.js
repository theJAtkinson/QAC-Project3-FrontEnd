import React,{Component} from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';


export default class Movies extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { movie: {}  }

    }
    
    componentDidMount() {
        axios.get("http://localhost:4005/movie/read")
            .then((response) => { 
                 console.log(response.data)
                const movie = response.data.filter(movie =>
                     (this.props.match.params.id == movie) )
                     this.setState({ movie }) }, (error) => {
                    console.log(error);
                }
            );
        }
    render() {
        return(
            <div>
            {this.state.movie.image}
            </div>

        )
    }
}
