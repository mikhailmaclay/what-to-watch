// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import Header from './header';

describe(`<Header/>`, () => {
  it(`should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
