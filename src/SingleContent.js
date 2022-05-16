import './SingleContent.css'


const SingleContent = ({ id, movie_name, director, actors, classification, img }) => {

    return <div className="media">

        <a href={img}><img className="poster" src={img} /></a>
        <b className="title"> {id}<br />{movie_name}</b>
        <b><u>Director</u></b> {director} <br />
        <b><u>Actors</u></b>{actors}<br />
        <b><u>Classification</u></b>{classification}<br />

    </div>;

};

export default SingleContent;