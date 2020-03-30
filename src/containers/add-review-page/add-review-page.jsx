// Libraries
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// PropTypes
import propTypes from './add-review-page.prop-types';
// Constants and utils
import {PathName} from '../../constants/consts';
import createHOC from '../../utils/components/create-hoc';
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
// Components
import AddReviewPage from '../../components/add-review-page/add-review-page';
//
import OperationCreator from '../../store/operations/operation-creator';
import ActionCreator from '../../store/actions/action-creator';

function AddReviewPageContainer({movies, isFetching, showNotification, addReview, /* withRouter: */ match}) {
  const movieID = parseInt(match.params.id, 10);
  const movie = selectMovieByID(movieID)(movies);

  if (!movie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const tempMovie = {
    id: movie.id,
    name: movie.name,
    poster: movie.poster,
    background: movie.background
  };

  const propsToComponent = {
    isFetching,
    addReview,
    showNotification,
    movie: tempMovie,
    baseURL: PathName.MOVIE_PAGE + movieID
  };

  return <AddReviewPage {...propsToComponent}/>;
}

AddReviewPageContainer.propTypes = propTypes;

const mapStateToProps = ({movies, isFetching}) => ({movies, isFetching});

const mapDispatchToProps = (dispatch) =>({
  addReview: (movieID, rating, text) => {
    dispatch(OperationCreator.addReview(movieID, {rating, comment: text}));
  },
  showNotification: (title, content) => dispatch(ActionCreator.showNotification(title, content))
});

const AddReviewPageContainerWrapped = createHOC(`withRouter`)(AddReviewPageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPageContainerWrapped);
