// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import Main from './main';

const specialMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2014`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`
};

const genres = [{name: `Comedy`, url: `comedy`}];

const handleMovieCardTitleClick = () => {};

it(`<Main/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <Main specialMovie={specialMovie} movies={[]} genres={genres} onMovieCardTitleClick={handleMovieCardTitleClick}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
