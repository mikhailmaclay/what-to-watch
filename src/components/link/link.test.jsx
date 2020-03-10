// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import Link from './link';

describe(`<Link/>`, () => {
  const props = {
    to: ``
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <Link {...props}/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
