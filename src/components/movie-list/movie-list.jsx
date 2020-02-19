// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-list.prop-types';
// Components
import MovieCard from '../movie-card/movie-card';

function MovieList({movies, onMouseOver}) {
  const renderMovieCards = () => (
    movies.map((movie) => <MovieCard key={movie.id} {...movie} onMovieCardMouseOver={onMouseOver}/>)
  );

  return (
    <div className="catalog__movie-list">
      {renderMovieCards()}
    </div>
  );
}

MovieList.propTypes = propTypes;

export default MovieList;
