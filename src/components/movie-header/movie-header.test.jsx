// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import MovieHeader from './movie-header';

describe(`<MovieHeader/>`, () => {
  const props = {
    name: `The Grand Budapest Hotel`,
    background: `/img/movies/backgrounds/1.jpg`,
    genre: `Drama`,
    releaseDate: `March 13, 2014`
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <MovieHeader {...props}/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
