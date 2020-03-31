// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import {MovieCard} from './movie-card';

describe(`<MovieCard/>`, () => {
  const props = {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    preview: null,
    images: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`]
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieCard {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
