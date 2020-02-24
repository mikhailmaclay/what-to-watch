// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import GenreList from './genre-list';

const genres = [{name: `Comedy`, url: `comedy`}];

it(`<GenreList/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <GenreList genres={genres}/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
