// Libraries
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// Constants and utils
import {Config, PathName} from '../../consts';
import {
  getArithmeticMean,
  getLevelFromNumber,
  getMovieById,
  getRatings,
  getSimilarMovies,
  getTeamMembersByRole
} from '../../utils';
// Components
import MoviePage from './movie-page';

const mapStateToProps = (_, {movies, /* withRouter: */ match, history}) => {
  const movieId = parseInt(match.params.id, 10);
  const movie = getMovieById(movies, movieId);

  const temp = {
    name: movie.name,
    genre: movie.genre,
    releaseDate: movie.releaseDate,
    description: movie.description,
    reviews: movie.reviews,
    ratings: getRatings(movie.reviews),
    score: null,
    level: null,
    runTime: movie.runTime,
    directors: getTeamMembersByRole(movie.team, `Director`),
    actors: getTeamMembersByRole(movie.team, `Actor`),
    poster: movie.poster,
    background: movie.background,
    similarMovies: getSimilarMovies(movies, movieId, movie.genre, Config.SIMILAR_MOVIES_COUNT)
  };

  temp.score = getArithmeticMean(temp.ratings, Config.MOVIE_SCORE_PRECISION);
  temp.level = getLevelFromNumber(temp.score, Config.MOVIE_LEVEL_MAP);

  return {
    history, // withRouter
    movie: temp,
    baseUrl: PathName.MOVIE_PAGE + movieId
  };
};

MoviePage.displayName = `MoviePage`;

const MoviePageContainer = connect(mapStateToProps)(MoviePage);
const MoviePageContainerWrapped = withRouter(MoviePageContainer);

export default MoviePageContainerWrapped;
export {MoviePageContainer};
