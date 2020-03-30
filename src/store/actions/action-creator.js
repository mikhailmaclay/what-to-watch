// ActionType
import ActionType from '../action-type';

const ActionCreator = {
  loadMovies: (movies) => ({type: ActionType.LOAD_MOVIES, payload: movies}),
  loadSpecialMovie: (specialMovie) => ({type: ActionType.LOAD_SPECIAL_MOVIE, payload: specialMovie}),
  loadGenres: (genres) => ({type: ActionType.LOAD_GENRES, payload: genres}),
  loadReviews: (movieID, reviews) => ({type: ActionType.LOAD_REVIEWS, payload: {id: movieID, reviews}}),
  loadMyList: (movies) => ({type: ActionType.LOAD_MY_LIST, payload: movies}),
  setGenreFilter: (genreName) => ({type: ActionType.SET_GENRE_FILTER, payload: genreName}),
  resetGenreFilter: () => ({type: ActionType.RESET_GENRE_FILTER}),
  authorize: (user) => ({type: ActionType.AUTHORIZE, payload: user}),
  deauthorize: () => ({type: ActionType.DEAUTHORIZE}),
  showNotification: (title, content) => ({type: ActionType.SHOW_NOTIFICATION, payload: {title, content}}),
  hideNotification: () => ({type: ActionType.HIDE_NOTIFICATION}),
  changeMovieStatus: (movieID, status) => ({type: ActionType.CHANGE_MOVIE_STATUS, payload: {id: movieID, isInMyList: status}}),
  startFetching: () => ({type: ActionType.START_FETCHING}),
  endFetching: () => ({type: ActionType.END_FETCHING})
};

export default ActionCreator;
