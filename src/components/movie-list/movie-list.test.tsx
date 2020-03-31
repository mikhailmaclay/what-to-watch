// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import {MovieList} from './movie-list';
//
import {mockMovie} from '../../test-mock-data';

describe(`<MovieList/>`, () => {
  const props = {
    movies: [mockMovie]
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieList {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
