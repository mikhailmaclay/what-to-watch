// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import Notification from './notification';
//
import {mockNotification} from '../../test-mock-data';

describe(`<Notification/>`, () => {
  const props = mockNotification;

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Notification {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
