import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

const specialFilm = {
  name: `Some like In VAZ`,
  genre: `Comedy`,
  releaseDate: `1959`
};

it(`<Main/> should render correctly`, () => {
  const result = renderer.create(
      <Main specialFilm={specialFilm}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
