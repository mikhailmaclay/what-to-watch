// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import User from './user';

describe(`<User/>`, () => {
  const props = {
    name: `Shia LaBeouf`,
    avatar: ``
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <User {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
