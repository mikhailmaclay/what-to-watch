import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card';

const movie = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Fantasy`,
  releaseDate: `2018`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`<MovieCard/> should render correctly`, () => {
  const {id, name, poster} = movie;

  const result = renderer.create(
      <MovieCard id={id} name={name} poster={poster} onMovieCardMouseOver={() => {}}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
