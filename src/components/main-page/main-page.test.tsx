// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import Main from './main-page';
//
import history from '../../history';
import {mockMovie} from '../../test-mock-data';

const mockStore = configureStore([]);

describe(`<Main/>`, () => {
  const store = mockStore({
    movies: [mockMovie]
  });

  const props = {
    movies: store.getState().movies
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Main {...props}/>
          </Router>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
