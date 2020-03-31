// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import MovieReviews from './movie-reviews';
//
import {mockReview} from '../../test-mock-data';

describe(`<MovieReviews/>`, () => {
  const props = {
    reviews: [mockReview]
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <MovieReviews {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
