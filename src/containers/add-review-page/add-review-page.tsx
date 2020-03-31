// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// Constants and utils
import {PathName} from '../../constants/consts';
import createHOC from '../../utils/components/create-hoc';
import selectMovieByID from '../../utils/data/selectors/select-movie-by-id';
// Components
import AddReviewPage from '../../components/add-review-page/add-review-page';
//
import OperationCreator from '../../store/operations/operation-creator';
import ActionCreator from '../../store/actions/action-creator';
//
import {Movie} from '../../types';


interface Props {
  movies: Movie[];
  isFetching: boolean;
  showNotification: (title: string, content: string) => void;
  addReview: (movieID: number, rating: number, text: string) => void;
  match: {params: {id: string}};
}

function AddReviewPageContainer(props: Props) {
  const {movies, isFetching, showNotification, addReview, match} = props;
  const movieID = parseInt(match.params.id, 10);
  const movie = selectMovieByID(movieID)(movies);

  if (!movie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const propsToComponent = {
    isFetching,
    addReview,
    showNotification,
    movie,
    baseURL: PathName.MOVIE_PAGE + movieID
  };

  return <AddReviewPage {...propsToComponent}/>;
}

const mapStateToProps = ({movies, isFetching}) => ({movies, isFetching});

const mapDispatchToProps = (dispatch) =>({
  addReview: (movieID, rating, text) => {
    dispatch(OperationCreator.addReview(movieID, {rating, comment: text}));
  },
  showNotification: (title, content) => dispatch(ActionCreator.showNotification(title, content))
});

const AddReviewPageContainerWrapped = createHOC(`withRouter`)(AddReviewPageContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPageContainerWrapped);
