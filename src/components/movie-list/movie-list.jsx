// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-list.prop-types';
import defaultProps from './movie-list.default-props';
// Constants and utils
import {Config} from '../../consts';
import {getLabeledDisplayName} from '../../utils';
// Components
import MovieCardWrapped from '../movie-card/movie-card';
import Button from '../button/button';
// HOCs
import withCounter from '../../hocs/with-counter';

function MovieList({movies, /* withCounter: */ renderedMovieCards, incrementRenderedMovieCards}) {
  const renderMovieCards = () => (
    movies.slice(0, renderedMovieCards).map((movie) => <MovieCardWrapped key={movie.id} {...movie}/>)
  );

  if (!renderMovieCards && !incrementRenderedMovieCards) { // if not a withCounter HOC
    return (
      <div className="catalog__movie-list">
        {renderMovieCards()}
      </div>
    );
  }

  const handleButtonClick = () => {
    incrementRenderedMovieCards(Config.MOVIE_CARDS_COUNT_BY_LOAD);
  };

  return (
    <>
      <div className="catalog__movie-list">
        {renderMovieCards()}
      </div>
      {renderedMovieCards < movies.length &&
        <div className="catalog__more">
          <Button className="catalog__button" onClick={handleButtonClick}>Show more</Button>
        </div>
      }
    </>
  );
}

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

const MovieListMemo = React.memo(MovieList);
const MovieListWrapped = withCounter(MovieListMemo, `renderedMovieCards`, Config.MOVIE_CARDS_COUNT_AT_START, true);

MovieListWrapped.displayName = getLabeledDisplayName(`withCounter`, MovieList);

export default MovieListWrapped;
export {MovieList, MovieListMemo};
