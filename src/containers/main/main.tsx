// Libraries
import {connect} from 'react-redux';
// Components
import Main from '../../components/main-page/main-page';
//
import getMovies from './main.selectors';

const mapStateToProps = (state) => ({
  movies: getMovies(state)
});

export default connect(mapStateToProps)(Main);
