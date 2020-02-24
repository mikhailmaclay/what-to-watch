// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import App from './app';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    background: `/img/bg-the-grand-budapest-hotel.jpg`
  }
];

const reviews = [
  {
    id: 1,
    user: 1,
    rating: 5,
    date: `November 18, 2020 03:24:00`,
    text: `DO! IT!`
  }
];

const users = [
  {id: 1, fullName: `Shia LaBeouf`}
];

it(`<App/> should be rendered`, () => {
  const result = renderer.create(
      <App movies={movies} reviews={reviews} users={users}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
