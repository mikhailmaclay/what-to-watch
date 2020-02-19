// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import MovieDetails from './movie-details';

const director = `Shia LaBeouf`;
const actors = [`Shia LaBeouf`];
const genre = `Motivational`;
const runTime = 5;
const releaseDate = `March 13, 2014`;

it(`<MovieDetails/> should render correctly`, () => {
  const result = renderer.create(
      <MovieDetails releaseDate={releaseDate} genre={genre} runTime={runTime} director={director} actors={actors}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
