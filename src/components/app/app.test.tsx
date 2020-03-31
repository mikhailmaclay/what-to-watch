// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import App from './app';
//
import {mockMovie, mockUser} from '../../test-mock-data';

const mockStore = configureStore([]);

describe(`<App/>`, () => {
  const store = mockStore({
    movies: [mockMovie],
    user: mockUser,
    genres: [`Adventure`],
    currentGenre: null,
    specialMovie: mockMovie,
    notification: null,
    isFetching: false
  });

  it(`Should be rendered correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <App/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
