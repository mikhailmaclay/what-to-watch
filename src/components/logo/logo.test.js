// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
// Components
import Logo from './logo';

it(`<Logo/> should render correctly`, () => {
  const result = renderer.create(
      <BrowserRouter>
        <Logo/>
      </BrowserRouter>
  ).toJSON();

  expect(result).toMatchSnapshot();
});
