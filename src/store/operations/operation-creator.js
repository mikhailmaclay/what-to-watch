import ActionCreator from '../actions/action-creator';
import adaptMovie from '../../utils/data/adapters/adapt-movie';
import adaptReview from '../../utils/data/adapters/adapt-review';
import adaptUser from '../../utils/data/adapters/adapt-user';
import selectGenres from '../../utils/data/selectors/select-genres';

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
    .then(({data}) => dispatch(ActionCreator.loadMyList(data))),
  loadReviews: (movieID) => (dispatch, _, api) => api.get(`/comments/${movieID}`)
    .then(({data}) => {
      const reviews = data.map(adaptReview);

      dispatch(ActionCreator.loadReviews(movieID, reviews));
    }),
  changeMovieStatus: (movieID, status) => (dispatch, _, api) => api.post(`/favorite/${movieID}/${status}`)
    .then(({data}) => dispatch(ActionCreator.changeMovieStatus(data))),
  addReview: (movieID, review) => (dispatch, _, api) => api.post(`/comments/${movieID}`, review)
    .then(({data}) => dispatch(ActionCreator.addReview(data))),
  login: (email, password) => (dispatch, _, api) => api.post(`/login`, {email, password})
    .then(({data}) => {
      const user = adaptUser(data);

      dispatch(ActionCreator.authorize(user));
    }),
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
