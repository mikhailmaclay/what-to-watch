// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
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

  it(`should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <MovieList {...props}/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
