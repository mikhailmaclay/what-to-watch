// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MoviePoster from './movie-poster';

const src = `src`;
const alt = `alt`;

it(`<MoviePoster/> should render correctly`, () => {
  const result = renderer.create(
      <MoviePoster src={src} alt={alt}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
