import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from './movie-list';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    images: [`/img/the-grand-budapest-hotel-poster.jpg`]
  }
];

it(`<MovieList/> should render correctly`, () => {
  const result = renderer.create(
      <MovieList movies={movies}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
