// Libraries
import {combineReducers} from 'redux';
// Reducers
import movies from './movies';
import reviews from './reviews';
import users from './users';

const combinedReducer = combineReducers({movies, reviews, users});

export default combinedReducer;
