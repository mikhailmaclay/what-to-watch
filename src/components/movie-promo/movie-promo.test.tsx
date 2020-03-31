// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import MoviePromo from './movie-promo';
//
import {mockMovie, mockUser} from '../../test-mock-data';
import emptyArrowFunction from '../../utils/components/empty-arrow-function';

const mockStore = configureStore([]);

describe(`<MoviePromo/>`, () => {
  const store = mockStore({
    user: mockUser,
  });

  const props = {
    specialMovie: mockMovie,
    changeMovieStatus: emptyArrowFunction
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <MoviePromo {...props}/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
