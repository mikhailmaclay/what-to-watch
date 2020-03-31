// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// Components
import AppContainer from './app';
//
import {createAPI} from '../../api';

const api = createAPI();
const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe(`<AppContainer/>`, () => {
  const store = mockStore({});

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
