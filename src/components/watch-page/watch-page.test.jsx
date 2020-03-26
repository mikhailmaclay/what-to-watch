// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import WatchPage from './watch-page';

describe(`<WatchPage/>`, () => {
  const props = {
    id: 1,
    name: `Hello World`,
    background: [`black`, ``],
    onClose: () => {}
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <WatchPage {...props}/>, {createNodeMock: () => ({})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
