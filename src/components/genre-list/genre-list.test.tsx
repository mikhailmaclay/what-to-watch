// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import GenreList from './genre-list';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function';

describe(`<GenreList/>`, () => {
  const props = {
    genres: [`Comedy`],
    currentGenre: null,
    changeGenre: emptyArrowFunction
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <GenreList {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
