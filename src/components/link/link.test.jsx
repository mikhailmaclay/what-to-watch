import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Link from './link';

describe(`<Link/>`, () => {
  const props = {
    to: ``
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <Link {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
