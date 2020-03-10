// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Review from './review';

describe(`<Review/>`, () => {
  const props = {
    userName: `Shia LaBeouf`,
    rating: 5,
    date: `November 18, 2020 03:24:00`,
    text: `DO! IT!`
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <Review {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
