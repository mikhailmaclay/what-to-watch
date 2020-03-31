// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import Footer from './footer';

describe(`<Footer/>`, () => {
  it(`Should render correctly`, () => {
    const result = renderer.create(
        <BrowserRouter>
          <Footer/>
        </BrowserRouter>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
