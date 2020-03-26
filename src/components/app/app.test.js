// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import App from './app';

const mockStore = configureStore([]);

describe(`<App/>`, () => {
  const store = mockStore({
    movies: [],
    user: null,
    genres: [],
    currentGenre: null,
    specialMovie: null
  });

  it(`should be rendered correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <App/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
