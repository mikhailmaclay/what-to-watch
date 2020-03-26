// Libraries
import {combineReducers} from 'redux';
//
import movies from './movies/movies';
import genres from './genres/genres';
import currentGenre from './current-genre/current-genre';
import specialMovie from './special-movie/special-movie';
import user from './user/user';
import notification from './notification/notification';

const combinedReducer = combineReducers({movies, genres, currentGenre, specialMovie, user, notification});

export default combinedReducer;
