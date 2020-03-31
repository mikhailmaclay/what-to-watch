// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import User from './user';
import {mockUser} from '../../test-mock-data';

describe(`<User/>`, () => {
  const props = {
    name: mockUser.name,
    avatar: mockUser.avatar
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <User {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
