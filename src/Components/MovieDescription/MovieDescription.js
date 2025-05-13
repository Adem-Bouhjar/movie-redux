import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Moviedata from '../../Constant/movies';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './MovieDescription.css';

const MovieDescription = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundMovie = Moviedata.find((m) => m.id === Number(params.id));
    setMovie(foundMovie);
  }, [params.id]);

  if (!movie) {
    return <h2>Loading movie data...</h2>; 
  }

  return (
    <div className="description-container">
  <Container>
    <Row>
      <Col>
        <h1>Description of the movie {movie?.title}</h1>
        <p>{movie?.description}</p>
      </Col>
      <Col>
        <iframe
          src={movie?.trailerURL}
          title="YouTube trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Col>
    </Row>
    <Button variant="primary" className="back-button" onClick={() => navigate(-1)}>
      Back
    </Button>
  </Container>
</div>

  );
};

export default MovieDescription;
