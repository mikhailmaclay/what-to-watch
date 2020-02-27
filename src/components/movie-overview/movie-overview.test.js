// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MovieOverview from './movie-overview';

describe(`<MovieOverview/> should render correctly`, () => {
  const props = {
    directors: [`Shia LaBeouf`],
    actors: [`Shia LaBeouf`],
    score: 9.4,
    level: `Awesome`,
    reviewsCount: 3,
    description: [`Just do it! Make your dreams come true!`]
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <MovieOverview {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
