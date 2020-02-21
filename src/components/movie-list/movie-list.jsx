// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-list.prop-types';
// Components
import MovieCard from '../movie-card/movie-card';
// HOCs
import withPreviewOnHover from '../../hocs/with-preview-on-hover';

const MovieCardWithPreviewOnHover = withPreviewOnHover(MovieCard);

function MovieList({movies}) {
  const renderMovieCards = () => (
    movies.map((movie) => <MovieCardWithPreviewOnHover key={movie.id} {...movie}/>)
  );

  return (
    <div className="catalog__movie-list">
      {renderMovieCards()}
    </div>
  );
}

MovieList.propTypes = propTypes;

export default MovieList;
