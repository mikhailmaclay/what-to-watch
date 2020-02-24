// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import MoviePage from './movie-page';

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    runTime: 80,
    team: [
      {fullName: `Wes Anderson`, role: `Director`},
      {fullName: `Bill Murray`, role: `Actor`},
      {fullName: `Edward Norton`, role: `Actor`},
      {fullName: `Jude Law`, role: `Actor`},
      {fullName: `Willem Dafoe`, role: `Actor`},
      {fullName: `Adrien Brody`, role: `Actor`}
    ],
    reviews: [1],
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    background: `/img/bg-the-grand-budapest-hotel.jpg`,
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

const match = {
  params: {
    id: 1
  }
};

it(`<MoviePage/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <MoviePage movies={movies} reviews={reviews} users={users} match={match}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
