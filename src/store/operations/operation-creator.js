// Constants and utils
import {PathName} from '../../constants/consts';
//
import ActionCreator from '../actions/action-creator';
import adaptMovie from '../../utils/data/adapters/adapt-movie';
import adaptReview from '../../utils/data/adapters/adapt-review';
import adaptUser from '../../utils/data/adapters/adapt-user';
import selectGenres from '../../utils/data/selectors/select-genres';
import history from '../../history';

const OperationCreator = {
  loadMovies: () => (dispatch, getState, api) => api.get(`/films`)
    .then(({data}) => {
      const movies = data.map(adaptMovie);
      const genres = selectGenres(movies);

      dispatch(ActionCreator.loadMovies(movies));
      dispatch(ActionCreator.loadGenres(genres));
    }),
  loadSpecialMovie: () => (dispatch, _, api) => api.get(`/films/promo`)
    .then(({data}) => {
      const movie = adaptMovie(data);

      dispatch(ActionCreator.loadSpecialMovie(movie));
    }),
  loadMyList: () => (dispatch, _, api) => api.get(`/favorite`)
    .then(({data}) => {
      const movies = data.map(adaptMovie);

      dispatch(ActionCreator.loadMyList(movies));
    }),
  loadReviews: (movieID) => (dispatch, _, api) => api.get(`/comments/${movieID}`)
    .then(({data}) => {
      const reviews = data.map(adaptReview);

      dispatch(ActionCreator.loadReviews(movieID, reviews));
    }),
  changeMovieStatus: (movieID, status) => (dispatch, getState, api) => {
    const hasUser = Boolean(getState().user);

    if (!hasUser) {
      history.push(PathName.SIGN_IN);
    }

    return api.post(`/favorite/${movieID}/${status}`)
      .then(({data}) => {
        const movie = adaptMovie(data);
        const {isInMyList} = movie;

        dispatch(ActionCreator.changeMovieStatus(movieID, isInMyList));
      });
  },
  addReview: (movieID, review) => (dispatch, _, api) => {
    dispatch(ActionCreator.startFetching());

    return api.post(`/comments/${movieID}`, review)
      .then(() => {
        history.push(PathName.MOVIE_PAGE + movieID);

        dispatch(ActionCreator.showNotification(`Success`, `Your review has been successfully added.`));
      })
      .finally(() => dispatch(ActionCreator.endFetching()));
  },
  login: (email, password) => (dispatch, _, api) => {
    dispatch(ActionCreator.startFetching());

    return api.post(`/login`, {email, password})
      .then(({data}) => {
        const user = adaptUser(data);

        history.goBack();

        dispatch(ActionCreator.authorize(user));
      })
      .finally(() => {
        dispatch(ActionCreator.endFetching());
      });
  },
  checkAuthorization: () => (dispatch, _, api) => api.get(`/login`)
    .then(({data}) => {
      const user = adaptUser(data);

      dispatch(ActionCreator.authorize(user));
    })
    .catch((error) => {
      throw error;
    })
};

export default OperationCreator;
