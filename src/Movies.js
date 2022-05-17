import React,{Component, useEffect, useState, useRouter} from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';
import SingleContent from './SingleContent';


const Movies = (props) => {

let params = useParams();
const [movie, setMovie] = React.useState([]);

useEffect( () => {
    axios.get("http://localhost:4005/movie/read").then(function(response) {
                                 setMovie(response.data); }).catch (function(error) {
                                console.log(error);
    })
}, []);

return (
    <div>
    {movie.filter(a => a.id == params.id).map((c) => <SingleContent key={c.id} movie_name={c.movie_name} director={c.director} actors={c.actors} classification={c.classification} img={c.img} />)}
    </div>
)

}
export default Movies;




// export default class Movies extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = { movie: {}  }

//     }
    
//     componentDidMount() {
//         axios.get("http://localhost:4005/movie/read")
//             .then((response) => { 
//                  console.log(response.data)
//                 const movie = response.data.filter(movie =>
//                      (this.props.match.params.id == movie.id) )
//                      this.setState({ movie }) }, (error) => {
//                     console.log(error);
//                 }
//             );
//         }
//     render() {
//         return(
//             <div>
//             {this.state.movie.img}
//             </div>

//         )
//     }
// }
