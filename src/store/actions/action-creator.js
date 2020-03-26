// ActionType
import ActionType from '../action-type';

const ActionCreator = {
  loadMovies: (movies) => ({type: ActionType.LOAD_MOVIES, payload: movies}),
  loadSpecialMovie: (specialMovie) => ({type: ActionType.LOAD_SPECIAL_MOVIE, payload: specialMovie}),
  loadGenres: (genres) => ({type: ActionType.LOAD_GENRES, payload: genres}),
  loadReviews: (movieID, reviews) => ({type: ActionType.LOAD_REVIEWS, payload: {id: movieID, reviews}}),
  setGenreFilter: (genreName) => ({type: ActionType.SET_GENRE_FILTER, payload: genreName}),
  resetGenreFilter: () => ({type: ActionType.RESET_GENRE_FILTER}),
  authorize: (user) => ({type: ActionType.AUTHORIZE, payload: user}),
  deauthorize: () => ({type: ActionType.DEAUTHORIZE}),
  showNotification: (title, content) => ({type: ActionType.SHOW_NOTIFICATION, payload: {title, content}}),
  hideNotification: () => ({type: ActionType.HIDE_NOTIFICATION})
};

export default ActionCreator;
