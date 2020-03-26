// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MoviePoster from './movie-poster';

describe(`<MoviePoster/>`, () => {
  const props = {
    src: `src`,
    alt: `alt`
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MoviePoster {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
