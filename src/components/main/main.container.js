// Libraries
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// Constants and utils
import {compose, convertToMap, extractUrlSearchParams, getFilter, getGenres, getMovieById} from '../../utils';
// Components
import Main from './main';
import {FilterName} from '../../consts';

const mapStateToProps = ({specialMovie: specialMovieId}, {movies}) => {
  const genres = getGenres(movies);
  const genresMap = convertToMap([`url`, `name`], genres);
  const searchParams = extractUrlSearchParams();

  return {
    genres,
    movies: compose(getFilter(FilterName.Movie.EXCEPT_ID, specialMovieId), getFilter(FilterName.Movie.GENRE, genresMap[searchParams.genre]))(movies),
    specialMovie: getMovieById(movies, specialMovieId),
  };
};

Main.displayName = `Main`;

const MainContainer = connect(mapStateToProps)(Main);
const MainContainerWrapped = withRouter(MainContainer); // Without withRouter does not update the component

export default MainContainerWrapped;
export {MainContainer};
