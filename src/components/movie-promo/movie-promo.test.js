// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import MoviePromo from './movie-promo';

const specialMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2014`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`
};

const handleMovieCardTitleClick = () => {};

it(`<MoviePromo/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <MoviePromo specialMovie={specialMovie} onMovieCardTitleClick={handleMovieCardTitleClick}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
