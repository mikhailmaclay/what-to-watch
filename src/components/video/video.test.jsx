// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import {Video} from './video';

describe(`<Video/>`, () => {
  it(`should render correctly`, () => {
    const result = renderer.create(
        <Video/>, {createNodeMock: () => ({})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
