// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import WatchPage from './watch-page';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function.js';

describe(`<WatchPage/>`, () => {
  const props = {
    id: 1,
    name: `Hello World`,
    backgrounds: [`black`, ``],
    video: ``,
    onClose: emptyArrowFunction
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <WatchPage {...props}/>, {createNodeMock: () => ({})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
