// Libraries
import {connect} from 'react-redux';
// Constants and utils
import getGenres from '../utils/data/extractors/get-genres';
import getMovieById from '../utils/data/filters/get-movie-by-id';
import getMoviesByGenre from '../utils/data/filters/get-movies-by-genre';
// Components
import Main from '../components/main/main';
// ActionCreator
import ActionCreator from '../actions/action-creator';

const mapStateToProps = ({specialMovie: specialMovieId, currentGenre}, {movies}) => ({
  currentGenre,
  genres: getGenres(movies),
  movies: getMoviesByGenre(currentGenre, specialMovieId)(movies),
  specialMovie: getMovieById(specialMovieId)(movies),
});

const mapDispatchToProps = (dispatch) =>({
  onGenreChange: (genreName) => {
    if (!genreName) {
      dispatch(ActionCreator.resetGenreFilter());

      return;
    }

    dispatch(ActionCreator.setGenreFilter(genreName));
  }
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
