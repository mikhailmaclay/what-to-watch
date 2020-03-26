// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import {MovieList} from './movie-list';

const movies = [
  {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    images: [`/img/movies/images/2-1.jpg`],
  }
];

describe(`<MovieList/>`, () => {
  const props = {
    movies
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieList {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
