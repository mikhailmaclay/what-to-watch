// Libraries
import {connect} from 'react-redux';
// Constants and utils
import join from '../utils/objects/join';
// Components
import App from '../components/app/app';

const mapStateToProps = ({movies, reviews, users}) => {
  const temp = movies.slice();

  temp.forEach((movie) => {
    movie.reviews = join([`user`, `id`], join(`id`, movie.reviews, reviews), users);
  });

  return {
    movies: temp
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
