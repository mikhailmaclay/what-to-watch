// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import {MovieList} from './movie-list';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    images: [`/img/the-grand-budapest-hotel-poster.jpg`]
  }
];
const count = 10;
const incrementCounter = () => {};

it(`<MovieList/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <MovieList movies={movies} count={count} incrementCounter={incrementCounter}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
