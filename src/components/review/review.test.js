// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Review from './review';

const review = {
  userName: `Shia LaBeouf`,
  rating: 5,
  date: `November 18, 2020 03:24:00`,
  text: `DO! IT!`
};

it(`<Review/> should render correctly`, () => {
  const {userName, rating, date, text} = review;

  const result = renderer.create(
      <Review rating={rating} userName={userName} date={date} text={text}/>
  );

  expect(result).toMatchSnapshot();
});
