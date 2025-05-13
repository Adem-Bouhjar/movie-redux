import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({movies, inputSearch,rating }) => {

  return (
    <div className='card-group'>
        {movies
        .filter((el) => el.title.toLowerCase().includes(inputSearch.toLowerCase())
      && el.rating >= rating)

        .map((el) => (
            <MovieCard movie={el} key={el.id} />
        ))}

    </div>
  )
}

export default MovieList