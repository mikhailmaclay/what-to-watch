import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    background: `/img/bg-the-grand-budapest-hotel.jpg`
  }
];

it(`<App/> should be rendered`, () => {
  const result = renderer.create(
      <App movies={movies}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
