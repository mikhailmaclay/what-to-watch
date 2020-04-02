// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import MovieHeader from './movie-header';
//
import {mockUser} from '../../test-mock-data';
import emptyArrowFunction from '../../utils/components/empty-arrow-function';

const mockStore = configureStore([]);

describe(`<MovieHeader/>`, () => {
  const store = mockStore({
    user: mockUser,
  });

  const props = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    backgrounds: [`black`, `/img/movies/backgrounds/1.jpg`],
    genre: `Drama`,
    releaseDate: `March 13, 2014`,
    isInMyList: true,
    isAuthorized: false,
    onChangeMovieStatus: emptyArrowFunction
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
