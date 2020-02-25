// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Constants and utils
import {Config} from '../../consts';
import {getLevelFromNumber} from '../../utils';
// Components
import MovieOverview from './movie-overview';

const directors = [`Shia LaBeouf`];
const actors = [`Shia LaBeouf`];
const score = 9.4;
const level = getLevelFromNumber(score, Config.MOVIE_LEVEL_MAP);
const ratingsCount = 3;
const description = [`Just do it! Make your dreams come true!`];

it(`<MovieOverview/> should render correctly`, () => {
  const result = renderer.create(
      <MovieOverview description={description} directors={directors} actors={actors} score={score} level={level} ratingsCount={ratingsCount}/>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
