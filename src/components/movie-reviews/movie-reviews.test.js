// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MovieReviews from './movie-reviews';

const reviews = [
  {
    id: 1,
    user: {id: 1, fullName: `Shia LaBeouf`},
    date: `March 13, 2014 03:20:21`,
    rating: 10,
    text: `Hello world!`
  }
];

describe(`<MovieReviews/>`, () => {
  const props = {
    reviews
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieReviews {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
