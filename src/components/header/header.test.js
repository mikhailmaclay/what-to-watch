// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import Header from './header';

const mockStore = configureStore([]);

describe(`<Header/>`, () => {
  const store = mockStore({
    user: {id: 1, email: `johndoe@gmail.com`, name: `John Doe`, avatar: ``},
  });

  it(`should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <Header/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});
