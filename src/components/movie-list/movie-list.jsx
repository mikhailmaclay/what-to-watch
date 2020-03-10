// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-list.prop-types';
// Constants and utils
import {Config} from '../../consts';
import createHOC from '../../utils/components/create-hoc';
// Components
import MovieCardWrapped from '../movie-card/movie-card';
import Button from '../button/button';

function MovieList({movies, /* withCounter: */ isWithRenderedMovieCardsCounter, withCounter}) {
  const renderMovieCards = (count) => (
    movies.slice(0, count).map((movie) => <MovieCardWrapped key={movie.id} {...movie}/>)
  );

  if (!isWithRenderedMovieCardsCounter) { // if not a withCounter HOC
    return (
      <div className="catalog__movie-list">
        {renderMovieCards(Config.MOVIE_CARDS_COUNT_AT_START)}
      </div>
    );
  }

  const handleButtonClick = () => {
    withCounter.renderedMovieCards.increment(Config.MOVIE_CARDS_COUNT_BY_LOAD);
  };

  return (
    <>
      <div className="catalog__movie-list">
        {renderMovieCards(withCounter.renderedMovieCards.value)}
      </div>
      {withCounter.renderedMovieCards.value < movies.length &&
        <div className="catalog__more">
          <Button className="catalog__button" onClick={handleButtonClick}>Show more</Button>
        </div>
      }
    </>
  );
}

MovieList.propTypes = propTypes;

const MovieListMemo = React.memo(MovieList);
const MovieListWrapped = createHOC(`withCounter`, {counterName: `renderedMovieCards`, initialValue: Config.MOVIE_CARDS_COUNT_AT_START, isResettableOnUpdate: true})(MovieListMemo);

export default MovieListWrapped;
export {MovieList, MovieListMemo};
