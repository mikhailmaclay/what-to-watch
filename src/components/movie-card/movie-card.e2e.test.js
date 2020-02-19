// Libraries
import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Components
import {BrowserRouter} from 'react-router-dom';
import MovieCard from './movie-card';

const LEFT_MOUSE_BUTTON_KEY_CODE = 0;
const MOVIE_PAGE_PATH_NAME = `/films/`;

configure({
  adapter: new Adapter()
});

const movie = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Fantasy`,
  releaseDate: `March 13, 2014`,
  images: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`]
};

const handleMovieCardMouseOver = jest.fn();

it(`<MovieCard/>: when mouse over the movie card, the identifier should be passed to the handler`, () => {
  const {id, name, images} = movie;

  const movieCard = shallow(
      <MovieCard id={id} name={name} images={images} onMovieCardMouseOver={handleMovieCardMouseOver}/>
  );

  movieCard.props().onMouseOver();

  expect(handleMovieCardMouseOver).toHaveBeenCalledTimes(1);

  expect(handleMovieCardMouseOver.mock.calls[0][0]).toBe(id);
});

it(`<MovieCard/>: click on the movie card should change url`, () => {
  const {id, name, images} = movie;

  const movieCard = mount(
      <BrowserRouter>
        <MovieCard id={id} name={name} images={images} onMovieCardMouseOver={() => {}}/>
      </BrowserRouter>
  );

  movieCard.simulate(`click`, {button: LEFT_MOUSE_BUTTON_KEY_CODE});

  expect(location.pathname).toBe(`${MOVIE_PAGE_PATH_NAME}${id}`);
});
