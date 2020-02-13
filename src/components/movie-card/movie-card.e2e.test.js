import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieCard from './movie-card';

configure({
  adapter: new Adapter()
});

const movie = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Fantasy`,
  releaseDate: `2018`,
  images: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`]
};

it(`<MovieCard/>: when mouse over the movie card, the identifier should be passed to the handler`, () => {
  const {id, name, images} = movie;

  const handleMovieCardMouseOver = jest.fn();

  const movieCard = shallow(
      <MovieCard id={id} name={name} images={images} onMovieCardMouseOver={handleMovieCardMouseOver}/>
  );

  movieCard.props().onMouseOver();

  expect(handleMovieCardMouseOver).toHaveBeenCalledTimes(1);

  expect(handleMovieCardMouseOver.mock.calls[0][0]).toBe(id);
});

it(`<MovieCard/>: click on the movie card should change url`, () => {
  const {id, name, images} = movie;

  delete window.location;
  // eslint-disable-next-line no-global-assign
  window.location = {assign: jest.fn()};

  const movieCard = shallow(
      <MovieCard id={id} name={name} images={images} onMovieCardMouseOver={() => {}}/>
  );

  movieCard.props().onClick();

  expect(global.window.location.assign).toHaveBeenCalledTimes(1);
});
