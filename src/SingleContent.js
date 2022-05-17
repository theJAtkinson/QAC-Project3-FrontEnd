import './SingleContent.css'
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap';


const SingleContent = ({ id, movie_name, director, actors, classification, img }) => {

    return <div className="media">
        <Container>

<Link className="nav-link" to={"/movies/"+id}> <img className="poster" src={img} /> </Link>
        <b className="title"> {id}<br />{movie_name}</b>
        <b><u>Director</u></b> {director} <br />
        <b><u>Actors</u></b>{actors}<br />
        <b><u>Classification</u></b>{classification}<br />
        </Container>
    </div>;
};

export default SingleContent;