// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import {BrowserRouter} from 'react-router-dom';
import Footer from './footer';

it(`<Footer/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
