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
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`<MovieCard/>: when mouse over the movie card, the identifier should be passed to the handler`, () => {
  const {id, name, poster} = movie;

  const handleMovieCardMouseOver = jest.fn();

  const movieCard = shallow(
      <MovieCard id={id} name={name} poster={poster} onMovieCardMouseOver={handleMovieCardMouseOver}/>
  );

  movieCard.props().onMouseOver();

  expect(handleMovieCardMouseOver).toHaveBeenCalledTimes(1);

  expect(handleMovieCardMouseOver.mock.calls[0][0]).toBe(id);
});
