// Libraries
import {createStore, applyMiddleware} from 'redux';
// Reducers
import combinedReducer from './reducers/combined-reducer';
// Mocks
import movies from './mocks/movies';
import reviews from './mocks/reviews';
import users from './mocks/users';

const initialState = {
  movies,
  reviews,
  users,
  specialMovie: 1
};

const store = applyMiddleware()(createStore)(
    combinedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export default store;
