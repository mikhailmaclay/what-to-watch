import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

const specialMovie = {
  name: `The Daddy Effect`,
  genre: `Drama`,
  releaseDate: `2004`
};

it(`<App/> should be rendered`, () => {
  const result = renderer.create(
      <App specialMovie={specialMovie}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
