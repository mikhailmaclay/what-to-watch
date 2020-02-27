// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import {MovieCard} from './movie-card';

describe(`<MovieCard/>`, () => {
  const props = {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    preview: null,
    images: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`]
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <MovieCard {...props}/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
