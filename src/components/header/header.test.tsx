// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import Header from './header';
//
import {mockUser} from '../../test-mock-data';

const mockStore = configureStore([]);

describe(`<Header/>`, () => {
  const store = mockStore({
    user: mockUser,
  });

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <Header/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
