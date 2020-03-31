// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import Logo from './logo';

describe(`<Logo/>`, () => {
  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Logo/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
