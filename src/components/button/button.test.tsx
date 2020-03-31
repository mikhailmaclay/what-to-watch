// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import Button from './button';

describe(`<Button/>`, () => {
  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Button>Hello there!</Button>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
