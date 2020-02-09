import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

const specialMovie = {
  name: `Some like In VAZ`,
  genre: `Comedy`,
  releaseDate: `1959`
};

const onMovieCardTitleClick = () => {};

it(`<Main/> should render correctly`, () => {
  const result = renderer.create(
      <Main specialMovie={specialMovie} onMovieCardTitleClick={onMovieCardTitleClick}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
