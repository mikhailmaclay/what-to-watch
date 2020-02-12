import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

const specialMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2014`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`
};

const onMovieCardTitleClick = () => {};

it(`<Main/> should render correctly`, () => {
  const result = renderer.create(
      <Main specialMovie={specialMovie} movies={[]} onMovieCardTitleClick={onMovieCardTitleClick}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
