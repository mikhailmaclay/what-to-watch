// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
// Components
import PrivateRoute from './private-route';
//
import history from '../../history';

describe(`<PrivateRoute/>`, () => {
  const props = {
    path: `/test`,
    exact: true,
    isAuthorized: true
  };

  it(`Should render correctly`, () => {
    history.push(`/test`);

    const result = renderer.create(
        <Router history={history}>
          <PrivateRoute {...props}>Test</PrivateRoute>
        </Router>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
