// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Icon from './icon';

describe(`<Icon/>`, () => {
  const props = {
    name: `play-s`,
    width: `20`,
    height: `20`,
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Icon {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
