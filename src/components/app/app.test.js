// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import AppContainer from './app.container';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
    reviews: [1],
    images: [`/img/the-grand-budapest-hotel.jpg`],
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

const initialState = {
  movies,
  reviews,
  users,
  specialMovie: 1
};

const store = createStore((state) => state, initialState);

describe(`<App/>`, () => {
  it(`should be rendered correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
