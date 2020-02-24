// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MovieReviews from './movie-reviews';

const reviews = [
  {
    id: 1,
    movie: 1,
    user: 1,
    date: `March 13, 2014 03:20:21`,
    rating: 10,
    text: `Hello world!`
  }
];

const users = [
  {id: 1, fullName: `Shia LaBeouf`}
];

it(`<MovieReviews/> should render correctly`, () => {
  const result = renderer.create(
      <MovieReviews reviews={reviews} users={users}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
