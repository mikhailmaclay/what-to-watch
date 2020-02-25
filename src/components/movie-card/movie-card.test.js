// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import {MovieCard} from './movie-card';

const movie = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Fantasy`,
  releaseDate: `March 13, 2014`,
  images: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`]
};

const handleMovieCardMouseOver = () => {};

it(`<MovieCard/> should render correctly`, () => {
  const {id, name, images} = movie;

  const result = renderer.create(
      <BrowserRouter>
        <MovieCard id={id} name={name} images={images} onMovieCardMouseOver={handleMovieCardMouseOver}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
