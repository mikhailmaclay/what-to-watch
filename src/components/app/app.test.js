import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

const specialFilm = {
  name: `The Daddy Effect`,
  genre: `Drama`,
  releaseDate: `2004`
};

it(`<App/> should be rendered`, () => {
  const result = renderer.create(
      <App specialFilm={specialFilm}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
