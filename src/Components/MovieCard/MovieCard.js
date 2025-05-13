import React from "react";
import { Button, Card } from "react-bootstrap";
import "./MovieCard.css";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>
            Rating: <Rating isMovieRating={true} movieRating={movie.rating} />
          </Card.Text>
          <Link to={`/movie/${movie.id}`} className='link' state={{ movie }}>
            <Button variant='primary'>See Trailer</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
