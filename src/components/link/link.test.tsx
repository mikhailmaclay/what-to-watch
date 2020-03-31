// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import Link from './link';

describe(`<Link/>`, () => {
  const props = {
    to: ``
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <Link {...props}>Hello there!</Link>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
