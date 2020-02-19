// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import {BrowserRouter} from 'react-router-dom';
import MovieList from './movie-list';
// HOCs
import withStateUpdateOnHover from '../../hocs/with-state-update-on-hover';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    images: [`/img/the-grand-budapest-hotel-poster.jpg`]
  }
];

const MovieListWithStateUpdateOnHover = withStateUpdateOnHover(MovieList);

it(`<MovieList/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <MovieListWithStateUpdateOnHover movies={movies}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
