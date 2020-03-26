// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import MovieHeader from './movie-header';

const mockStore = configureStore([]);

describe(`<MovieHeader/>`, () => {
  const store = mockStore({
    user: {id: 1, email: `johndoe@gmail.com`, name: `John Doe`, avatar: ``},
  });

  const props = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    background: [`black`, `/img/movies/backgrounds/1.jpg`],
    genre: `Drama`,
    releaseDate: `March 13, 2014`,
    isInMyList: true,
    changeMovieStatus: jest.fn()
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <MovieHeader {...props}/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
