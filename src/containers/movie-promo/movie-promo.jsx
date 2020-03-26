// Libraries
import {connect} from 'react-redux';
// Components
import MoviePromo from '../../components/movie-promo/movie-promo';
import OperationCreator from '../../store/operations/operation-creator';

const mapStateToProps = ({specialMovie}) => ({specialMovie});

const mapDispatchToProps = (dispatch) => ({
  changeMovieStatus: (movieID, status) => {
    dispatch(OperationCreator.changeMovieStatus(movieID, status));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePromo);
