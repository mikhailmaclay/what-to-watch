// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
// Components
import MoviePage from './movie-page';
//
import history from '../../history';
import {PathName} from '../../constants/consts';
import emptyArrowFunction from '../../utils/components/empty-arrow-function.js';
import extend from '../../utils/objects/extend';
import {mockMovie} from '../../test-mock-data';
import {mockActor, mockDirector} from '../../test-mock-data';

const FIRST_MOVIE_INDEX = 0;

const mockStore = configureStore([]);

describe(`<MoviePage/>`, () => {
  const store = mockStore({
    movies: [extend(mockMovie, {
      level: `Awesome`,
      directors: [mockDirector.fullName],
      actors: [mockActor.fullName],
      similarMovies: []
    })]
  });

  const props = {
    movie: store.getState().movies[FIRST_MOVIE_INDEX],
    baseURL: PathName.MOVIE_PAGE + store.getState().movies[FIRST_MOVIE_INDEX].id,
    isAuthorized: false,
    onChangeMovieStatus: emptyArrowFunction
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <MoviePage {...props}/>
          </Router>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
