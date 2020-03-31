// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import SignInPage from './sign-in-page';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function.js';

const mockStore = configureStore([]);

describe(`<SignInPage/>`, () => {
  const store = mockStore({
    user: null
  });

  const props = {
    isFetching: false,
    login: emptyArrowFunction
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
