import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import SingleContent from './SingleContent';


const Movies = (props) => {
    let params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:4005/movie/read").then(function(response) {
            setMovie(response.data); 
        }).catch(function(error) {
                console.log(error);
            })
    }, []);

    return (
        <div>
            {movie.filter(a => a.id === params.id).map((c) => <SingleContent key={c.id} movie_name={c.movie_name} director={c.director} actors={c.actors} classification={c.classification} img={c.img} />)}
        </div>
    )

}
export default Movies;
