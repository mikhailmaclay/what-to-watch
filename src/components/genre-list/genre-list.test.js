// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import {GenreList} from './genre-list';

const genres = [{name: `Comedy`, url: `comedy`}];

describe(`<GenreList/>`, () => {
  const props = {
    genres
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <GenreList {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
