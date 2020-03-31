// Libraries
import * as React from 'react';
// Constants and utils
import {Config} from '../../constants/consts';
import createHOC from '../../utils/components/create-hoc';
// Components
import MovieCardWrapped from '../movie-card/movie-card';
import Button from '../button/button';
//
import {Movie} from '../../types';

interface Props {
  movies: Movie[];
  withCounter?: {
    renderedMovieCards: {
      value: number;
      increment: (value: number) => void;
    };
  };
}

function MovieList(props: Props) {
  const {movies, withCounter} = props;

  const renderMovieCards = (count) => (
    movies.slice(0, count).map((movie) => <MovieCardWrapped key={movie.id} {...movie}/>)
  );

  if (!withCounter) { // if not a withCounter HOC
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

const MovieListMemo = React.memo(MovieList);
const MovieListWrapped = createHOC(`withCounter`, {counterName: `renderedMovieCards`, initialValue: Config.MOVIE_CARDS_COUNT_AT_START, isResettableOnUpdate: true})(MovieListMemo);

export default MovieListWrapped;
export {MovieList, MovieListMemo};
