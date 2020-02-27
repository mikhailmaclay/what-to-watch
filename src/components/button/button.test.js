// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Button from './button';

describe(`<Button/>`, () => {
  it(`should render correctly`, () => {
    const result = renderer.create(
        <Button>Hello there!</Button>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
