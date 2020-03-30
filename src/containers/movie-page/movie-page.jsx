// Libraries
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './movie-page.prop-types';
// Constants and utils
import {Config, PathName} from '../../constants/consts';
import createHOC from '../../utils/components/create-hoc';
import convertLevelToRating from '../../utils/data/converters/convert-level-to-rating';
import filterMoviesByGenre from '../../utils/data/filters/filter-movies-by-genre';
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
import selectTeamMembersByRole from '../../utils/data/selectors/select-team-members-by-role';
// Components
import MoviePage from '../../components/movie-page/movie-page';
//
import OperationCreator from '../../store/operations/operation-creator';

const BEGINNING_OF_AN_ARRAY = 0;

function MoviePageContainer({movies, changeMovieStatus, isAuthorized, /* withRouter: */ match}) {
  const movieID = parseInt(match.params.id, 10);
  const movie = selectMovieByID(movieID)(movies);

  if (!movie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const tempMovie = {
    id: movie.id,
    name: movie.name,
    genre: movie.genre,
    releaseDate: movie.releaseDate,
    description: movie.description,
    rating: movie.rating,
    scoresCount: movie.scoresCount,
    level: convertLevelToRating(Config.MOVIE_LEVEL_MAP)(movie.rating),
    runTime: movie.runTime,
    directors: selectTeamMembersByRole(`Director`)(movie.team),
    actors: selectTeamMembersByRole(`Actor`)(movie.team),
    poster: movie.poster,
    background: movie.background,
    similarMovies: filterMoviesByGenre(movie.genre, movieID)(movies).slice(BEGINNING_OF_AN_ARRAY, Config.SIMILAR_MOVIES_COUNT),
    isInMyList: movie.isInMyList
  };

  const propsToComponent = {
    changeMovieStatus,
    isAuthorized,
    movie: tempMovie,
    baseURL: PathName.MOVIE_PAGE + movieID
  };

  return React.createElement(MoviePage, propsToComponent);
}

MoviePageContainer.propTypes = propTypes;

const mapStateToProps = ({movies, user}) => ({
  movies,
  isAuthorized: Boolean(user)
});

const mapDispatchToProps = (dispatch) =>({
  changeMovieStatus: (movieID, status) => {
    dispatch(OperationCreator.changeMovieStatus(movieID, status));
  }
});

const MoviePageContainerWrapped = createHOC(`withRouter`)(MoviePageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainerWrapped);
