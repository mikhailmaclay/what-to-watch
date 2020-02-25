// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-list.prop-types';
import defaultProps from './movie-list.default-props';
// Constants and utils
import {Config} from '../../consts';
// Components
import MovieCard from '../movie-card/movie-card';
import Button from '../button/button';
// HOCs
import withCounter from '../../hocs/with-counter';

function MovieList({movies, count: itemsCount, incrementCounter}) {
  const renderMovieCards = () => (
    movies.slice(0, itemsCount).map((movie) => <MovieCard key={movie.id} {...movie}/>)
  );

  const handleButtonClick = () => {
    incrementCounter(Config.MOVIE_CARDS_COUNT_BY_LOAD);
  };

  return (
    <>
      <div className="catalog__movie-list">
        {renderMovieCards()}
      </div>
      {itemsCount < movies.length &&
        <div className="catalog__more">
          <Button className="catalog__button" onClick={handleButtonClick}>Show more</Button>
        </div>
      }
    </>
  );
}

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

const MovieListWithCounter = withCounter(MovieList, Config.MOVIE_CARDS_COUNT_AT_START);

export default MovieListWithCounter;
export {MovieList};
