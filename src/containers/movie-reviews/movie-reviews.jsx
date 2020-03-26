// Libraries
import React from 'react';
import {connect} from 'react-redux';
// PropTypes
import propTypes from './movie-reviews.prop-types';
// Constants and utils
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
// Components
import MovieReviews from '../../components/movie-reviews/movie-reviews';
//
import OperationCreator from '../../store/operations/operation-creator';

class MovieReviewsContainer extends React.PureComponent {
  componentDidMount() {
    const {movieID, loadReviews} = this.props;

    loadReviews(movieID);
  }

  render() {
    const {reviews} = this.props;

    if (!reviews) {
      return null;
    }

    return React.createElement(MovieReviews, {reviews});
  }
}

MovieReviewsContainer.propTypes = propTypes;

const mapStateToProps = ({movies}, {movieID}) => {
  return {
    reviews: selectMovieByID(movieID)(movies).reviews
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (movieID) => dispatch(OperationCreator.loadReviews(movieID))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviewsContainer);
