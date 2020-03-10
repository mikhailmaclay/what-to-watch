// Libraries
import React from 'react';
// PropTypes
import propTypes from './movie-page.prop-types';
// Constants and utils
import {Config, PathName} from '../../consts';
import createHOC from '../../utils/components/create-hoc';
import getArithmeticMean from '../../utils/numbers/get-arithmetic-mean';
import getLevelFromRating from '../../utils/data/converters/get-level-from-rating';
import getMoviesByGenre from '../../utils/data/filters/get-movies-by-genre';
import getMovieById from '../../utils/data/filters/get-movie-by-id';
import getRatings from '../../utils/data/extractors/get-ratings';
import getTeamMembersByRole from '../../utils/data/filters/get-team-members-by-role';
// Components
import MoviePage from '../../components/movie-page/movie-page';

const BEGINNING_OF_AN_ARRAY = 0;

function MoviePageContainer({movies, match}) {
  const movieId = parseInt(match.params.id, 10);
  const movie = getMovieById(movieId)(movies);

  const temp = {
    id: movie.id,
    name: movie.name,
    genre: movie.genre,
    releaseDate: movie.releaseDate,
    description: movie.description,
    reviews: movie.reviews,
    ratings: getRatings(movie),
    score: null,
    level: null,
    runTime: movie.runTime,
    directors: getTeamMembersByRole(`Director`)(movie.team),
    actors: getTeamMembersByRole(`Actor`)(movie.team),
    poster: movie.poster,
    background: movie.background,
    similarMovies: getMoviesByGenre(movie.genre, movieId)(movies).slice(BEGINNING_OF_AN_ARRAY, Config.SIMILAR_MOVIES_COUNT)
  };

  temp.score = getArithmeticMean(Config.MOVIE_SCORE_PRECISION)(temp.ratings);
  temp.level = getLevelFromRating(Config.MOVIE_LEVEL_MAP)(temp.score);

  const propsToComponent = {
    movie: temp,
    baseUrl: PathName.MOVIE_PAGE + movieId
  };

  return React.createElement(MoviePage, propsToComponent);
}

MoviePageContainer.propTypes = propTypes;

const MoviePageContainerMemo = React.memo(MoviePageContainer);
const MoviePageContainerWrapped = createHOC(`withRouter`)(MoviePageContainerMemo);

export default MoviePageContainerWrapped;
export {MoviePageContainer, MoviePageContainerMemo};
