// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import Main from './main';

const specialMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2014`,
  images: [``],
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`
};

describe(`<Main/> should render correctly`, () => {
  const props = {
    genres: [`Comedy`],
    specialMovie,
    movies: [],
    currentGenre: null,
    onGenreChange: () => {}
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <Main {...props}/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
