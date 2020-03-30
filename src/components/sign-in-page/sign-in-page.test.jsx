// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import SignInPage from './sign-in-page';

const mockStore = configureStore([]);

describe(`<SignInPage/>`, () => {
  const store = mockStore({
    user: null
  });

  const props = {
    isFetching: false,
    login: () => {}
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <SignInPage {...props}/>
        </Provider>, {createNodeMock: () => ({})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
