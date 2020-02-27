// Libraries
import {connect} from 'react-redux';
// Constants and utils
import {join} from '../../utils';
// Components
import App from './app';

const mapStateToProps = ({movies, reviews, users}) => {
  const temp = movies.slice();

  temp.forEach((movie) => {
    movie.reviews = join([`user`, `id`], join(`id`, movie.reviews, reviews), users);
  });

  return {
    movies: temp
  };
};

App.displayName = `App`;

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
