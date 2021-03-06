// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import MovieDetails from './movie-details';

describe(`<MovieDetails/>`, () => {
  const props = {
    directors: [`Shia LaBeouf`],
    actors: [`Shia LaBeouf`],
    genre: `Motivational`,
    runTime: 5,
    releaseDate: `March 13, 2014`
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieDetails {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
