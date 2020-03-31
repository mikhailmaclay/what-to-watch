// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
// Constants and utils
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
// Components
import MovieReviews from '../../components/movie-reviews/movie-reviews';
//
import OperationCreator from '../../store/operations/operation-creator';
import {Review} from '../../types';

interface Props {
  movieID: number;
  reviews: Review[];
  loadReviews: (movieID: number) => void;
}

class MovieReviewsContainer extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const {movieID, loadReviews} = this.props;

    loadReviews(movieID);
  }

  render() {
    const {reviews} = this.props;

    if (!reviews) {
      return null;
    }

    return <MovieReviews reviews={reviews}/>;
  }
}

const mapStateToProps = ({movies}, {movieID}) => {
  return {
    reviews: selectMovieByID(movieID)(movies).reviews
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (movieID) => dispatch(OperationCreator.loadReviews(movieID))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviewsContainer);
