import './SingleContent.css'
import { Container } from 'react-bootstrap';


const SingleContent = ({ id, movie_name, director, actors, classification, img }) => {

    return <div className="media">
        <Container>
            <img className="poster" src={img} alt={movie_name}/>
            <b className="title"> 
                {id}<br/>
                {movie_name}<br/>
            </b>
            <b><u> Director </u></b> {director} <br/>
            <b><u> Actors </u></b> {actors} <br/>
            <b><u> Classification </u></b> {classification}<br/>
        </Container>
    </div>;
};

export default SingleContent;