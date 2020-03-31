// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import MovieOverview from './movie-overview';

describe(`<MovieOverview/> should render correctly`, () => {
  const props = {
    directors: [`Shia LaBeouf`],
    actors: [`Shia LaBeouf`],
    rating: 9.4,
    level: `Awesome`,
    scoresCount: 3,
    description: [`Just do it! Make your dreams come true!`]
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieOverview {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
