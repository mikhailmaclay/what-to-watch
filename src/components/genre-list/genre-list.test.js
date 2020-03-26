// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import GenreList from './genre-list';

describe(`<GenreList/>`, () => {
  const props = {
    genres: [`Comedy`],
    currentGenre: null,
    changeGenre: jest.fn()
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <GenreList {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
